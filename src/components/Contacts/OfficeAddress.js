import React from "react";

export default function OfficeAddress() {
  return (
    <section className="contact-address-area">
      <div className="d-flex">
        <div className="col-lg-6">
          <div className="contact-locations">
            <h2 className="text-center section-title">
              Our offices around the world
            </h2>
            <div className="items-wrapp">
              <div className="location-item">
                <p className="title">Global HQ - MAP</p>
                <p className="address">
                  989 Market St
                  <br />
                  San Francisco, CA 94103
                </p>
                <p>
                  <a href="/">www.zendesk.com</a>
                </p>
                <p>
                  <a href="/">(+10)-770-0090</a>
                </p>
              </div>
              <div className="location-item">
                <p className="title">Netherlands - MAP</p>
                <p className="address">
                  Strawinskylaan 4th Floor
                  <br />
                  Amsterdam, Netherlands
                </p>
                <p>
                  <a href="/">www.landpagy.nl</a>
                </p>
                <p>
                  <a href="/">(+010)-770-0090</a>
                </p>
              </div>
              <div className="location-item">
                <p className="title">Spain - MAP</p>
                <p className="address">
                  Paseo de la Castellana,
                  <br />
                  Madrid ,Spain
                </p>
                <p>
                  <a href="/">www.landpagy.es</a>
                </p>
                <p>
                  <a href="/">(+34) 00 000 0000</a>
                </p>
              </div>
              <div className="location-item">
                <p className="title">Singapore - MAP</p>
                <p className="address">
                  9 Straits View
                  <br />
                  Marina One West Tower
                </p>
                <p>
                  <a href="/">www.landpagy.nl</a>
                </p>
                <p>
                  <a href="/">(+069)-0098-087</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-map">
            <iframe
              title="YouTube video player showing a music video"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3988.8270523294163!2d103.8527512!3d1.2772197!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1632647635261!5m2!1sen!2sbd"
              className="google-map"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
