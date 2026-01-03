import { useTranslations } from 'next-intl';
import { Plug, Calendar, Shield, HardDrive, Usb, Clock } from 'lucide-react';

export default function HowItWorksPage() {
  const t = useTranslations('howItWorks');

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple setup, automated protection, complete peace of mind
          </p>
        </div>

        {/* Main Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plug className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('step1')}</h3>
              <p className="text-gray-600">{t('step1Desc')}</p>
            </div>
          </div>

          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                2
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('step2')}</h3>
              <p className="text-gray-600">{t('step2Desc')}</p>
            </div>
          </div>

          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                3
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('step3')}</h3>
              <p className="text-gray-600">{t('step3Desc')}</p>
            </div>
          </div>
        </div>

        {/* Detailed Features */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Makes SmartHDD Unique?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HardDrive className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Physical Disconnection
                  </h3>
                  <p className="text-gray-600">
                    Unlike software solutions, SmartHDD physically disconnects your drives using hardware relays. 
                    When disconnected, your drives are completely invisible to your computer and any threats.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Smart Scheduling
                  </h3>
                  <p className="text-gray-600">
                    Set different schedules for different backup types. Daily for documents, weekly for photos, 
                    monthly for archives. Full control over your backup strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Zero Touch Operation
                  </h3>
                  <p className="text-gray-600">
                    After initial setup, you never need to touch your backup drives again. SmartHDD handles 
                    everything automatically, exactly when scheduled.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Usb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Works With Any Drive
                  </h3>
                  <p className="text-gray-600">
                    Compatible with all USB flash drives, external HDDs, and SSDs. Use the drives you already 
                    own - no special hardware required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Hardware</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• USB 2.0/3.0 compatible</li>
                <li>• Hardware-based physical switching</li>
                <li>• Supports up to 2 drives (Pro version)</li>
                <li>• Low power consumption</li>
                <li>• Compact design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Software</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Windows 10/11 compatible</li>
                <li>• Full & incremental backups</li>
                <li>• Flexible scheduling options</li>
                <li>• Multi-language interface</li>
                <li>• Real-time status monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
