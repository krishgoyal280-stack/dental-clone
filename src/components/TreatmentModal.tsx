import React from 'react';
import { X, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Treatment } from '../data/clinicData';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookForTreatment: (treatmentName: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBookForTreatment,
}) => {
  if (!treatment) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 p-6 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close treatment details"
          >
            <X className="w-5 h-5" />
          </button>
          
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-200">
            American Dental Clinic · Treatment Care
          </span>
          <h2 id="modal-title" className="text-2xl font-bold mt-1">
            {treatment.name}
          </h2>
          <p className="text-sm text-sky-100 mt-2 leading-relaxed">
            {treatment.description}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Procedure Overview
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {treatment.details}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Key Patient Benefits
            </h3>
            <ul className="space-y-2">
              {treatment.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {treatment.durationEstimate && (
            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600">
              <Clock className="w-4 h-4 text-sky-600 shrink-0" />
              <span>
                <strong>Estimated Time:</strong> {treatment.durationEstimate}
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-xl transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => onBookForTreatment(treatment.name)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-sm transition-all shadow-sky-600/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Book for {treatment.name}</span>
            <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
