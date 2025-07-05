'use client';

import Image from "next/image";

const services = [
  {
    title: "Anxiety & Stress Management",
    image: "/services/anxiety.jpg",
    description:
      "Personalized therapy to help you manage overwhelming thoughts, reduce stress, and build emotional resilience.",
  },
  {
    title: "Relationship Counseling",
    image: "/services/relationship.jpg",
    description:
      "Helping individuals and couples build healthy communication, resolve conflicts, and deepen connection.",
  },
  {
    title: "Trauma Recovery",
    image: "/services/trauma.jpg",
    description:
      "Supporting your journey to healing with a compassionate, evidence-based approach to trauma therapy.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#B2C6D5] py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Services
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-12">
          Offering compassionate support tailored to your individual needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition"
            >
              <div className="w-full h-48 relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
