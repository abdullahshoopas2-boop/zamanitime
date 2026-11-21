/**
 * Immutable reference dates and metadata for Islamic occasions.
 * Structured with Object.freeze to ensure data integrity.
 */

export const ISLAMIC_OCCASIONS = Object.freeze([
  {
    id: 'ramadan',
    titleKey: 'ramadanTitle',
    subtitleKey: 'ramadanSub',
    descKey: 'ramadanDesc',
    hijriDayMonth: '1 Ramadan',
    hijriMonthNameAr: 'رمضان المبارك',
    icon: 'Moon',
    colorTheme: 'emerald',
    accentBorder: 'from-emerald-500/40 via-teal-500/20 to-transparent',
    bgGlow: 'bg-emerald-500/10 dark:bg-emerald-500/5',
    occurrences: Object.freeze([
      {
        hijriYear: 1446,
        targetDate: '2025-03-01T00:00:00+03:00',
        endDate: '2025-03-30T00:00:00+03:00',
        durationDays: 30
      },
      {
        hijriYear: 1447,
        targetDate: '2026-02-18T00:00:00+03:00',
        endDate: '2026-03-19T23:59:59+03:00',
        durationDays: 30
      },
      {
        hijriYear: 1448,
        targetDate: '2027-02-08T00:00:00+03:00',
        endDate: '2027-03-09T23:59:59+03:00',
        durationDays: 30
      },
      {
        hijriYear: 1449,
        targetDate: '2028-01-28T00:00:00+03:00',
        endDate: '2028-02-26T23:59:59+03:00',
        durationDays: 30
      },
      {
        hijriYear: 1450,
        targetDate: '2029-01-16T00:00:00+03:00',
        endDate: '2029-02-14T23:59:59+03:00',
        durationDays: 30
      }
    ])
  },
  {
    id: 'eid_fitr',
    titleKey: 'eidFitrTitle',
    subtitleKey: 'eidFitrSub',
    descKey: 'eidFitrDesc',
    hijriDayMonth: '1 Shawwal',
    hijriMonthNameAr: 'شوال (عيد الفطر)',
    icon: 'Sparkles',
    colorTheme: 'amber',
    accentBorder: 'from-amber-500/40 via-yellow-500/20 to-transparent',
    bgGlow: 'bg-amber-500/10 dark:bg-amber-500/5',
    occurrences: Object.freeze([
      {
        hijriYear: 1446,
        targetDate: '2025-03-30T00:00:00+03:00',
        endDate: '2025-04-02T23:59:59+03:00',
        durationDays: 3
      },
      {
        hijriYear: 1447,
        targetDate: '2026-03-20T00:00:00+03:00',
        endDate: '2026-03-23T23:59:59+03:00',
        durationDays: 3
      },
      {
        hijriYear: 1448,
        targetDate: '2027-03-09T00:00:00+03:00',
        endDate: '2027-03-12T23:59:59+03:00',
        durationDays: 3
      },
      {
        hijriYear: 1449,
        targetDate: '2028-02-27T00:00:00+03:00',
        endDate: '2028-03-01T23:59:59+03:00',
        durationDays: 3
      },
      {
        hijriYear: 1450,
        targetDate: '2029-02-15T00:00:00+03:00',
        endDate: '2029-02-18T23:59:59+03:00',
        durationDays: 3
      }
    ])
  },
  {
    id: 'eid_adha',
    titleKey: 'eidAdhaTitle',
    subtitleKey: 'eidAdhaSub',
    descKey: 'eidAdhaDesc',
    hijriDayMonth: '10 Dhul-Hijjah',
    hijriMonthNameAr: 'ذو الحجة (عيد الأضحى)',
    icon: 'Sun',
    colorTheme: 'indigo',
    accentBorder: 'from-indigo-500/40 via-blue-500/20 to-transparent',
    bgGlow: 'bg-indigo-500/10 dark:bg-indigo-500/5',
    occurrences: Object.freeze([
      {
        hijriYear: 1446,
        targetDate: '2025-06-06T00:00:00+03:00',
        endDate: '2025-06-09T23:59:59+03:00',
        durationDays: 4
      },
      {
        hijriYear: 1447,
        targetDate: '2026-05-27T00:00:00+03:00',
        endDate: '2026-05-30T23:59:59+03:00',
        durationDays: 4
      },
      {
        hijriYear: 1448,
        targetDate: '2027-05-16T00:00:00+03:00',
        endDate: '2027-05-19T23:59:59+03:00',
        durationDays: 4
      },
      {
        hijriYear: 1449,
        targetDate: '2028-05-05T00:00:00+03:00',
        endDate: '2028-05-08T23:59:59+03:00',
        durationDays: 4
      },
      {
        hijriYear: 1450,
        targetDate: '2029-04-24T00:00:00+03:00',
        endDate: '2029-04-27T23:59:59+03:00',
        durationDays: 4
      }
    ])
  }
]);

/**
 * Finds the upcoming or ongoing occurrence of an Islamic occasion.
 */
export function getActiveOrNextIslamicOccurrence(occasionId, referenceDate = new Date()) {
  const occasion = ISLAMIC_OCCASIONS.find(o => o.id === occasionId);
  if (!occasion) return null;

  const nowMs = referenceDate.getTime();

  for (const occurrence of occasion.occurrences) {
    const startMs = new Date(occurrence.targetDate).getTime();
    const endMs = new Date(occurrence.endDate).getTime();

    if (nowMs >= startMs && nowMs <= endMs) {
      return {
        ...occurrence,
        occasion,
        isOngoing: true,
        targetDateObj: new Date(occurrence.endDate) // count down to end of blessed occasion
      };
    }

    if (startMs > nowMs) {
      return {
        ...occurrence,
        occasion,
        isOngoing: false,
        targetDateObj: new Date(occurrence.targetDate)
      };
    }
  }

  // Fallback to the last defined occurrence if far in future
  const last = occasion.occurrences[occasion.occurrences.length - 1];
  return {
    ...last,
    occasion,
    isOngoing: false,
    targetDateObj: new Date(last.targetDate)
  };
}
