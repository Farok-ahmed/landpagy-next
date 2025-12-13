;

export default function JobDescriptions() {
  return (
    <div className="job-description-widget">
      <div className="single-description-para">
        <h6>Position Purpose</h6>
        <p>
          As a Teller at Capital you are the face of the credit union. It's more
          than just processing financial transactions. It's building lasting
          relationships and helping others to improve their financial
          well-being. If a philosophy of "people helping people" fits with your
          personal philosophy, we're the place for you!
        </p>
      </div>
      <div className="single-description-para">
        <h6>Job Responsibilities</h6>
        <ul>
          <li>
            Achieve individual target on daily, weekly & monthly basis set by
            respective Department
          </li>
          <li>
            Ensure smooth business operation at Agent Banking Centre maintaining
            compliance
          </li>
          <li>
            Follow up day to day activities of Agent Banking Centre and being in
            touch with Head office regarding any instruction/circular/guideline
          </li>
          <li>
            Rapport build up with local potential customers to promote financial
            literacy
          </li>
          <li>
            Ensure proper service provided to each and every customers as par
            bank policy
          </li>
          <li>
            Collect and complete applications with all required documents from
            good and prospective Agent
          </li>
        </ul>
      </div>
      <div className="single-description-para">
        <h6>Educational Requirements</h6>
        <ul>
          <li>
            Bachelor's degree in Public Relations, Journalism or related field.
          </li>
        </ul>
      </div>
      <div className="single-description-para">
        <h6>Experience Requirements</h6>
        <ul>
          <li>At least 1 year(s)</li>
          <li>Freshers are also encouraged to apply.</li>
        </ul>
      </div>
      <div className="single-description-para">
        <h6>Additional Requirements</h6>
        <ul>
          <li>Age at most 28 years</li>
          <li>Both males and females are allowed to apply</li>
          <li>
            The applicants should have experience in Banks or Financial
            Institutions
          </li>
        </ul>
      </div>
      <div className="single-description-para pb-2">
        <h6>Compensation & Other Benefits</h6>
        <ul>
          <li>Festival Bonus: 2</li>
          <li>As per policy of the Bank</li>
        </ul>
      </div>

      <div className="single-description-para border-top pt-30">
        <h6>
          Application Process<span>*</span>
        </h6>
        <p className="text_body_color">
          Applications must be submitted through the mentioned link on the page
          by clicking on Apply Button.
        </p>
        <ul className="mt-3 text_body_color">
          <li>
            All applicants must send a cover letter along with an updated CV (we
            encourage CV no longer than four pages) in English.
          </li>
          <li>
            Mentioning three referees' details of your present supervisor and HR
            along with past employment's supervisor with CV.
          </li>
        </ul>
      </div>

      <div className="note-text mt-4 mb-35">
        <p>
          <span>Note: </span> Application s sent by email will not be
          considered. In addition, DRC doesn't charge any fee for any of its
          recruitment process & believes in equal opportunity in employment
          regardless.
        </p>
      </div>

      <div className="d-flex justify-content-between border-top pt-40">
        <button
         className="btn btn-red"
          data-bs-toggle="modal"
          data-bs-target="#applyModal"
        >
          apply now
          <i className="arrow_right"></i>
        </button>
        <button className="custom-btn btn-fade">
          <i className="icon_ribbon_alt t"></i>
          Save
        </button>
      </div>
    </div>
  );
}
