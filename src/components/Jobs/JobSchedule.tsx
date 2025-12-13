;

export default function JobSchedule() {
  return (
    <div className="single-sidebar-widget mt-60 widget-border">
      <div className="widget-title">
        <h5>Job Schedule</h5>
      </div>
      <div className="pt-20 pb-20 pl-20 pr-20 widget-content">
        <div className="form-check form-check-inline mr-30">
          <input
           className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="fulltime"
            defaultValue="option1"
          />
          <label className="form-check-label" htmlFor="fulltime">
            Full-time
          </label>
        </div>
        <div className="form-check form-check-inline mr-30">
          <input
           className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="parttime"
            defaultValue="option2"
          />
          <label className="form-check-label" htmlFor="parttime">
            Part Time
          </label>
        </div>
      </div>
    </div>
  );
}
