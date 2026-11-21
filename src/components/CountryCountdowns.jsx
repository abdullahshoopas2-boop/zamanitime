import React, { useState, useMemo } from 'react';
import { ARAB_COUNTRIES, getCountryCountdownTargets } from '../constants/arabCountries';
import { calculateTimeRemaining, formatTargetDate } from '../services/countdownEngine';
import { getTranslation, formatLocalizedNumber } from '../locales';
import TimeDisplay from './TimeDisplay';

export default function CountryCountdowns({
  now,
  lang = 'ar',
  useEasternDigits = true
}) {
  const t = (key) => getTranslation(lang, key);
  const [selectedCountryId, setSelectedCountryId] = useState('saudi_arabia');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('all');
  const [yearTypeToggle, setYearTypeToggle] = useState('gregorian'); // 'gregorian' | 'hijri'

  // Region groupings
  const GULF_CODES = ['SA', 'AE', 'QA', 'KW', 'BH', 'OM'];
  const NORTH_AFRICA_CODES = ['EG', 'DZ', 'MA', 'TN', 'LY', 'MR'];
  const LEVANT_CODES = ['JO', 'PS', 'LB', 'SY', 'IQ'];
  const NILE_HORN_CODES = ['SD', 'SO', 'DJ', 'KM'];

  const filteredCountries = useMemo(() => {
    return ARAB_COUNTRIES.filter((country) => {
      // Region filter
      if (activeRegion === 'gulf' && !GULF_CODES.includes(country.code)) return false;
      if (activeRegion === 'north_africa' && !NORTH_AFRICA_CODES.includes(country.code)) return false;
      if (activeRegion === 'levant' && !LEVANT_CODES.includes(country.code)) return false;
      if (activeRegion === 'nile_horn' && !NILE_HORN_CODES.includes(country.code)) return false;

      // Text query filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const nameAr = country.nameAr.toLowerCase();
      const nameEn = country.nameEn.toLowerCase();
      const nameHi = country.nameHi.toLowerCase();
      const capitalAr = country.capitalAr.toLowerCase();
      const capitalEn = country.capitalEn.toLowerCase();

      return nameAr.includes(q) || nameEn.includes(q) || nameHi.includes(q) || capitalAr.includes(q) || capitalEn.includes(q);
    });
  }, [searchQuery, activeRegion]);

  const targets = useMemo(() => {
    return getCountryCountdownTargets(selectedCountryId, now);
  }, [selectedCountryId, now]);

  const country = targets.country;
  const currentTermTimer = calculateTimeRemaining(targets.currentTerm.targetDateObj, now);
  const academicYearTimer = calculateTimeRemaining(targets.academicYearEnd.targetDateObj, now);
  const gregorianYearTimer = calculateTimeRemaining(targets.gregorianYearEnd.targetDateObj, now);
  const hijriYearTimer = calculateTimeRemaining(targets.hijriYearEnd.targetDateObj, now);

  const getCountryName = (c) => {
    if (lang === 'hi') return c.nameHi;
    if (lang === 'en') return c.nameEn;
    return c.nameAr;
  };

  const getCapital = (c) => {
    if (lang === 'hi') return c.capitalHi;
    if (lang === 'en') return c.capitalEn;
    return c.capitalAr;
  };

  const getTermTitle = (term) => {
    if (lang === 'hi') return term.titleHi || term.titleEn;
    if (lang === 'en') return term.titleEn;
    return term.titleAr;
  };

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/40 text-blue-800 dark:text-blue-300 text-xs font-semibold">
          <span>📚</span>
          <span>{t('navAllArab')}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          {t('academicSectionTitle')}
        </h2>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400">
          {t('academicSectionDesc')}
        </p>
      </div>

      {/* Country Selector Toolbar */}
      <div className="bg-white/80 dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-4 sm:p-6 shadow-sm space-y-4 backdrop-blur-sm">
        {/* Search Bar & Region Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchCountry')}
              className="w-full pl-9 pr-9 py-2 text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
            <span className="absolute left-3 top-2.5 rtl:left-auto rtl:right-3 text-stone-400">
              🔍
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 rtl:right-auto rtl:left-3 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Region Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 md:pb-0 text-xs font-medium">
            {[
              { id: 'all', label: t('filterAll') },
              { id: 'gulf', label: t('filterGulf') },
              { id: 'north_africa', label: t('filterNorthAfrica') },
              { id: 'levant', label: t('filterLevant') },
              { id: 'nile_horn', label: t('filterNileHorn') }
            ].map((rf) => (
              <button
                key={rf.id}
                type="button"
                onClick={() => setActiveRegion(rf.id)}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                  activeRegion === rf.id
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-semibold shadow-sm'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200/70 dark:hover:bg-stone-700/60'
                }`}
              >
                {rf.label}
              </button>
            ))}
          </div>
        </div>

        {/* 22 Countries Pills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pt-2 max-h-56 overflow-y-auto pr-1">
          {filteredCountries.map((c) => {
            const isSelected = c.id === selectedCountryId;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCountryId(c.id)}
                className={`flex items-center gap-2 p-2 rounded-xl text-xs sm:text-sm font-medium transition-all text-start border ${
                  isSelected
                    ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold shadow-sm'
                    : 'bg-stone-50/80 dark:bg-stone-800/50 border-stone-200/60 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-stone-300 dark:hover:border-stone-700'
                }`}
              >
                <span className="text-xl select-none">{c.flag}</span>
                <span className="truncate">{getCountryName(c)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Country Hero Banner */}
      <div className="rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-4xl shadow-sm select-none">
            {country.flag}
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                {country.code}
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400">
                {t('capitalLabel')} <strong className="text-stone-700 dark:text-stone-200">{getCapital(country)}</strong>
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50 mt-1">
              {getCountryName(country)}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 flex items-center gap-2">
              <span>{t('systemTypeLabel')}</span>
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                {country.academicSystem === '3_terms' ? t('system3Terms') : t('system2Semesters')}
              </span>
            </p>
          </div>
        </div>

        {/* Academic Year indicator badge */}
        <div className="text-right rtl:text-left self-end md:self-center">
          <div className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider font-semibold">
            {t('selectedCountryBanner')}
          </div>
          <div className="text-lg font-bold text-stone-900 dark:text-stone-100">
            {country.currentAcademicYear}
          </div>
        </div>
      </div>

      {/* The 3 Core Live Countdowns for Selected Country */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Countdown 1: End of Current Academic Term */}
        <div className="rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900/60 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">⏳</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-300/40">
                {targets.currentTerm.id.replace('_', ' ').toUpperCase()}
              </span>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-50">
                {t('endOfCurrentTerm')}
              </h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                {getTermTitle(targets.currentTerm)}
              </p>
            </div>
            <div className="text-xs text-stone-600 dark:text-stone-300 font-medium flex items-center gap-2">
              <span>📅</span>
              <span>{formatTargetDate(targets.currentTerm.targetDateObj, lang)}</span>
            </div>
          </div>

          <div className="my-4">
            <TimeDisplay
              timeRemaining={currentTermTimer}
              lang={lang}
              useEasternDigits={useEasternDigits}
              colorScheme="indigo"
            />
          </div>

          {targets.currentTerm.nextStart && (
            <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400">
              <span className="font-semibold text-stone-800 dark:text-stone-200">{t('nextTermStarts')}</span>{' '}
              <span>{formatTargetDate(new Date(targets.currentTerm.nextStart), lang)}</span>
            </div>
          )}
        </div>

        {/* Countdown 2: End of Academic Year (Summer Break) */}
        <div className="rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900/60 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🎓</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40">
                {country.currentAcademicYear}
              </span>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-50">
                {t('endOfAcademicYear')}
              </h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                {getTermTitle(targets.academicYearEnd)}
              </p>
            </div>
            <div className="text-xs text-stone-600 dark:text-stone-300 font-medium flex items-center gap-2">
              <span>📅</span>
              <span>{formatTargetDate(targets.academicYearEnd.targetDateObj, lang)}</span>
            </div>
          </div>

          <div className="my-4">
            <TimeDisplay
              timeRemaining={academicYearTimer}
              lang={lang}
              useEasternDigits={useEasternDigits}
              colorScheme="emerald"
            />
          </div>

          <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400 flex items-center justify-between">
            <span>{t('schoolDaysRemaining')}:</span>
            <span className="font-bold text-emerald-700 dark:text-emerald-400">
              ~{formatLocalizedNumber(Math.round(academicYearTimer.days * 0.71), lang, useEasternDigits)} {t('days')}
            </span>
          </div>
        </div>

        {/* Countdown 3: End of Year (Gregorian / Hijri) */}
        <div className="rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900/60 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🎆</span>
              {/* Toggle Gregorian / Hijri Year */}
              <div className="flex items-center p-0.5 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs">
                <button
                  type="button"
                  onClick={() => setYearTypeToggle('gregorian')}
                  className={`px-2 py-1 rounded-md font-medium transition-all ${
                    yearTypeToggle === 'gregorian'
                      ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm'
                      : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
                  }`}
                >
                  {t('gregorian')}
                </button>
                <button
                  type="button"
                  onClick={() => setYearTypeToggle('hijri')}
                  className={`px-2 py-1 rounded-md font-medium transition-all ${
                    yearTypeToggle === 'hijri'
                      ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm'
                      : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
                  }`}
                >
                  {t('hijri')}
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-50">
                {yearTypeToggle === 'gregorian' ? t('endOfGregorianYear') : t('endOfHijriYear')}
              </h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                {yearTypeToggle === 'gregorian'
                  ? targets.gregorianYearEnd.titleAr
                  : targets.hijriYearEnd.titleAr}
              </p>
            </div>

            <div className="text-xs text-stone-600 dark:text-stone-300 font-medium flex items-center gap-2">
              <span>📅</span>
              <span>
                {formatTargetDate(
                  yearTypeToggle === 'gregorian'
                    ? targets.gregorianYearEnd.targetDateObj
                    : targets.hijriYearEnd.targetDateObj,
                  lang
                )}
              </span>
            </div>
          </div>

          <div className="my-4">
            <TimeDisplay
              timeRemaining={yearTypeToggle === 'gregorian' ? gregorianYearTimer : hijriYearTimer}
              lang={lang}
              useEasternDigits={useEasternDigits}
              colorScheme="amber"
            />
          </div>

          <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400">
            <span>
              {yearTypeToggle === 'gregorian'
                ? (lang === 'ar' ? 'الاحتفال برأس السنة الميلادية الجديدة' : 'Celebration of Gregorian New Year')
                : (lang === 'ar' ? 'حلول العام الهجري الجديد وغرة محرم' : 'Arrival of the New Hijri Year 1 Muharram')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
