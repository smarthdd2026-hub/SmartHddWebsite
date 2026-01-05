import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 mx-auto">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  );
}
