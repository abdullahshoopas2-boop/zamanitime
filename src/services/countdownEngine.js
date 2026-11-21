/**
 * High-precision countdown calculation engine with native Intl Hijri integration.
 */

export function calculateTimeRemaining(targetDate, now = new Date()) {
  const targetMs = targetDate instanceof Date ? targetDate.getTime() : new Date(targetDate).getTime();
  const nowMs = now.getTime();
  const diffMs = targetMs - nowMs;

  if (diffMs <= 0) {
    return {
      isPast: true,
      totalSeconds: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      daysFormatted: '00',
      hoursFormatted: '00',
      minutesFormatted: '00',
      secondsFormatted: '00',
      progressPercent: 100
    };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    isPast: false,
    totalSeconds,
    days,
    hours,
    minutes,
    seconds,
    daysFormatted: String(days).padStart(2, '0'),
    hoursFormatted: String(hours).padStart(2, '0'),
    minutesFormatted: String(minutes).padStart(2, '0'),
    secondsFormatted: String(seconds).padStart(2, '0')
  };
}

/**
 * Formats current date into both Gregorian and Hijri strings.
 */
export function getFormattedCurrentDates(now = new Date(), lang = 'ar') {
  // Gregorian
  const gregLocale = lang === 'ar' ? 'ar-EG' : (lang === 'hi' ? 'hi-IN' : 'en-US');
  const gregOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  let gregorianStr = '';
  try {
    gregorianStr = new Intl.DateTimeFormat(gregLocale, gregOptions).format(now);
  } catch {
    gregorianStr = now.toDateString();
  }

  // Hijri (Umm al-Qura)
  let hijriStr = '';
  try {
    const hijriLocale = lang === 'ar' ? 'ar-SA-u-ca-islamic-umalqura' : (lang === 'hi' ? 'hi-IN-u-ca-islamic-umalqura' : 'en-US-u-ca-islamic-umalqura');
    hijriStr = new Intl.DateTimeFormat(hijriLocale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(now);
  } catch {
    hijriStr = '';
  }

  return {
    gregorian: gregorianStr,
    hijri: hijriStr
  };
}

/**
 * Formats a target date for display in the active language.
 */
export function formatTargetDate(dateObj, lang = 'ar') {
  if (!dateObj) return '';
  const date = dateObj instanceof Date ? dateObj : new Date(dateObj);
  const locale = lang === 'ar' ? 'ar-EG' : (lang === 'hi' ? 'hi-IN' : 'en-US');

  try {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  } catch {
    return date.toISOString().split('T')[0];
  }
}
