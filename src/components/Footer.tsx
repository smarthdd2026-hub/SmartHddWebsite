'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import DynamicImage from './DynamicImage';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <DynamicImage
                basePath="/images/logo"
                alt="SmartHDD Logo"
                className="w-10 h-10 object-contain"
                fallback={
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                }
              />
              <span className="text-xl font-bold text-white">SmartHDD</span>
            </div>
            <p className="text-sm mb-4">{t('tagline')}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('products')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/products`} className="hover:text-white transition-colors">
                  {t('basicProduct')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="hover:text-white transition-colors">
                  {t('proProduct')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('support')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/download`} className="hover:text-white transition-colors">
                  {t('download')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {currentYear} SmartHDD. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
