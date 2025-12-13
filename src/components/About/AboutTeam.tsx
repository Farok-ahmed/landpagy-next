import Image from "next/image";
import team from "@/assets/images/team/team.png";
import team2 from "@/assets/images/team/team-2.png";
import team3 from "@/assets/images/team/team-3.png";
import team4 from "@/assets/images/team/team-4.png";
;

export default function AboutTeam() {
  return (
    <section className="team-area bg-white-800">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title-center">
              <h2 className="mt-n4">Meet Our Team</h2>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="team-item text-center">
              <Image src={team} className="team-image"
                
                alt="Team" />
              <h4>Cooper Dias</h4>
              <p className="font-small">Marketing Designer DURHAM, NC</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mt-8 mt-sm-0">
            <div className="team-item text-center">
              <Image src={team2} className="team-image"
                
                alt="Team" />
              <h4>Jaylon Franci</h4>
              <p className="font-small">Marketing Designer DURHAM, NC</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mt-8 mt-lg-0">
            <div className="team-item text-center">
              <Image src={team3} className="team-image"
                
                alt="Team" />
              <h4>Kadin Baptista</h4>
              <p className="font-small">Marketing Designer DURHAM, NC</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mt-8 mt-lg-0">
            <div className="team-item text-center">
              <Image src={team4} className="team-image"
                
                alt="Team" />
              <h4>Ruben Press</h4>
              <p className="font-small">Marketing Designer DURHAM, NC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
