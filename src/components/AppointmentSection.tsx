import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Phone, 
  User, 
  Mail, 
  FileText, 
  CheckCircle, 
  AlertCircle,
  MessageCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';

interface AppointmentSectionProps {
  initialTreatment?: string;
  onClearInitialTreatment?: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialTreatment = '',
  onClearInitialTreatment,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'Morning (10:00 AM – 1:00 PM)',
    treatment: 'General Consultation',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    id: string;
    fullName: string;
    phone: string;
    date: string;
    timeSlot: string;
    treatment: string;
  } | null>(null);

  // Sync initial treatment if selected from elsewhere
  useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, treatment: initialTreatment }));
    }
  }, [initialTreatment]);

  // Set minimum date to today
  const todayString = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    // Phone validation (Indian phone format friendly: 10 digits or with +91)
    const cleanPhone = formData.phone.replace(/[\s\-()]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please provide a valid contact phone number';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please provide at least a 10-digit mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred appointment date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable frontend registration
    setTimeout(() => {
      const bookingRef = 'ADC-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedBooking({
        id: bookingRef,
        fullName: formData.fullName,
        phone: formData.phone,
        date: formData.date,
        timeSlot: formData.timeSlot,
        treatment: formData.treatment,
      });
      setIsSubmitting(false);
      if (onClearInitialTreatment) {
        onClearInitialTreatment();
      }
    }, 400);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: '',
      timeSlot: 'Morning (10:00 AM – 1:00 PM)',
      treatment: 'General Consultation',
      message: '',
    });
    setErrors({});
  };

  const getWhatsAppMessage = () => {
    if (!submittedBooking) return '';
    const text = `Hello American Dental Clinic,\nI have requested an appointment:\nRef: ${submittedBooking.id}\nName: ${submittedBooking.fullName}\nPhone: ${submittedBooking.phone}\nDate: ${submittedBooking.date}\nSlot: ${submittedBooking.timeSlot}\nTreatment: ${submittedBooking.treatment}`;
    return `https://wa.me/919873094198?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Schedule Your Visit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 text-balance">
            Ready to Take Care of Your Smile?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Book your consultation with American Dental Clinic today.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-600">
            <span>Direct phone scheduling:</span>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-bold text-sky-700 hover:text-sky-800 hover:underline"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>{CLINIC_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {submittedBooking ? (
            /* Successful Booking Confirmation Card */
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-xs">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Appointment Request Received!
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-slate-800">{submittedBooking.fullName}</strong>. Dr. Sumit Pahwa&apos;s clinic team will contact you shortly on <strong className="text-slate-800">{submittedBooking.phone}</strong> to confirm your slot.
              </p>

              {/* Booking Summary Box */}
              <div className="mt-6 bg-white p-5 rounded-2xl border border-emerald-100 text-left max-w-md mx-auto text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-slate-900">{submittedBooking.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Requested Treatment:</span>
                  <span className="font-semibold text-slate-900">{submittedBooking.treatment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Preferred Date:</span>
                  <span className="font-semibold text-slate-900">{submittedBooking.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Time Window:</span>
                  <span className="font-semibold text-slate-900">{submittedBooking.timeSlot}</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation via WhatsApp</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Call Clinic Directly</span>
                </a>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Book another appointment or edit details
                </button>
              </div>
            </div>
          ) : (
            /* Modern Interactive Booking Form */
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-lg shadow-slate-100 space-y-6"
            >
              {initialTreatment && (
                <div className="p-3.5 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-between text-xs text-sky-900">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Booking requested for: <strong>{initialTreatment}</strong></span>
                  </span>
                  {onClearInitialTreatment && (
                    <button
                      type="button"
                      onClick={onClearInitialTreatment}
                      className="text-slate-400 hover:text-slate-700 font-semibold ml-2"
                    >
                      Change
                    </button>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Sharma"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 hover:border-slate-300'
                      }`}
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.fullName && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 098730 94198"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 hover:border-slate-300'
                      }`}
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.phone && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 hover:border-slate-300'
                      }`}
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.email && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Treatment / Reason for Visit */}
                <div>
                  <label htmlFor="treatment" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Treatment / Reason
                  </label>
                  <div className="relative">
                    <select
                      id="treatment"
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full pl-3.5 pr-8 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors cursor-pointer"
                    >
                      <option value="General Consultation">General Consultation / Check-up</option>
                      {TREATMENTS.map((t) => (
                        <option key={t.id} value={t.name}>
                          {t.name}
                        </option>
                      ))}
                      <option value="Tooth Ache / Emergency Relief">Tooth Ache / Emergency Relief</option>
                      <option value="Elderly Family Member Care">Elderly Family Member Care</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Preferred Date */}
                <div>
                  <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="date"
                      type="date"
                      min={todayString}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
                        errors.date ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 hover:border-slate-300'
                      }`}
                    />
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.date && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.date}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Time Window */}
                <div>
                  <label htmlFor="timeSlot" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Time Window
                  </label>
                  <div className="relative">
                    <select
                      id="timeSlot"
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors cursor-pointer"
                    >
                      <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM – 4:30 PM)">Afternoon (1:00 PM – 4:30 PM)</option>
                      <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                    </select>
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Clinic closes at 8:00 PM</p>
                </div>
              </div>

              {/* Message / Symptoms */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Message / Specific Dental Concerns <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about any tooth sensitivity, pain duration, or specific preferences for yourself or family members..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors resize-none"
                  />
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 disabled:opacity-70 rounded-xl shadow-md shadow-sky-600/20 transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  {isSubmitting ? (
                    <span>Registering your appointment request...</span>
                  ) : (
                    <>
                      <span>Request Appointment</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-2 text-xs text-slate-500">
                <span>By submitting, you request a consultation slot. Our staff will call back at </span>
                <span className="font-semibold text-slate-700">{CLINIC_INFO.phoneFormatted}</span>
                <span> to confirm exact doctor availability.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
