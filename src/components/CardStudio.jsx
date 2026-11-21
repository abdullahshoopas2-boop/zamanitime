import React, { useState, useEffect, useRef } from 'react';
import { CARD_OCCASIONS, CARD_THEMES, CARD_FONTS } from '../constants/cardPresets';
import { renderCardToCanvas, exportCardAsPng, generateWhatsAppShareUrl } from '../services/cardRenderer';
import { getTranslation } from '../locales';

export default function CardStudio({
  lang = 'ar',
  initialOccasionId = 'ramadan'
}) {
  const t = (key) => getTranslation(lang, key);
  const canvasRef = useRef(null);

  const [selectedOccasionId, setSelectedOccasionId] = useState(initialOccasionId || 'ramadan');
  const [selectedThemeId, setSelectedThemeId] = useState('emerald_gold');
  const [selectedFontId, setSelectedFontId] = useState('amiri');
  const [senderName, setSenderName] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [messageText, setMessageText] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Update occasion when parent passes initialOccasionId
  useEffect(() => {
    if (initialOccasionId) {
      setSelectedOccasionId(initialOccasionId);
    }
  }, [initialOccasionId]);

  const activeOccasion = CARD_OCCASIONS.find(o => o.id === selectedOccasionId) || CARD_OCCASIONS[0];
  const activeTheme = CARD_THEMES.find(th => th.id === selectedThemeId) || CARD_THEMES[0];

  // Set default message when occasion changes if empty or matching previous preset
  useEffect(() => {
    const presetsForLang = activeOccasion.presets[lang] || activeOccasion.presets.ar;
    if (presetsForLang && presetsForLang.length > 0) {
      setMessageText(presetsForLang[0]);
    }
    if (activeOccasion.defaultTheme) {
      setSelectedThemeId(activeOccasion.defaultTheme);
    }
  }, [selectedOccasionId, lang]);

  // Re-render canvas whenever any input changes
  useEffect(() => {
    if (!canvasRef.current) return;

    renderCardToCanvas(canvasRef.current, {
      occasionTitle: t(activeOccasion.titleKey),
      recipient: recipientName,
      message: messageText,
      sender: senderName,
      theme: activeTheme,
      fontFamily: selectedFontId,
      lang
    });
  }, [selectedOccasionId, selectedThemeId, selectedFontId, senderName, recipientName, messageText, lang, activeOccasion, activeTheme]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleRandomizePreset = () => {
    const presetsForLang = activeOccasion.presets[lang] || activeOccasion.presets.ar;
    if (!presetsForLang || presetsForLang.length === 0) return;
    const randomIndex = Math.floor(Math.random() * presetsForLang.length);
    setMessageText(presetsForLang[randomIndex]);
    showToast('✨ ' + (lang === 'ar' ? 'تم اختيار عبارة جديدة!' : 'New preset phrase loaded!'));
  };

  const handleDownloadPng = () => {
    if (!canvasRef.current) return;
    const safeTitle = activeOccasion.id;
    exportCardAsPng(canvasRef.current, `zamani-${safeTitle}-greeting.png`);
    showToast(t('cardDownloadingToast'));
  };

  const handleCopyText = async () => {
    let fullGreeting = '';
    const occasionTitle = t(activeOccasion.titleKey);

    if (lang === 'ar') {
      fullGreeting = `✨ تهنئة خاصة بمناسبة: ${occasionTitle} ✨\n\n`;
      if (recipientName.trim()) fullGreeting += `إلى: ${recipientName.trim()}\n\n`;
      fullGreeting += `${messageText}\n\n`;
      if (senderName.trim()) fullGreeting += `من: ${senderName.trim()}\n\n`;
      fullGreeting += `(صممت عبر منصة زماني 🌙)`;
    } else {
      fullGreeting = `✨ Special Greetings: ${occasionTitle} ✨\n\n`;
      if (recipientName.trim()) fullGreeting += `To: ${recipientName.trim()}\n\n`;
      fullGreeting += `${messageText}\n\n`;
      if (senderName.trim()) fullGreeting += `From: ${senderName.trim()}\n\n`;
      fullGreeting += `(Created with Zamani 🌙)`;
    }

    try {
      await navigator.clipboard.writeText(fullGreeting);
      showToast(t('cardCopiedToast'));
    } catch {
      showToast(t('cardCopiedToast'));
    }
  };

  const handleShareWhatsApp = () => {
    const url = generateWhatsAppShareUrl({
      occasionTitle: t(activeOccasion.titleKey),
      recipient: recipientName,
      message: messageText,
      sender: senderName,
      lang
    });
    window.open(url, '_blank');
  };

  const currentPresets = activeOccasion.presets[lang] || activeOccasion.presets.ar || [];

  return (
    <section className="space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="bg-stone-900 text-white dark:bg-white dark:text-stone-900 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-sm font-medium border border-stone-700 dark:border-stone-200">
            <span>✨</span>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/40 text-amber-800 dark:text-amber-300 text-xs font-semibold">
          <span>🎨</span>
          <span>{t('navStudio')}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          {t('studioSectionTitle')}
        </h2>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400">
          {t('studioSectionDesc')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column (7 Cols on LG) */}
        <div className="lg:col-span-7 bg-white dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm backdrop-blur-sm">
          {/* 1. Occasion Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
              {t('cardOccasionLabel')}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CARD_OCCASIONS.map((occ) => {
                const isSelected = occ.id === selectedOccasionId;
                return (
                  <button
                    key={occ.id}
                    type="button"
                    onClick={() => setSelectedOccasionId(occ.id)}
                    className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border text-start flex items-center gap-2 ${
                      isSelected
                        ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-sm'
                        : 'bg-stone-50 dark:bg-stone-800 border-stone-200/60 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-amber-400'
                    }`}
                  >
                    <span>{occ.id === 'ramadan' ? '🌙' : (occ.id === 'eid_fitr' ? '✨' : (occ.id === 'eid_adha' ? '☀️' : (occ.id === 'academic_success' ? '🎓' : '🎆')))}</span>
                    <span className="truncate">{t(occ.titleKey)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Preset Phrases with Randomize */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                {t('presetWishesLabel')}
              </label>
              <button
                type="button"
                onClick={handleRandomizePreset}
                className="text-xs text-amber-600 dark:text-amber-400 hover:underline font-semibold flex items-center gap-1"
              >
                {t('randomizePreset')}
              </button>
            </div>
            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {currentPresets.map((phrase, idx) => (
                <div
                  key={idx}
                  onClick={() => setMessageText(phrase)}
                  className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                    messageText === phrase
                      ? 'border-amber-500 bg-amber-50/70 dark:bg-amber-950/40 text-stone-900 dark:text-stone-100 font-medium'
                      : 'border-stone-200/60 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-800/40 text-stone-600 dark:text-stone-400 hover:border-stone-300 dark:hover:border-stone-700'
                  }`}
                >
                  <p className="line-clamp-2">“{phrase}”</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Names Input (Sender and Recipient) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1">
                {t('recipientLabel')}
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder={t('recipientPlaceholder')}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1">
                {t('senderLabel')}
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder={t('senderPlaceholder')}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />
            </div>
          </div>

          {/* 4. Message Textarea */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                {t('messageLabel')}
              </label>
              <span className="text-[11px] text-stone-400">
                {messageText.length} / 280
              </span>
            </div>
            <textarea
              rows={3}
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder={t('messagePlaceholder')}
              maxLength={280}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder-stone-400 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-amber-500/40 resize-none font-arabic"
            />
          </div>

          {/* 5. Theme Palette & Font Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                {t('themeLabel')}
              </label>
              <div className="space-y-1.5">
                {CARD_THEMES.map((theme) => {
                  const isSelected = theme.id === selectedThemeId;
                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => setSelectedThemeId(theme.id)}
                      className={`w-full flex items-center justify-between p-2 rounded-xl text-xs font-medium border transition-all ${
                        isSelected
                          ? 'border-amber-500 bg-stone-100 dark:bg-stone-800 font-semibold'
                          : 'border-stone-200/60 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/50 text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      <span>{t(theme.nameKey)}</span>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-4 h-4 rounded-full border border-black/20"
                          style={{ backgroundColor: theme.canvasBg[0] }}
                        />
                        <span
                          className="w-4 h-4 rounded-full border border-black/20"
                          style={{ backgroundColor: theme.accentColor }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                {t('fontStyleLabel')}
              </label>
              <div className="space-y-1.5">
                {CARD_FONTS.map((font) => {
                  const isSelected = font.id === selectedFontId;
                  return (
                    <button
                      key={font.id}
                      type="button"
                      onClick={() => setSelectedFontId(font.id)}
                      className={`w-full p-2.5 rounded-xl text-xs text-start border transition-all ${
                        isSelected
                          ? 'border-amber-500 bg-stone-100 dark:bg-stone-800 font-semibold text-stone-900 dark:text-stone-100'
                          : 'border-stone-200/60 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/50 text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      {lang === 'ar' ? font.nameAr : font.nameEn}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview Column (5 Cols on LG) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-5 sm:p-6 shadow-sm backdrop-blur-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                {t('cardLivePreview')}
              </span>
              <span className="text-[11px] text-stone-400">
                1200 × 1200 HD
              </span>
            </div>

            {/* Canvas Card Container */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl border border-stone-800/30 bg-stone-950 flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-full object-contain block"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              {/* Download High-Res PNG Button */}
              <button
                type="button"
                onClick={handleDownloadPng}
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>{t('cardDownloadPng')}</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                {/* Share on WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>{t('cardShareWhatsApp')}</span>
                </button>

                {/* Copy Text Button */}
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 flex items-center justify-center gap-1.5 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  <span>{t('cardCopyText')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
