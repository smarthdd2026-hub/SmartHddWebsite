import { useTranslations } from 'next-intl';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const t = useTranslations('products');
  const showPrices = t('showPrices') !== 'false';

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('pageSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <ProductCard type="basic" />
          <ProductCard type="pro" />
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-center mb-12">
          <p className="text-amber-900 font-medium text-lg mb-2">
            {t('note')}
          </p>
          <p className="text-amber-800">
            {t('noteDesc')}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {t('featureComparison')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">{t('featureHeader')}</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Basic</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-primary-50">Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 px-4 text-gray-700">{t('usbPorts')}</td>
                  <td className="py-4 px-4 text-center">1</td>
                  <td className="py-4 px-4 text-center bg-primary-50">2</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">{t('physicalDisconnection')}</td>
                  <td className="py-4 px-4 text-center text-accent">✓</td>
                  <td className="py-4 px-4 text-center text-accent bg-primary-50">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">{t('automatedScheduling')}</td>
                  <td className="py-4 px-4 text-center text-accent">✓</td>
                  <td className="py-4 px-4 text-center text-accent bg-primary-50">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">{t('fullIncrementalBackups')}</td>
                  <td className="py-4 px-4 text-center text-accent">✓</td>
                  <td className="py-4 px-4 text-center text-accent bg-primary-50">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">{t('schedulingOptions')}</td>
                  <td className="py-4 px-4 text-center text-accent">✓</td>
                  <td className="py-4 px-4 text-center text-accent bg-primary-50">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">{t('independentSchedules')}</td>
                  <td className="py-4 px-4 text-center text-gray-400">—</td>
                  <td className="py-4 px-4 text-center text-accent bg-primary-50">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">{t('advancedRotation')}</td>
                  <td className="py-4 px-4 text-center text-gray-400">—</td>
                  <td className="py-4 px-4 text-center text-accent bg-primary-50">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">{t('redundantBackup')}</td>
                  <td className="py-4 px-4 text-center text-gray-400">—</td>
                  <td className="py-4 px-4 text-center text-accent bg-primary-50">✓</td>
                </tr>
                {showPrices && (
                  <tr className="border-t-2 border-gray-200 font-bold">
                    <td className="py-4 px-4 text-gray-900">{t('price')}</td>
                    <td className="py-4 px-4 text-center text-primary">{t('basic.price')}</td>
                    <td className="py-4 px-4 text-center text-primary bg-primary-50">{t('pro.price')}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
