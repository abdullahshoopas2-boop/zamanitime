import React from 'react';
import { getTranslation, SUPPORTED_LANGUAGES } from '../locales';
import { getFormattedCurrentDates } from '../services/countdownEngine';

export default function Header({
  lang,
  setLang,
  theme,
  setTheme,
  useEasternDigits,
  setUseEasternDigits,
  activeTab,
  setActiveTab,
  now
}) {
  const t = (key) => getTranslation(lang, key);
  const formattedDates = getFormattedCurrentDates(now, lang);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#faf9f6]/85 dark:bg-[#0c0d10]/85 border-b border-stone-200/80 dark:border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('islamic')}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white font-serif text-2xl select-none">
              🌙
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 font-arabic">
                  {t('appName')}
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-medium tracking-wide uppercase rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40 dark:border-emerald-700/40">
                  {lang === 'ar' ? 'مباشر' : (lang === 'hi' ? 'लाइव' : 'LIVE')}
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 hidden md:block">
                {t('appSubtitle')}
              </p>
            </div>
          </div>

          {/* Right Controls: Language, Numerals, Theme */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Numeral Format Toggle (when in AR or HI) */}
            {(lang === 'ar' || lang === 'hi') && (
              <button
                type="button"
                onClick={() => setUseEasternDigits(!useEasternDigits)}
                title={t('numberFormatLabel')}
                className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-xl border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800/60 text-stone-600 dark:text-stone-300 transition-colors"
              >
                <span>{useEasternDigits ? '١٢٣' : '123'}</span>
              </button>
            )}

            {/* Language Switcher Buttons (AR / EN / HI) */}
            <div className="flex items-center p-1 rounded-xl bg-stone-100 dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800">
              {SUPPORTED_LANGUAGES.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLang(item.code)}
                  className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                    lang === item.code
                      ? 'bg-white dark:bg-stone-800 text-emerald-600 dark:text-emerald-400 shadow-sm'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                  }`}
                >
                  {item.nativeName}
                </button>
              ))}
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t('lightMode') : t('darkMode')}
              className="p-2 sm:p-2.5 rounded-xl border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800/80 text-stone-700 dark:text-stone-300 transition-colors"
            >
              {theme === 'dark' ? (
                // Sun Icon
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="w-5 h-5 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Live Date Strip & Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-3 pt-1 border-t border-stone-100 dark:border-stone-800/60 gap-3 text-xs">
          {/* Real-time Dates Indicator */}
          <div className="flex items-center gap-3 text-stone-500 dark:text-stone-400 overflow-x-auto max-w-full">
            <span className="flex items-center gap-1.5 font-medium whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{formattedDates.gregorian}</span>
            </span>
            {formattedDates.hijri && (
              <>
                <span className="opacity-40">•</span>
                <span className="font-arabic font-medium text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                  {formattedDates.hijri}
                </span>
              </>
            )}
          </div>

          {/* Navigation Pill Buttons */}
          <nav className="flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-center">
            <button
              type="button"
              onClick={() => setActiveTab('islamic')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'islamic'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800/60'
              }`}
            >
              {t('navIslamic')}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('academic')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'academic'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800/60'
              }`}
            >
              {t('navAcademic')}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('studio')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'studio'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800/60'
              }`}
            >
              {t('navStudio')}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
