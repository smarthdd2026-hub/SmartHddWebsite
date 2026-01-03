import { Shield, Users, Target } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('ourStory')}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('storyPara1')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('storyPara2')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('ourMission')}</h3>
              <p className="text-gray-600">
                {t('missionDesc')}
              </p>
            </div>

            <div className="bg-secondary-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('ourVision')}</h3>
              <p className="text-gray-600">
                {t('visionDesc')}
              </p>
            </div>

            <div className="bg-accent-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('ourValues')}</h3>
              <p className="text-gray-600">
                {t('valuesDesc')}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('whyPhysical')}</h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                <strong className="text-gray-900">{t('ransomwareTitle')}</strong> {t('ransomwareDesc')}
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">{t('privacyTitle')}</strong> {t('privacyDesc')}
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">{t('longevityTitle')}</strong> {t('longevityDesc')}
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">{t('zeroMaintenanceTitle')}</strong> {t('zeroMaintenanceDesc')}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-900 to-secondary-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">{t('getInTouch')}</h2>
            <p className="mb-6">
              {t('getInTouchDesc')}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block px-8 py-3 bg-white text-primary-900 rounded-lg font-semibold hover:bg-primary-100 transition-colors"
            >
              {t('contactButton')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
