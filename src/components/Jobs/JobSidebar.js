;
import JobCategory from "./JobCategory";
import JobLocation from "./JobLocation";
import JobSchedule from "./JobSchedule";
import JobSearchForm from "./JobSearchForm";

export default function JobSidebar() {
  return (
    <div className="left-sidebar-widget">
      <div className="sidebar-header">
        <div className="sidebar-title">
          <h4>Search for jobs</h4>
        </div>
      </div>
      <JobSearchForm />
      <JobLocation />
      <JobCategory />
      <JobSchedule />
    </div>
  );
}
