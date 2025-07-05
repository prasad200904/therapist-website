'use client';

export default function Hero() {
  return (
    <section
        className="relative h-[80vh] flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: "url('/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ Clean Hero Text (no shading) */}
      <div className="relative z-10 px-6 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Dr. Serena Blake, PsyD
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Compassionate Therapy for Anxiety, Trauma & Relationships
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow hover:bg-blue-800 transition"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
}
