import React from 'react';
import { formatLocalizedNumber, getTranslation } from '../locales';

export default function TimeDisplay({
  timeRemaining,
  lang = 'ar',
  useEasternDigits = true,
  colorScheme = 'emerald',
  size = 'normal' // 'normal' | 'large'
}) {
  const t = (key) => getTranslation(lang, key);

  if (timeRemaining.isPast) {
    return (
      <div className="py-6 px-4 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-center animate-fade-in">
        <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-lg flex items-center justify-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          {t('activeNow')}
        </span>
      </div>
    );
  }

  const units = [
    {
      label: timeRemaining.days === 1 ? t('days') : t('daysPlural'),
      value: timeRemaining.daysFormatted,
      num: timeRemaining.days
    },
    {
      label: t('hours'),
      value: timeRemaining.hoursFormatted,
      num: timeRemaining.hours
    },
    {
      label: t('minutes'),
      value: timeRemaining.minutesFormatted,
      num: timeRemaining.minutes
    },
    {
      label: t('seconds'),
      value: timeRemaining.secondsFormatted,
      num: timeRemaining.seconds
    }
  ];

  const schemeStyles = {
    emerald: {
      bg: 'bg-emerald-50/60 dark:bg-emerald-950/30',
      border: 'border-emerald-200/60 dark:border-emerald-800/40',
      text: 'text-emerald-900 dark:text-emerald-100',
      accent: 'text-emerald-600 dark:text-emerald-400'
    },
    amber: {
      bg: 'bg-amber-50/60 dark:bg-amber-950/30',
      border: 'border-amber-200/60 dark:border-amber-800/40',
      text: 'text-amber-900 dark:text-amber-100',
      accent: 'text-amber-600 dark:text-amber-400'
    },
    indigo: {
      bg: 'bg-indigo-50/60 dark:bg-indigo-950/30',
      border: 'border-indigo-200/60 dark:border-indigo-800/40',
      text: 'text-indigo-900 dark:text-indigo-100',
      accent: 'text-indigo-600 dark:text-indigo-400'
    },
    neutral: {
      bg: 'bg-stone-50 dark:bg-stone-900/40',
      border: 'border-stone-200 dark:border-stone-800',
      text: 'text-stone-900 dark:text-stone-100',
      accent: 'text-stone-600 dark:text-stone-400'
    }
  };

  const currentScheme = schemeStyles[colorScheme] || schemeStyles.emerald;

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3.5 w-full">
      {units.map((unit, idx) => (
        <div
          key={idx}
          className={`flex flex-col items-center justify-center rounded-xl p-2.5 sm:p-3.5 backdrop-blur-sm transition-all duration-200 ${currentScheme.bg} border ${currentScheme.border}`}
        >
          <span
            className={`font-mono font-bold tracking-tight select-none transition-all ${
              size === 'large'
                ? 'text-2xl sm:text-4xl lg:text-5xl'
                : 'text-xl sm:text-3xl'
            } ${currentScheme.text}`}
          >
            {formatLocalizedNumber(unit.value, lang, useEasternDigits)}
          </span>
          <span className="text-[11px] sm:text-xs font-medium text-stone-500 dark:text-stone-400 mt-1 uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
