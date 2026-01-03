'use client';

import { useState, useEffect } from 'react';

interface DynamicImageProps {
  basePath: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
}

export default function DynamicImage({ basePath, alt, className, fallback }: DynamicImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const extensions = ['png', 'jpg', 'jpeg', 'webp', 'ico'];
    let found = false;

    const checkImage = async () => {
      for (const ext of extensions) {
        const testSrc = `${basePath}.${ext}`;
        try {
          const response = await fetch(testSrc, { method: 'HEAD' });
          if (response.ok) {
            setImageSrc(testSrc);
            found = true;
            break;
          }
        } catch (err) {
          continue;
        }
      }
      if (!found) {
        setError(true);
      }
    };

    checkImage();
  }, [basePath]);

  if (error && fallback) {
    return <>{fallback}</>;
  }

  if (!imageSrc) {
    return null;
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
