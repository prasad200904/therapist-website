'use client';

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src="/serena.jpg" // Make sure this matches your image name in /public
            alt="Dr. Serena Blake"
            width={400}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            About Dr. Serena Blake
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>

      </div>
    </section>
  );
}
