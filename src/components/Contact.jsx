import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="contact"
      className="
        w-full
        bg-gradient-to-br
        from-slate-900 via-indigo-900/80 to-cyan-900/70
      "
    >
      {/* 🔥 Heading Section */}
      <div className="text-center pt-16 pb-6 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Contact Me
        </h2>
        <p className="mt-2 text-neutral-300 text-sm sm:text-base">
          Have a project or want to work together? Let’s talk.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-3xl mx-auto
          p-4 sm:p-6 md:p-10
          flex flex-col gap-6
        "
      >
        {/* Name */}
        <div className="flex flex-col w-full">
          <label className="text-sm mb-1 text-neutral-300">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="
              w-full p-3 sm:p-4
              rounded-lg
              bg-neutral-800/80 border border-neutral-700
              text-white
              focus:outline-none focus:ring-2 focus:ring-cyan-500
            "
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col w-full">
          <label className="text-sm mb-1 text-neutral-300">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="
              w-full p-3 sm:p-4
              rounded-lg
              bg-neutral-800/80 border border-neutral-700
              text-white
              focus:outline-none focus:ring-2 focus:ring-cyan-500
            "
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col w-full">
          <label className="text-sm mb-1 text-neutral-300">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="5"
            className="
              w-full p-3 sm:p-4
              rounded-lg
              bg-neutral-800/80 border border-neutral-700
              text-white resize-none
              focus:outline-none focus:ring-2 focus:ring-cyan-500
            "
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full sm:w-fit
            self-center
            px-12 py-3 sm:py-4
            bg-cyan-600 hover:bg-cyan-700
            text-white font-semibold
            rounded-lg
            transition-all
          "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
