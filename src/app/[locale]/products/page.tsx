import { useTranslations } from 'next-intl';
import ProductCard from '@/components/ProductCard';
import DynamicImage from '@/components/DynamicImage';

export default function ProductsPage() {
  const t = useTranslations('products');
  const showPrices = t('showPrices') !== 'false';

  return (
    <div className="pt-20 pb-12 md:pt-24 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('pageSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
          <div className="flex flex-col">
            <div className="bg-gray-50 rounded-2xl p-4 md:p-6 mb-4 flex items-center justify-center min-h-[200px] md:min-h-[280px]">
              <DynamicImage
                basePath="/images/product-basic"
                alt="SmartHDD Basic"
                className="max-h-[180px] md:max-h-[250px] w-auto object-contain"
                fallback={
                  <div className="text-center text-gray-400">
                    <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <span className="text-3xl">📦</span>
                    </div>
                    <p className="text-sm">Upload Basic product image</p>
                  </div>
                }
              />
            </div>
            <ProductCard type="basic" />
          </div>
          <div className="flex flex-col">
            <div className="bg-gray-50 rounded-2xl p-4 md:p-6 mb-4 flex items-center justify-center min-h-[200px] md:min-h-[280px]">
              <DynamicImage
                basePath="/images/product-pro"
                alt="SmartHDD Pro"
                className="max-h-[180px] md:max-h-[250px] w-auto object-contain"
                fallback={
                  <div className="text-center text-gray-400">
                    <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <span className="text-3xl">📦</span>
                    </div>
                    <p className="text-sm">Upload Pro product image</p>
                  </div>
                }
              />
            </div>
            <ProductCard type="pro" />
          </div>
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 md:p-6 text-center mb-8 md:mb-12">
          <p className="text-amber-900 font-medium text-lg mb-2">
            {t('note')}
          </p>
          <p className="text-amber-800">
            {t('noteDesc')}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
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
