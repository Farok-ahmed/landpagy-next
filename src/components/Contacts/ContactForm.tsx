"use client";
import { useState } from "react";

export default function ContactForm({ formType = "General" }: { formType?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form-name">
        <label htmlFor={`name-${formType}`}>Name*</label>
        <input
          type="text"
          id={`name-${formType}`}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className={errors.name ? "error" : ""}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="contact-form-email">
        <label htmlFor={`email-${formType}`}>Email*</label>
        <input
          type="email"
          id={`email-${formType}`}
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={errors.email ? "error" : ""}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="contact-form-message">
        <label htmlFor={`message-${formType}`}>Message*</label>
        <textarea
          id={`message-${formType}`}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className={errors.message ? "error" : ""}
        />
        {errors.message && (
          <span className="error-message">{errors.message}</span>
        )}
      </div>

      {submitStatus === "success" && (
        <div className="success-message">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="error-message">
          Something went wrong. Please try again later.
        </div>
      )}

      <div className="contact-form-button">
        <button
          type="submit"
          className="btn btn-red"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
