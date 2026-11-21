/**
 * High-Resolution HTML5 Canvas Greeting Card Renderer.
 * Creates bespoke, crisp 1200x1200px graphics with authentic arabesque motifs.
 */

export function renderCardToCanvas(canvas, {
  occasionTitle = '',
  recipient = '',
  message = '',
  sender = '',
  theme = null,
  fontFamily = 'amiri',
  lang = 'ar'
}) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = 1200;
  const height = 1200;
  canvas.width = width;
  canvas.height = height;

  const isRtl = lang === 'ar';
  const themeColors = theme || {
    canvasBg: ['#062c1d', '#0b3d29', '#041a11'],
    canvasGold: '#d4af37',
    canvasText: '#ffffff',
    canvasSubtext: '#d1fae5'
  };

  // 1. Draw Background Gradient
  const bgGrad = ctx.createRadialGradient(
    width / 2, height / 2, 80,
    width / 2, height / 2, width * 0.75
  );
  bgGrad.addColorStop(0, themeColors.canvasBg[1] || '#0b3d29');
  bgGrad.addColorStop(0.65, themeColors.canvasBg[0] || '#062c1d');
  bgGrad.addColorStop(1, themeColors.canvasBg[2] || '#041a11');

  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. Subtle Star dust / Ambient Particles
  ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
  const starCoords = [
    [150, 180, 2], [320, 110, 1.5], [890, 140, 2], [1050, 220, 1.5],
    [180, 950, 1.5], [1020, 980, 2], [220, 520, 1], [980, 480, 1],
    [340, 880, 2], [820, 910, 1.5], [600, 120, 2.5], [600, 1080, 2]
  ];
  for (const [sx, sy, sr] of starCoords) {
    ctx.beginPath();
    ctx.arc(sx, sy, sr, 0, Math.PI * 2);
    ctx.fill();
  }

  // 3. Luxurious Double Gold Borders
  const outerMargin = 45;
  const innerMargin = 60;
  const goldColor = themeColors.canvasGold || '#d4af37';

  // Outer thin border
  ctx.strokeStyle = goldColor;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.5;
  ctx.strokeRect(outerMargin, outerMargin, width - outerMargin * 2, height - outerMargin * 2);

  // Inner primary border
  ctx.lineWidth = 3;
  ctx.globalAlpha = 0.85;
  ctx.strokeRect(innerMargin, innerMargin, width - innerMargin * 2, height - innerMargin * 2);

  // 4. Intricate Arabesque Corner Ornaments
  drawCornerOrnaments(ctx, outerMargin, innerMargin, width, height, goldColor);

  ctx.globalAlpha = 1.0;

  // 5. Crescent & Star Top Emblem
  drawCrescentAndStar(ctx, width / 2, 175, 34, goldColor);

  // 6. Font selection
  let baseFont = '"Alexandria", "Cairo", sans-serif';
  if (lang === 'ar') {
    if (fontFamily === 'amiri') baseFont = '"Amiri", "Traditional Arabic", serif';
    else if (fontFamily === 'cairo') baseFont = '"Cairo", sans-serif';
    else baseFont = '"Alexandria", sans-serif';
  } else if (lang === 'hi') {
    baseFont = '"Noto Sans Devanagari", sans-serif';
  } else {
    baseFont = '"Outfit", "Inter", sans-serif';
  }

  // 7. Occasion Title
  ctx.textAlign = 'center';
  ctx.fillStyle = goldColor;
  ctx.font = `bold 56px ${baseFont}`;
  ctx.shadowColor = 'rgba(0,0,0,0.4)';
  ctx.shadowBlur = 10;
  ctx.fillText(occasionTitle, width / 2, 280);

  // Decorative divider line under title
  drawOrnamentalDivider(ctx, width / 2, 320, 360, goldColor);

  // 8. Recipient (To)
  if (recipient && recipient.trim()) {
    ctx.font = `500 36px ${baseFont}`;
    ctx.fillStyle = themeColors.canvasSubtext || '#fef3c7';
    ctx.shadowBlur = 6;
    const toPrefix = lang === 'ar' ? 'إلى: ' : (lang === 'hi' ? 'सेवा में: ' : 'To: ');
    ctx.fillText(`${toPrefix}${recipient.trim()}`, width / 2, 400);
  }

  // 9. Main Greeting Message (with multi-line wrap)
  ctx.font = `400 34px ${baseFont}`;
  ctx.fillStyle = themeColors.canvasText || '#ffffff';
  ctx.shadowBlur = 4;

  const maxMessageWidth = 860;
  const lineHeight = 56;
  const startY = recipient && recipient.trim() ? 470 : 420;

  const lines = wrapText(ctx, message || '', maxMessageWidth);
  const totalTextHeight = lines.length * lineHeight;

  // Center vertically in available space if short
  const adjustedStartY = Math.max(startY, (height / 2) - (totalTextHeight / 2) + 20);

  lines.forEach((line, index) => {
    ctx.fillText(line, width / 2, adjustedStartY + index * lineHeight);
  });

  // 10. Sender (From)
  if (sender && sender.trim()) {
    const fromY = Math.max(adjustedStartY + lines.length * lineHeight + 60, 930);
    drawOrnamentalDivider(ctx, width / 2, fromY - 30, 240, goldColor);

    ctx.font = `600 36px ${baseFont}`;
    ctx.fillStyle = themeColors.canvasSubtext || '#fef3c7';
    const fromPrefix = lang === 'ar' ? 'من: ' : (lang === 'hi' ? 'प्रेषक: ' : 'From: ');
    ctx.fillText(`${fromPrefix}${sender.trim()}`, width / 2, fromY + 25);
  }

  // 11. Discreet Bottom Branding
  ctx.shadowBlur = 0;
  ctx.font = `400 20px "Outfit", "Alexandria", sans-serif`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.fillText('زماني • ZAMANI', width / 2, height - 75);
}

