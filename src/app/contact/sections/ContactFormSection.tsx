'use client';

import React from 'react';

type ContactFormSectionProps = {
  title?: string;
  description?: string;
};

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  title = 'Send us a Message',
  description = 'Have a question about our products or want to explore partnership opportunities? Fill out the form below and our team will get back to you soon.',
}) => {
  return (
    <section className="py-12">
      <div className="max-w-section mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary">{title}</h2>
          <p className="text-white/80 mt-3 max-w-3xl">{description}</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <input
            className="bg-transparent border-b border-white/80 focus:border-white outline-none py-2 text-white"
            placeholder="Full Name*"
          />

          <input
            className="bg-transparent border-b border-white/80 focus:border-white outline-none py-2 text-white"
            placeholder="Company / Organization*"
          />

          <input
            type="email"
            className="bg-transparent border-b border-white/80 focus:border-white outline-none py-2 text-white"
            placeholder="Email Address*"
          />

          <input
            className="bg-transparent border-b border-white/80 focus:border-white outline-none py-2 text-white"
            placeholder="Phone Number (Optional)"
          />

          <input
            className="bg-transparent border-b border-white/80 focus:border-white outline-none py-2 text-white"
            placeholder="Subject"
          />

          <input
            className="bg-transparent border-b border-white/80 focus:border-white outline-none py-2 text-white"
            placeholder="Message"
          />

          <div>
            <button type="submit" className="px-5 py-2 bg-primary text-white rounded-sm text-sm">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
