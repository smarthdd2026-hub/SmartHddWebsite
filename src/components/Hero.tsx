'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';
import DynamicImage from '@/components/DynamicImage';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const videoUrl = t('videoUrl');

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = getYouTubeId(videoUrl);

  return (
    <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-700 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-100 mb-10 max-w-4xl mx-auto">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`/${locale}/download`}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-900 bg-white rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              <Download className="mr-2" size={24} />
              {t('cta')}
            </Link>
            <Link
              href={`/${locale}/how-it-works`}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white/10 transition-all"
            >
              {t('ctaSecondary')}
              <ArrowRight className="ml-2" size={24} />
            </Link>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center overflow-hidden">
              {youtubeId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${youtubeId}?vq=hd1080`}
                  title="SmartHDD Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                />
              ) : (
                <DynamicImage
                  basePath="/images/hero"
                  alt="SmartHDD Device"
                  className="w-full h-full object-cover"
                  fallback={
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl font-bold text-white">S</span>
                      </div>
                      <p className="text-white text-xl font-semibold">SmartHDD Device</p>
                      <p className="text-gray-400 text-sm mt-2">Upload hero image or add YouTube URL in editor</p>
                    </div>
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
