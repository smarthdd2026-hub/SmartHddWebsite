import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Shield, Clock, Lock, Zap, HardDrive, CheckCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import FeatureCard from '@/components/FeatureCard';

export default function HomePage() {
  const t = useTranslations();

  const problems = [
    {
      title: t('problem.alwaysConnected'),
      description: t('problem.alwaysConnectedDesc'),
      icon: Shield,
    },
    {
      title: t('problem.manualBackup'),
      description: t('problem.manualBackupDesc'),
      icon: Clock,
    },
    {
      title: t('problem.cloudPrivacy'),
      description: t('problem.cloudPrivacyDesc'),
      icon: Lock,
    },
  ];

  const solutions = [
    {
      title: t('solution.feature1'),
      description: t('solution.feature1Desc'),
      icon: Shield,
    },
    {
      title: t('solution.feature2'),
      description: t('solution.feature2Desc'),
      icon: Zap,
    },
    {
      title: t('solution.feature3'),
      description: t('solution.feature3Desc'),
      icon: Lock,
    },
  ];

  const benefits = [
    {
      title: t('benefits.ransomware'),
      description: t('benefits.ransomwareDesc'),
      icon: Shield,
    },
    {
      title: t('benefits.privacy'),
      description: t('benefits.privacyDesc'),
      icon: Lock,
    },
    {
      title: t('benefits.automated'),
      description: t('benefits.automatedDesc'),
      icon: Clock,
    },
    {
      title: t('benefits.longevity'),
      description: t('benefits.longevityDesc'),
      icon: HardDrive,
    },
    {
      title: t('benefits.flexible'),
      description: t('benefits.flexibleDesc'),
      icon: Zap,
    },
    {
      title: t('benefits.simple'),
      description: t('benefits.simpleDesc'),
      icon: CheckCircle,
    },
  ];

  return (
    <>
      <Hero />

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('problem.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-red-100 hover:border-red-300 transition-colors text-center"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('solution.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('solution.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <FeatureCard
                key={index}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('products.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProductCard type="basic" />
            <ProductCard type="pro" />
          </div>
          <p className="text-center text-gray-600 mt-8">{t('products.note')}</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('howItWorks.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">{step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(`howItWorks.step${step}`)}
                  </h3>
                  <p className="text-gray-600">{t(`howItWorks.step${step}Desc`)}</p>
                </div>
                {step < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('benefits.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
