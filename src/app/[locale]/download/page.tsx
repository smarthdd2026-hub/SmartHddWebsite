import { Download, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function DownloadPage() {
  const t = useTranslations('download');
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('software')}
                </h2>
                <p className="text-gray-600 mb-2">{t('version')}</p>
                <p className="text-sm text-gray-500">{t('windows')}</p>
              </div>
              <a
                href="https://github.com/smarthdd2026-hub/SmartHddWebsite/releases/download/v1.0.0/SmartHDD-Setup.exe"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-700 transition-all hover:scale-105 shadow-xl"
                download
              >
                <Download className="mr-2" size={24} />
                {t('downloadSoftware')}
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-3xl p-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('userManual')}
                </h2>
                <p className="text-gray-600 mb-2">{t('instructionsPdf')}</p>
                <p className="text-sm text-gray-500">{t('completeGuide')}</p>
              </div>
              <a
                href="/Instructions.pdf"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-accent rounded-full hover:bg-accent-600 transition-all hover:scale-105 shadow-xl"
                download
              >
                <FileText className="mr-2" size={24} />
                {t('downloadManual')}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="text-accent" size={24} />
              {t('systemRequirements')}
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• {t('req1')}</li>
              <li>• {t('req2')}</li>
              <li>• {t('req3')}</li>
              <li>• {t('req4')}</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="text-secondary" size={24} />
              {t('installationSteps')}
            </h3>
            <ol className="space-y-2 text-gray-600">
              <li>1. {t('step1')}</li>
              <li>2. {t('step2')}</li>
              <li>3. {t('step3')}</li>
              <li>4. {t('step4')}</li>
            </ol>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('changelog')}</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-gray-900">Version 1.0.0</span>
                <span className="text-sm text-gray-500">• {t('versionDate')}</span>
              </div>
              <ul className="text-gray-600 space-y-1">
                <li>• {t('change1')}</li>
                <li>• {t('change2')}</li>
                <li>• {t('change3')}</li>
                <li>• {t('change4')}</li>
                <li>• {t('change5')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-center">
          <p className="text-amber-900 font-medium mb-4">
            {t('needHelp')}
          </p>
          <Link
            href="/en/contact"
            className="inline-block px-6 py-3 bg-amber-900 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors"
          >
            {t('contactSupport')}
          </Link>
        </div>
      </div>
    </div>
  );
}
