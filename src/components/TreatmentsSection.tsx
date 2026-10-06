import React, { useState } from 'react';
import { 
  Smile, 
  Activity, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Droplets, 
  Crown, 
  HeartHandshake, 
  ArrowRight,
  Calendar
} from 'lucide-react';
import { TREATMENTS, Treatment } from '../data/clinicData';
import { TreatmentModal } from './TreatmentModal';

interface TreatmentsSectionProps {
  onSelectTreatmentForBooking: (treatmentName: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatmentForBooking,
}) => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  // Icon mapping for each treatment
  const getTreatmentIcon = (id: string) => {
    switch (id) {
      case 'general-dentistry':
        return Activity;
      case 'root-canal':
        return ShieldCheck;
      case 'dental-implants':
        return Layers;
      case 'dentures':
        return Smile;
      case 'teeth-cleaning':
        return Droplets;
      case 'cosmetic-dentistry':
        return Sparkles;
      case 'dental-crowns':
        return Crown;
      case 'tooth-extraction':
        return HeartHandshake;
      default:
        return Smile;
    }
  };

  const handleBookFromModal = (treatmentName: string) => {
    setSelectedTreatment(null);
    onSelectTreatmentForBooking(treatmentName);
  };

  return (
    <section id="treatments" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Comprehensive Dental Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 text-balance">
            Treatments & Specialized Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Delivering gentle, personalized clinical solutions in Badshahpur for every member of your family.
          </p>
        </div>

        {/* 8-Grid of Treatments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENTS.map((treatment) => {
            const Icon = getTreatmentIcon(treatment.id);
            return (
              <div
                key={treatment.id}
                className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-sky-600 flex items-center justify-center text-sky-700 group-hover:text-white transition-colors duration-300 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                    {treatment.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {treatment.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedTreatment(treatment)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 group-hover:underline focus:outline-none focus:ring-1 focus:ring-sky-500 rounded"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectTreatmentForBooking(treatment.name)}
                    title={`Book for ${treatment.name}`}
                    aria-label={`Book appointment for ${treatment.name}`}
                    className="p-1.5 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Notice */}
        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200/80 max-w-2xl mx-auto">
          <p className="text-sm text-slate-600">
            Unsure which dental treatment you or your family member needs?
          </p>
          <button
            type="button"
            onClick={() => onSelectTreatmentForBooking('General Dentistry Consultation')}
            className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-sky-700 hover:text-sky-800 hover:underline"
          >
            <span>Book a comprehensive dental evaluation with Dr. Sumit Pahwa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Details Modal */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBookForTreatment={handleBookFromModal}
      />
    </section>
  );
};
