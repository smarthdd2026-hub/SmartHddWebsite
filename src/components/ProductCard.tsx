'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Check, Star } from 'lucide-react';

interface ProductCardProps {
  type: 'basic' | 'pro';
}

export default function ProductCard({ type }: ProductCardProps) {
  const t = useTranslations('products');
  const locale = useLocale();
  const isPro = type === 'pro';

  const features = [
    t(`${type}.feature1`),
    t(`${type}.feature2`),
    t(`${type}.feature3`),
    t(`${type}.feature4`),
    t(`${type}.feature5`),
    t(`${type}.feature6`),
  ];

  return (
    <div
      className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
        isPro ? 'ring-4 ring-accent scale-105' : ''
      }`}
    >
      {isPro && (
        <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star size={16} fill="currentColor" />
          {t('pro.popular')}
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(`${type}.name`)}</h3>
        <p className="text-gray-600 mb-4">{t(`${type}.subtitle`)}</p>

        <div className="mb-6">
          <span className="text-5xl font-bold text-primary">{t(`${type}.price`)}</span>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/${locale}/contact`}
          className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all ${
            isPro
              ? 'bg-primary text-white hover:bg-primary-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          {t(`${type}.cta`)}
        </Link>
      </div>
    </div>
  );
}
