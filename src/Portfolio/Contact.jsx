import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen m-0 bg-slate-900 flex items-center justify-center px-4 py-8">
      <div
        className="w-full max-w-sm bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-4 border border-white/10"
        data-aos="zoom-in"
      >
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 rounded-md bg-white/10 text-white placeholder-white/60 outline-none border border-white/20 focus:border-indigo-400 transition"
          />
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 rounded-md bg-white/10 text-white placeholder-white/60 outline-none border border-white/20 focus:border-indigo-400 transition"
          />
          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="3"
            className="p-2 rounded-md bg-white/10 text-white placeholder-white/60 outline-none border border-white/20 focus:border-indigo-400 transition resize-none"
          ></textarea>
          {/* Button */}
          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 transition text-white font-semibold py-2 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
