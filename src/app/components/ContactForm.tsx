'use client';
import { ChangeEvent, FormEvent, useState } from "react";

interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  message: string;
  time: string;
  agree: boolean;
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agree: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const validate = (): Record<string, string> => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (!form.message.trim()) newErrors.message = "Please tell us why you're here.";
    if (!form.time.trim()) newErrors.time = "Preferred time is required.";
    if (!form.agree) newErrors.agree = "You must agree to be contacted.";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log("Form data:", form);

      // Optional: Reset form after submission
      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
        time: "",
        agree: false,
      });
    }
  };

  return (
    <section id="contact" className="bg-[#F5F5F5] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12">
          Contact Dr. Serena Blake
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone *
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              What brings you here? *
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Preferred time to reach you *
            </label>
            <input
              type="text"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-gray-700">I agree to be contacted *</label>
          </div>
          {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-green-600 text-center mt-4">
              Thank you! Your message has been received.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
