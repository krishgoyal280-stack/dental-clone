import React from 'react';
import { Sparkles, Heart, Users, Star } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: Sparkles,
      title: 'Experienced Dental Care',
      subtitle: 'Modern clinical standards',
      iconColor: 'text-sky-600',
      bgColor: 'bg-sky-50',
    },
    {
      icon: Heart,
      title: 'Patient-Focused Treatment',
      subtitle: 'Calm & anxiety-free approach',
      iconColor: 'text-rose-600',
      bgColor: 'bg-rose-50',
    },
    {
      icon: Users,
      title: 'Family Dentistry',
      subtitle: 'Care for all generations',
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      icon: Star,
      title: '5.0 Rated Clinic',
      subtitle: '27+ verified reviews',
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <section className="relative z-10 -mt-2 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md shadow-slate-200/50 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className={`flex items-center gap-4 ${
                    index > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${point.bgColor} flex items-center justify-center shrink-0 border border-slate-100/80 shadow-xs`}
                  >
                    <Icon className={`w-6 h-6 ${point.iconColor}`} />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {point.title}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      {point.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
