import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PATIENT_REVIEWS, CLINIC_INFO } from '../data/clinicData';

export const ReviewsSection: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % PATIENT_REVIEWS.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + PATIENT_REVIEWS.length) % PATIENT_REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Real Patient Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 text-balance">
            What Our Patients Say
          </h2>

          {/* Prominent Rating Badge */}
          <div className="mt-5 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-2xl font-black text-slate-900 tabular-nums">
                {CLINIC_INFO.rating} / 5
              </span>
            </div>

            <div className="hidden sm:block w-px h-8 bg-slate-200" />

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="font-semibold text-slate-900 tabular-nums">Based on {CLINIC_INFO.reviewCount} reviews</span>
              <span className="text-xs text-sky-700 font-medium bg-sky-50 px-2 py-0.5 rounded">
                Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Featured Review Hero Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md relative overflow-hidden mb-10">
          <div className="absolute top-6 right-8 text-slate-100 -z-0 pointer-events-none select-none">
            <Quote className="w-24 h-24 stroke-[1]" />
          </div>

          <div className="relative z-10">
            {/* Stars */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex text-amber-400">
                {[...Array(PATIENT_REVIEWS[activeReviewIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Patient Feedback</span>
              </div>
            </div>

            {/* Quote Body */}
            <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed italic">
              “{PATIENT_REVIEWS[activeReviewIndex].quote}”
            </p>

            {/* Author details */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  {PATIENT_REVIEWS[activeReviewIndex].author}
                </h3>
                {PATIENT_REVIEWS[activeReviewIndex].context && (
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    {PATIENT_REVIEWS[activeReviewIndex].context}
                  </p>
                )}
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevReview}
                  aria-label="Previous review"
                  className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-slate-500 tabular-nums px-2">
                  {activeReviewIndex + 1} / {PATIENT_REVIEWS.length}
                </span>
                <button
                  type="button"
                  onClick={nextReview}
                  aria-label="Next review"
                  className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All Reviews Quick Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PATIENT_REVIEWS.map((review, idx) => (
            <div
              key={review.id}
              onClick={() => setActiveReviewIndex(idx)}
              className={`p-6 rounded-2xl cursor-pointer transition-all border ${
                activeReviewIndex === idx
                  ? 'bg-sky-50/70 border-sky-400 ring-2 ring-sky-300/40 shadow-sm'
                  : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {review.context && (
                  <span className="text-[11px] font-medium text-slate-500">
                    {review.context}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic line-clamp-3">
                “{review.quote}”
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-800">{review.author}</span>
                <span className="text-sky-700 font-medium">Google Review</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