function drawCornerOrnaments(ctx, outerMargin, innerMargin, width, height, color) {
  const corners = [
    [innerMargin, innerMargin, 1, 1],
    [width - innerMargin, innerMargin, -1, 1],
    [innerMargin, height - innerMargin, 1, -1],
    [width - innerMargin, height - innerMargin, -1, -1]
  ];

  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;

  corners.forEach(([cx, cy, dirX, dirY]) => {
    ctx.save();
    ctx.translate(cx, cy);

    // Decorative corner brackets
    ctx.beginPath();
    ctx.moveTo(dirX * 35, 0);
    ctx.lineTo(0, 0);
    ctx.lineTo(0, dirY * 35);
    ctx.stroke();

    // Small diagonal ornament
    ctx.beginPath();
    ctx.arc(dirX * 14, dirY * 14, 4, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    ctx.restore();
  });
}

function drawCrescentAndStar(ctx, cx, cy, radius, color) {
  ctx.save();
  ctx.fillStyle = color;

  // Crescent moon
  ctx.beginPath();
  ctx.arc(cx - 6, cy, radius, -Math.PI / 2, Math.PI / 2, false);
  ctx.arc(cx + 8, cy, radius * 0.82, Math.PI / 2, -Math.PI / 2, true);
  ctx.closePath();
  ctx.fill();

  // Small five-point star
  drawFivePointStar(ctx, cx + 18, cy - 10, 5, 11, 5, color);

  ctx.restore();
}

function drawFivePointStar(ctx, cx, cy, spikes, outerRadius, innerRadius, color) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawOrnamentalDivider(ctx, cx, cy, length, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.65;

  const half = length / 2;
  // Left line
  ctx.beginPath();
  ctx.moveTo(cx - half, cy);
  ctx.lineTo(cx - 24, cy);
  ctx.stroke();

  // Center diamond motif
  ctx.beginPath();
  ctx.moveTo(cx, cy - 8);
  ctx.lineTo(cx + 10, cy);
  ctx.lineTo(cx, cy + 8);
  ctx.lineTo(cx - 10, cy);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();

  // Right line
  ctx.beginPath();
  ctx.moveTo(cx + 24, cy);
  ctx.lineTo(cx + half, cy);
  ctx.stroke();

  ctx.restore();
}

function wrapText(ctx, text, maxWidth) {
  if (!text) return [];
  const words = text.split(/\s+/);
  const lines = [];
  let currentLine = words[0] || '';

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const testLine = `${currentLine} ${word}`;
    const metrics = ctx.measureText(testLine);
    if (metrics.width < maxWidth) {
      currentLine = testLine;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

export function exportCardAsPng(canvas, filename = 'zamani-greeting-card.png') {
  if (!canvas) return;
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function generateWhatsAppShareUrl({ occasionTitle, recipient, message, sender, lang = 'ar' }) {
  let formatted = '';
  if (lang === 'ar') {
    formatted = `✨ *تهنئة خاصة: ${occasionTitle}* ✨\n\n`;
    if (recipient) formatted += `إلى: ${recipient}\n\n`;
    formatted += `${message}\n\n`;
    if (sender) formatted += `من: ${sender}\n\n`;
    formatted += `صممت عبر منصة زماني 🌙`;
  } else if (lang === 'hi') {
    formatted = `✨ *विशेष बधाई: ${occasionTitle}* ✨\n\n`;
    if (recipient) formatted += `सेवा में: ${recipient}\n\n`;
    formatted += `${message}\n\n`;
    if (sender) formatted += `प्रेषक: ${sender}\n\n`;
    formatted += `ज़मानी (Zamani) द्वारा निर्मित 🌙`;
  } else {
    formatted = `✨ *Greetings: ${occasionTitle}* ✨\n\n`;
    if (recipient) formatted += `To: ${recipient}\n\n`;
    formatted += `${message}\n\n`;
    if (sender) formatted += `From: ${sender}\n\n`;
    formatted += `Created with Zamani 🌙`;
  }

  return `https://api.whatsapp.com/send?text=${encodeURIComponent(formatted)}`;
}
