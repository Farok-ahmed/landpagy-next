import JobDescriptions from "@/components/Jobs/JobDescriptions";
import JobDetailsHero from "@/components/Jobs/JobDetailsHero";
import JobSummary from "@/components/Jobs/JobSummary";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import CareerHeader from "@/components/Layout/Header/CareerHeader";
import Image from "next/image";
import iconUpload from "@/assets/images/icon_upload.svg";
;

export default function page() {
  return (
    <div>
      <CareerHeader />
      <JobDetailsHero />
      <section className="job-application-area pt-110 pb-120 bg_white">
        <div className="container blog-grid-container">
          <div className="row">
            <div className="col-lg-8 order-2 order-lg-1">
              <JobDescriptions />
            </div>
            <div className="col-lg-4 pl-lg-55 order-1 order-lg-2">
              <JobSummary />
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal job-application-modal fade"
        id="applyModal"
        tabIndex="-1"
        aria-labelledby="applyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div>
                <h4 className="job-title">
                  Officer Admin and Finance (LRS Position)
                </h4>
                <div className="d-flex flex-wrap">
                  <div className="job-location me-3">
                    <i className="icon_pin_alt"></i>NY, United States
                  </div>
                  <div className="job-catagory">
                    <span>Administration</span> | Full-time
                  </div>
                </div>
              </div>

              <form action="#">
                <div className="row gy-4 mt-4">
                  <div className="col-md-6">
                    <label className="label" htmlFor="modalName">
                      First Name<span>*</span>
                    </label>
                    <input
                      id="modalName"
                      className="form-control"
                      type="text"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="label" htmlFor="modallName">
                      Last Name<span>*</span>
                    </label>
                    <input
                      id="modallName"
                      className="form-control"
                      type="text"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="label" htmlFor="modalemail">
                      Email<span>*</span>
                    </label>
                    <input
                      id="modalemail"
                      className="form-control"
                      type="email"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="label" htmlFor="inputPhoneNumber">
                      Phone Number<span>*</span>
                    </label>
                    <input
                      className="form-control"
                      type="tel"
                      id="inputPhoneNumber"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="label" htmlFor="modalMsg">
                      Message to the recruiter:
                    </label>
                    <textarea
                      className="form-control"
                      id="modalMsg"
                      cols="30"
                      rows="4"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <label className="label mb-0">Attach Your Resume</label>
                    <p className="support mb-2">
                      Files Supported : (.doc, .docx, .pdf, .rtf, .txt. Max size
                      10MB)
                    </p>

                    <div id="dropzone" className="dropzone">
                      <div className="dz-message">
                        <Image src={iconUpload} className="mx-auto"
                          
                          alt="upload" />
                        <h4 className="dz-button">Drag and Drop files here</h4>
                        <p className="dz-custom-upload-text">or browse to</p>
                        <div className="theme-btn theme-btn-primary_alt mt-3">
                          Chosse File
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="theme-btn btn-fade"
                        data-bs-dismiss="modal"
                      >
                        <i className="arrow_left"></i> back
                      </button>
                      <button type="submit" className="theme-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
    </div>
  );
}
