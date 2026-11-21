import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import IslamicOccasions from './components/IslamicOccasions';
import CountryCountdowns from './components/CountryCountdowns';
import CardStudio from './components/CardStudio';
import Footer from './components/Footer';
import { getTranslation } from './locales';
import { getActiveOrNextIslamicOccurrence } from './constants/islamicOccasions';
import { calculateTimeRemaining } from './services/countdownEngine';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('zamani_lang') || 'ar';
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('zamani_theme') || 'dark';
  });

  const [useEasternDigits, setUseEasternDigits] = useState(true);
  const [activeTab, setActiveTab] = useState('islamic'); // 'islamic' | 'academic' | 'studio' | 'all'
  const [selectedStudioOccasion, setSelectedStudioOccasion] = useState('ramadan');
  const [now, setNow] = useState(() => new Date());

  // Real-time 1-second clock interval for all countdown timers
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Update HTML direction and language
  useEffect(() => {
    const isRtl = lang === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('zamani_lang', lang);

    // Apply font family based on language
    if (lang === 'ar') {
      document.body.style.fontFamily = '"Alexandria", "Cairo", system-ui, sans-serif';
    } else if (lang === 'hi') {
      document.body.style.fontFamily = '"Noto Sans Devanagari", system-ui, sans-serif';
    } else {
      document.body.style.fontFamily = '"Outfit", "Inter", system-ui, sans-serif';
    }
  }, [lang]);

  // Update theme class on HTML element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('zamani_theme', theme);
  }, [theme]);

  const t = (key) => getTranslation(lang, key);

  // Jump to card studio for a specific occasion
  const handleSelectOccasionForCard = (occasionId) => {
    setSelectedStudioOccasion(occasionId);
    setActiveTab('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate quick stats for hero bar
  const ramadanOccurrence = getActiveOrNextIslamicOccurrence('ramadan', now);
  const ramadanTimer = calculateTimeRemaining(ramadanOccurrence?.targetDateObj, now);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-stone-900 dark:bg-[#0c0d10] dark:text-stone-100 transition-colors duration-300">
      {/* App Header with Language, Numerals, Theme and Nav */}
      <Header
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        useEasternDigits={useEasternDigits}
        setUseEasternDigits={setUseEasternDigits}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        now={now}
      />

      {/* Hero Welcome Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 w-full">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-transparent border border-emerald-500/20 p-6 sm:p-8 backdrop-blur-md">
          {/* Subtle Islamic geometric star pattern background */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 opacity-10 pointer-events-none text-emerald-400">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <polygon points="50,0 63,35 100,35 70,57 82,91 50,70 18,91 30,57 0,35 37,35" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                {lang === 'ar' ? 'المنصة العربية الموحدة للمناسبات' : (lang === 'hi' ? 'एकीकृत अरब मंच' : 'Unified Arab Milestones Platform')}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50 font-arabic">
                {t('appTagline')}
              </h2>
            </div>

            {/* Quick Hero Indicator (Ramadan Quick Pill) */}
            <div className="flex items-center gap-4 bg-white/70 dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 rounded-2xl p-3.5 sm:p-4 shadow-sm self-stretch md:self-auto">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl">
                🌙
              </div>
              <div>
                <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                  {t('ramadanTitle')}
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-emerald-700 dark:text-emerald-400">
                  {ramadanTimer.isPast ? (
                    t('activeNow')
                  ) : (
                    <>
                      {ramadanTimer.days} <span className="text-xs font-normal text-stone-500">{t('days')}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-14">
        {activeTab === 'islamic' && (
          <div className="animate-fade-in">
            <IslamicOccasions
              now={now}
              lang={lang}
              useEasternDigits={useEasternDigits}
              onSelectOccasionForCard={handleSelectOccasionForCard}
            />
          </div>
        )}

        {activeTab === 'academic' && (
          <div className="animate-fade-in">
            <CountryCountdowns
              now={now}
              lang={lang}
              useEasternDigits={useEasternDigits}
            />
          </div>
        )}

        {activeTab === 'studio' && (
          <div className="animate-fade-in">
            <CardStudio
              lang={lang}
              initialOccasionId={selectedStudioOccasion}
            />
          </div>
        )}
      </main>

      {/* App Footer */}
      <Footer lang={lang} setActiveTab={setActiveTab} />
    </div>
  );
}
