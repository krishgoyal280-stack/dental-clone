export interface Treatment {
  id: string;
  name: string;
  description: string;
  details: string;
  benefits: string[];
  durationEstimate?: string;
}

export interface Review {
  id: string;
  quote: string;
  author: string;
  context?: string;
  rating: number;
}

export const CLINIC_INFO = {
  name: 'American Dental Clinic',
  doctorName: 'Dr. Sumit Pahwa',
  doctorTitle: 'Dentist',
  phone: '098730 94198',
  phoneRaw: '+919873094198',
  phoneFormatted: '098730 94198',
  address: 'Sohna – Gurgaon Road, Badshahpur, Sector 68, Gurugram, Haryana 122101',
  locationBrief: 'Badshahpur, Sector 68, Gurugram',
  rating: '5.0',
  reviewCount: '27',
  closingTime: '8:00 PM',
  timingsNote: 'Open until 8:00 PM. Please call or request an appointment for daily consultation slots and emergencies.',
  whatsappUrl: 'https://wa.me/919873094198?text=Hello%20American%20Dental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=American+Dental+Clinic+Badshahpur+Sector+68+Gurugram+122101',
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'general-dentistry',
    name: 'General Dentistry',
    description: 'Routine dental examinations, cleaning, and preventive care to keep your smile healthy and problem-free.',
    details: 'Comprehensive oral evaluations, digital diagnostics, preventive cleanings, and proactive gum care to preserve your natural teeth for a lifetime.',
    benefits: ['Early cavity detection', 'Plaque and tartar removal', 'Personalized oral hygiene guidance'],
    durationEstimate: '30–45 mins',
  },
  {
    id: 'root-canal',
    name: 'Root Canal Treatment',
    description: 'Comfort-focused treatment for infected or damaged teeth to relieve pain and preserve your natural tooth.',
    details: 'Modern endodontic procedures performed with gentle local anesthesia and precision techniques to safely eliminate infection and protect tooth integrity.',
    benefits: ['Immediate pain relief', 'Saves the natural tooth from extraction', 'Restores natural chewing ability'],
    durationEstimate: '45–60 mins',
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    description: 'Long-term, secure tooth replacement solutions that look, feel, and function like natural teeth.',
    details: 'Biocompatible titanium implants anchored carefully in the jawbone to provide permanent support for crowns, bridges, or full-arch restorations.',
    benefits: ['Permanent tooth replacement', 'Preserves natural jawbone density', 'Restores full biting confidence'],
    durationEstimate: 'Consultation & planned visits',
  },
  {
    id: 'dentures',
    name: 'Dentures',
    description: 'Comfortable, custom-fitted tooth replacement options for missing teeth for elderly and adult patients.',
    details: 'Tailored complete and partial denture solutions engineered for optimal comfort, clear speech, and easy maintenance for family members of all ages.',
    benefits: ['Custom-fitted for daily comfort', 'Restores natural facial aesthetics', 'Helps effortless eating & speech'],
    durationEstimate: 'Multi-stage custom fitting',
  },
  {
    id: 'teeth-cleaning',
    name: 'Teeth Cleaning',
    description: 'Professional ultrasonic cleaning and polishing for healthier teeth, fresh breath, and protected gums.',
    details: 'Gentle, thorough scaling and stain removal by experienced hands to eradicate hardened tartar, reduce gum inflammation, and brighten enamel.',
    benefits: ['Prevents gingivitis & gum disease', 'Removes stubborn coffee/tea stains', 'Freshens breath immediately'],
    durationEstimate: '30–40 mins',
  },
  {
    id: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    description: 'Aesthetic treatments designed to enhance the natural alignment, color, and appearance of your smile.',
    details: 'Refined cosmetic solutions including enamel shaping, composite bonding, and smile rejuvenation tailored to your unique facial features.',
    benefits: ['Boosts smile confidence', 'Corrects chips, gaps & discolorations', 'Harmonious, natural-looking results'],
    durationEstimate: 'Consultation & customized plan',
  },
  {
    id: 'dental-crowns',
    name: 'Dental Crowns',
    description: 'High-strength restoration and protection for damaged, worn, or post-root-canal teeth.',
    details: 'Precision-milled ceramic and zirconia crowns that seamlessly match your natural tooth shade, restoring both structural durability and aesthetics.',
    benefits: ['Protects weakened teeth from fractures', 'Long-lasting structural strength', 'Natural tooth color and contour'],
    durationEstimate: '2 appointments',
  },
  {
    id: 'tooth-extraction',
    name: 'Tooth Extraction',
    description: 'Professional and carefully managed tooth removal when necessary, prioritizing gentle comfort.',
    details: 'Minimally invasive extractions handled with compassionate care, thorough numbing, and detailed aftercare guidance to ensure a smooth recovery.',
    benefits: ['Gentle, anxiety-reducing procedure', 'Prevents spread of deep infection', 'Clear healing and recovery protocol'],
    durationEstimate: '30–45 mins',
  },
];

export const PATIENT_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    quote: "I'm really happy I chose Dr Sumit for my treatment. I was new in the area and with elderly at home who require dental attention was very difficult. American Dental Clinic was the best choice. I got implants done for my father and denture for my mother. Really recommend this clinic. Excellent treatment.",
    author: 'Verified Patient',
    context: 'Elderly care · Implants & Dentures',
    rating: 5,
  },
  {
    id: 'rev-2',
    quote: 'Dr. Sumit Pahwa is a great doctor. He has great ability to calm your jittering nerves. One of the best dentists in Gurugram.',
    author: 'Verified Patient',
    context: 'Anxiety-free dental care · Gurugram',
    rating: 5,
  },
  {
    id: 'rev-3',
    quote: 'Best dental clinic in Badshahpur. Awesome work. Thank you Dr Sumit Pahwa.',
    author: 'Verified Patient',
    context: 'Local Badshahpur community review',
    rating: 5,
  },
  {
    id: 'rev-4',
    quote: 'Great treatment by Dr for my family.',
    author: 'Verified Patient',
    context: 'Family dental treatment',
    rating: 5,
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Care',
    description: 'Professional dental treatment focused on individual patient needs with attentive clinical technique.',
    icon: 'Stethoscope',
  },
  {
    title: 'Patient Comfort',
    description: 'A calm and friendly environment intentionally designed to reduce dental anxiety and ease nervous patients.',
    icon: 'Heart',
  },
  {
    title: 'Family Dentistry',
    description: 'Comprehensive dental care for children, working adults, and elderly family members requiring gentle attention.',
    icon: 'Users',
  },
  {
    title: 'Personalized Treatment',
    description: 'Clear, ethical recommendations tailored strictly to your oral health requirements without unnecessary procedures.',
    icon: 'Sparkles',
  },
  {
    title: 'Trusted by Patients',
    description: 'Unblemished 5.0 Google rating backed by genuine community reviews and dedicated patient satisfaction.',
    icon: 'Award',
  },
  {
    title: 'Convenient Location',
    description: 'Easily accessible on Sohna – Gurgaon Road in Badshahpur, Sector 68 with hassle-free neighborhood access.',
    icon: 'MapPin',
  },
];
