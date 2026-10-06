import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Location & Availability
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 text-balance">
            Visit American Dental Clinic
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Conveniently located on Sohna – Gurgaon Road in Badshahpur, Sector 68.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 shrink-0 border border-sky-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Clinic Address
                  </h3>
                  <p className="text-base font-semibold text-slate-900 mt-1 leading-snug">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Badshahpur, Sector 68, Gurugram
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0 border border-emerald-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Telephone
                  </h3>
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="text-lg font-bold text-slate-900 hover:text-sky-700 transition-colors mt-1 block"
                  >
                    {CLINIC_INFO.phoneFormatted}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Call for consultation, inquiries & emergency support
                  </p>
                </div>
              </div>

              {/* Hours of Operation (Strictly adhering to prompt rules) */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 shrink-0 border border-amber-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Operating Schedule
                  </h3>
                  <div className="mt-2 space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center justify-between py-1 border-b border-slate-50">
                      <span className="font-semibold text-slate-900">Clinic Closing Time:</span>
                      <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Closes at 8:00 PM
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-600">Daily Consultation Slots:</span>
                      <span className="text-slate-800 font-medium">Contact clinic</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-600">Emergency & Weekend Visits:</span>
                      <span className="text-slate-800 font-medium">Contact clinic</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    ℹ️ For same-day appointments and verified doctor availability, please call <span className="font-semibold">{CLINIC_INFO.phoneFormatted}</span> prior to visiting.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:text-sky-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Call Now</span>
                </a>
              </div>

            </div>
          </div>

          {/* Interactive Map Visual Frame */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 flex flex-col items-center justify-center group">
                
                {/* Embed Map Background Simulation */}
                <iframe
                  title="American Dental Clinic Badshahpur Location Map"
                  src="https://maps.google.com/maps?q=American+Dental+Clinic+Badshahpur+Sector+68+Gurugram+122101&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 absolute inset-0 filter saturate-90 contrast-105"
                  loading="lazy"
                />

                {/* Overlay Pin Card */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-md max-w-sm pointer-events-auto">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        American Dental Clinic
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Sohna – Gurgaon Rd, Badshahpur, Sector 68
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <a
                          href={CLINIC_INFO.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-700 hover:text-sky-800 hover:underline"
                        >
                          <span>Open in Google Maps</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Directions Tip */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Located directly on Sohna – Gurgaon Main Road corridor</span>
                </span>
                <span className="hidden sm:inline font-mono">PIN: 122101</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
