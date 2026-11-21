import React from 'react';
import { getTranslation } from '../locales';

export default function Footer({ lang = 'ar', setActiveTab }) {
  const t = (key) => getTranslation(lang, key);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-stone-200/80 dark:border-stone-800/80 bg-white/40 dark:bg-stone-950/40 backdrop-blur-sm transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-start">
          {/* Brand & Mission */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="text-2xl">🌙</span>
              <span className="text-xl font-bold font-arabic text-stone-900 dark:text-stone-100">
                {t('appName')}
              </span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed font-arabic">
              {t('footerNote')}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-stone-600 dark:text-stone-400">
            <button
              type="button"
              onClick={() => {
                setActiveTab('islamic');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {t('navIslamic')}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                setActiveTab('academic');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {t('navAcademic')}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                setActiveTab('studio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {t('navStudio')}
            </button>
          </div>

          {/* Timezone & Copyright */}
          <div className="text-xs text-stone-400 dark:text-stone-500 space-y-1 md:text-end">
            <div>
              © {currentYear} {t('appName')}. {t('allRightsReserved')}.
            </div>
            <div className="text-[11px] opacity-75">
              {Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
