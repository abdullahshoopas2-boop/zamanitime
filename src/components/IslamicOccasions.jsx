import React from 'react';
import { ISLAMIC_OCCASIONS, getActiveOrNextIslamicOccurrence } from '../constants/islamicOccasions';
import { calculateTimeRemaining, formatTargetDate } from '../services/countdownEngine';
import { getTranslation, formatLocalizedNumber } from '../locales';
import TimeDisplay from './TimeDisplay';

export default function IslamicOccasions({
  now,
  lang = 'ar',
  useEasternDigits = true,
  onSelectOccasionForCard
}) {
  const t = (key) => getTranslation(lang, key);

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
          <span>🌙</span>
          <span>{t('islamicSectionTitle')}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          {t('islamicSectionTitle')}
        </h2>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400">
          {t('islamicSectionDesc')}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
        {ISLAMIC_OCCASIONS.map((occasion) => {
          const occurrence = getActiveOrNextIslamicOccurrence(occasion.id, now);
          const timeRemaining = calculateTimeRemaining(occurrence.targetDateObj, now);

          const isOngoing = occurrence.isOngoing;
          const hadithQuote = occasion.id === 'ramadan'
            ? t('hadithOrQuoteRamadan')
            : (occasion.id === 'eid_fitr' ? t('hadithOrQuoteEidFitr') : t('hadithOrQuoteEidAdha'));

          return (
            <div
              key={occasion.id}
              className={`relative overflow-hidden rounded-3xl border border-stone-200/80 dark:border-stone-800/90 bg-white/70 dark:bg-stone-900/60 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between backdrop-blur-sm group`}
            >
              {/* Subtle Ambient Background Glow */}
              <div
                className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none ${occasion.bgGlow}`}
              />

              {/* Card Top */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl select-none">
                      {occasion.id === 'ramadan' ? '🌙' : (occasion.id === 'eid_fitr' ? '✨' : '☀️')}
                    </span>
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700/60">
                      {occasion.hijriDayMonth} ({occurrence.hijriYear} {lang === 'ar' ? 'هـ' : (lang === 'hi' ? 'हि.' : 'AH')})
                    </span>
                  </div>

                  {isOngoing && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300/50">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      {t('activeNow')}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-50 font-arabic">
                    {t(occasion.titleKey)}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
                    {t(occasion.subtitleKey)}
                  </p>
                </div>

                {/* Target Date Pill */}
                <div className="inline-flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-medium">
                  <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>
                    {formatTargetDate(occurrence.targetDateObj, lang)}
                  </span>
                </div>
              </div>

              {/* Live Countdown Display */}
              <div className="my-6">
                <TimeDisplay
                  timeRemaining={timeRemaining}
                  lang={lang}
                  useEasternDigits={useEasternDigits}
                  colorScheme={occasion.colorTheme}
                />
              </div>

              {/* Spiritual Reflection Quote */}
              <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-800 text-xs italic text-stone-600 dark:text-stone-300 leading-relaxed font-arabic">
                {hadithQuote}
              </div>

              {/* Action Button: Design Card for this Occasion */}
              <div className="pt-5 mt-2 border-t border-stone-100 dark:border-stone-800/60">
                <button
                  type="button"
                  onClick={() => onSelectOccasionForCard(occasion.id)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-900 shadow-sm"
                >
                  <span>🎨</span>
                  <span>{t('createCardForOccasion')}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
