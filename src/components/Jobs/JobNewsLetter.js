"use client";
import useGsapReveal from "@/hooks/useGsapReveal";

export default function JobNewsLetter() {
  const widgetRef = useGsapReveal({ animation: 'fadeInUp' });

  return (
    <div ref={widgetRef} className="email-alert-widget bg_white mt-100">
      <h4>Get email alerts for the latest Jobs in Bangladesh</h4>
      <p>You can cancel email alerts at any time.</p>

      <form className="form-group">
        <input type="email" placeholder="Type in your email..." />
        <button type="submit" className="btn btn-red">
          Set Up Alert
        </button>
      </form>
    </div>
  );
}
