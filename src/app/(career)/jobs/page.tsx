import JobList from "@/components/Jobs/JobList";
import JobNewsLetter from "@/components/Jobs/JobNewsLetter";
import JobsHero from "@/components/Jobs/JobsHero";
import JobSidebar from "@/components/Jobs/JobSidebar";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import CareerHeader from "@/components/Layout/Header/CareerHeader";
;

export default function page() {
  return (
    <div>
      <CareerHeader />
      <JobsHero />
      <section className="pt-110 pb-130 job-post-wrapper">
        <div className="container blog-grid-container">
          <div className="row">
            {/* <!-- left side bar --> */}
            <div className="col-lg-4 pr-lg-55">
              <JobSidebar />
            </div>
            {/* <!-- Right bar --> */}
            <div className="col-lg-8">
              <JobList />
              <JobNewsLetter />
            </div>
          </div>
        </div>
      </section>
      <FooterOne />
    </div>
  );
}
