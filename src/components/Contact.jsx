import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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
    <section
      id="contact"
      className="
        w-full
        py-20
        bg-gradient-to-br from-slate-100 via-indigo-100/80 to-cyan-100/70
        dark:from-slate-950 dark:via-indigo-900/80 dark:to-cyan-900/70
        transition-colors duration-300
      "
    >
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mt-2 text-slate-700 dark:text-neutral-300 text-sm sm:text-base">
          Have a project or want to work together? Let’s talk.
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-3xl mx-auto
          p-8 sm:p-10
          flex flex-col gap-6
          bg-white/95 dark:bg-slate-900/60
          backdrop-blur-md
          rounded-3xl shadow-2xl
          transition-colors duration-300
        "
      >
        {/* Name */}
        <div className="flex flex-col w-full">
          <label className="text-sm mb-1 text-slate-700 dark:text-neutral-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="
              w-full p-4
              rounded-xl
              bg-white
              border border-slate-300
              text-slate-900
              focus:outline-none focus:ring-2 focus:ring-cyan-500
              transition-all duration-300
            "
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col w-full">
          <label className="text-sm mb-1 text-slate-700 dark:text-neutral-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="
              w-full p-4
              rounded-xl
              bg-white
              border border-slate-300
              text-slate-900
              focus:outline-none focus:ring-2 focus:ring-cyan-500
              transition-all duration-300
            "
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col w-full">
          <label className="text-sm mb-1 text-slate-700 dark:text-neutral-300">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="6"
            className="
              w-full p-4
              rounded-xl
              bg-white
              border border-slate-300
              text-slate-900
              resize-none
              focus:outline-none focus:ring-2 focus:ring-cyan-500
              transition-all duration-300
            "
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            w-full sm:w-fit
            self-center
            px-14 py-4
            bg-cyan-600 hover:bg-cyan-700
            text-white font-semibold
            rounded-2xl
            shadow-lg hover:shadow-xl
            transition-all duration-300
          "
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
