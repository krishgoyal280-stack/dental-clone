import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { DoctorSection } from './components/DoctorSection';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTreatmentForBooking = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    scrollToAppointment();
  };

  return (
    <div className="min-h-screen bg-[#FBFDFE] text-slate-800 flex flex-col selection:bg-sky-100 selection:text-sky-900">
      {/* Sticky Navigation Bar */}
      <Navbar onBookClick={scrollToAppointment} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onBookClick={scrollToAppointment} />

        {/* Horizontal Trust Bar */}
        <TrustBar />

        {/* About Section */}
        <AboutSection onBookClick={scrollToAppointment} />

        {/* Treatments Grid */}
        <TreatmentsSection
          onSelectTreatmentForBooking={handleSelectTreatmentForBooking}
        />

        {/* Why Choose Us */}
        <WhyUsSection />

        {/* Doctor Profile */}
        <DoctorSection onBookClick={scrollToAppointment} />

        {/* Verified Patient Reviews */}
        <ReviewsSection />

        {/* High-Conversion Appointment Section */}
        <AppointmentSection
          initialTreatment={selectedTreatment}
          onClearInitialTreatment={() => setSelectedTreatment('')}
        />

        {/* Contact & Map Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onBookClick={scrollToAppointment} />

      {/* Floating Utilities (Mobile Bar, WhatsApp, Back to Top) */}
      <FloatingActions onBookClick={scrollToAppointment} />
    </div>
  );
}
