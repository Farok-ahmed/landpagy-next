"use client";
import bannerShape4 from "@/assets/images/home_4/banner-shape-4.svg";
import dashboard from "@/assets/images/home_4/dashboard.png";
import feaShape2 from "@/assets/images/home_4/fea-shape2.svg";
import useGsapReveal from "@/hooks/useGsapReveal";
import Image from "next/image";


export default function WorkFlowHRM() {
  const sectionRef = useGsapReveal({ animation: 'fadeInUp', duration: 0.8 });
  const tabsRef = useGsapReveal({ animation: 'fadeInUp' });

  return (
    <section ref={sectionRef} className="features-area-three features-area-three-hrm">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={feaShape2} alt="shape" />
        </div>
        <div className="shape">
          <Image src={bannerShape4} alt="shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h2 className="mt-n4">A Workflow That Makes Sense</h2>
              <p>
                Aenean amet netus aliquam elit eu, sagittis id natoque id. Purus
                augue fermentum dui aliquam dui vel.
              </p>
            </div>
          </div>
          <div ref={tabsRef} className="col-12">
            <nav>
              <div
               className="nav justify-content-center"
                id="nav-tab"
                role="tablist"
              >
                <button
                 className="nav-link active"
                  id="nav-carban-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-carban"
                  type="button"
                  role="tab"
                  aria-controls="nav-carban"
                  aria-selected="true"
                >
                  HR Profile
                </button>
                <button
                 className="nav-link"
                  id="nav-timeline-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-timeline"
                  type="button"
                  role="tab"
                  aria-controls="nav-timeline"
                  aria-selected="false"
                >
                  Report
                </button>
                <button
                 className="nav-link"
                  id="nav-calendar-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-calendar"
                  type="button"
                  role="tab"
                  aria-controls="nav-calendar"
                  aria-selected="false"
                >
                  Schedule
                </button>
                <button
                 className="nav-link"
                  id="nav-list-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-list"
                  type="button"
                  role="tab"
                  aria-controls="nav-list"
                  aria-selected="false"
                >
                  Employee
                </button>
              </div>
            </nav>
            <div
             className="tab-content features-tab-content"
              id="nav-tabContent"
            >
              <div
               className="tab-pane fade show active"
                id="nav-carban"
                role="tabpanel"
                aria-labelledby="nav-carban-tab"
              >
                <div className="features-tab-image">
                  <Image src={dashboard} alt="Features" />
                </div>
              </div>
              <div
               className="tab-pane fade"
                id="nav-timeline"
                role="tabpanel"
                aria-labelledby="nav-timeline-tab"
              >
                <div className="features-tab-image">
                  <Image src={dashboard} alt="Features" />
                </div>
              </div>
              <div
               className="tab-pane fade"
                id="nav-calendar"
                role="tabpanel"
                aria-labelledby="nav-calendar-tab"
              >
                <div className="features-tab-image">
                  <Image src={dashboard} alt="Features" />
                </div>
              </div>
              <div
               className="tab-pane fade"
                id="nav-list"
                role="tabpanel"
                aria-labelledby="nav-list-tab"
              >
                <div className="features-tab-image">
                  <Image src={dashboard} alt="Features" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
