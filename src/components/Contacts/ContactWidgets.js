import Image from "next/image";
import Link from "next/link";

import icon9 from "@/assets/images/icon/icon-9.svg";
import icon10 from "@/assets/images/icon/icon-10.svg";
import icon11 from "@/assets/images/icon/icon-11.svg";
;

export default function ContactWidgets() {
  return (
    <section className="contact-area section-padding-xl">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="contact-info">
              <Image src={icon9} alt="Decorative image" />
              <h4>102 street 1234 Don</h4>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="contact-info">
              <Image src={icon10} alt="Decorative image" />
              <h4>
                <a href="tel:+0123-4567 89">+0123-4567 89</a>
              </h4>
            </div>
          </div>
          <div className="mx-auto col-sm-6 col-lg-4">
            <div className="contact-info">
              <Image src={icon11} alt="Decorative image" />
              <h4>
                <a href="mailto:landpagy@email.com">landpagy@email.com</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="contact-form">
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="contact-form-select">
                      <label htmlFor="topic">Topic</label>
                      <select
                        id="topic"
                       className="nice-select-common select-topic"
                      >
                        <option data-display="Please select a topic">
                          Please select a topic
                        </option>
                        <option value="1">select a topic</option>
                      </select>
                    </div>
                    <div className="contact-form-name">
                      <label htmlFor="name" className="mt-4">
                        Your Name
                      </label>
                      <input type="text" id="name" placeholder="Damo User|" />
                    </div>
                    <div className="contact-form-email">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Enter your email to book demo"
                      />
                    </div>
                    <div className="contact-form-name">
                      <label htmlFor="phone">Phone</label>
                      <input type="text" id="phone" placeholder="+01" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-form-message">
                      <label htmlFor="textarea">Message</label>
                      <textarea
                        id="textarea"
                        placeholder="Type your message...."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="contact-form-button">
                      <Link href="/" className="btn btn-red">
                        Book A Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
