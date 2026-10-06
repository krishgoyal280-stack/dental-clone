import React from 'react';
import { 
  Stethoscope, 
  Heart, 
  Users, 
  Sparkles, 
  Award, 
  MapPin 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/clinicData';

export const WhyUsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Stethoscope,
    Heart,
    Users,
    Sparkles,
    Award,
    MapPin,
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Patient-Centered Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 text-balance">
            Why Patients Choose American Dental Clinic
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            We are committed to delivering clinical excellence with genuine empathy, ensuring every visit is calm, transparent, and respectful.
          </p>
        </div>

        {/* 6 Feature Cards Bento/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50/80 flex items-center justify-center text-sky-700 border border-sky-100/60 mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-500">American Dental Care</span>
                  <span className="tabular-nums font-mono text-[11px] text-slate-400">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
