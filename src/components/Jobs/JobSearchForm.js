;

export default function JobSearchForm() {
  return (
    <div className="single-sidebar-widget mt-35 widget-shadow">
      <div className="input-search-field input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Job title or keywords..."
        />
        <div className="input-group-append">
          <button className="btn">
            <i className="icon_search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
