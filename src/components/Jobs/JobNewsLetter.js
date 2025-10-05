import React from "react";

export default function JobNewsLetter() {
  return (
    <div className="email-alert-widget bg_white mt-100 wow fadeInUp">
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
