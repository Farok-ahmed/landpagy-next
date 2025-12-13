import CareerFeature from "@/components/Career/CareerFeature";
import CareerHero from "@/components/Career/CareerHero";
import FeatureJobs from "@/components/Career/FeatureJobs";
import OpenPosition from "@/components/Career/OpenPosition";
import RecruitmentProcess from "@/components/Career/RecruitmentProcess";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import CareerHeader from "@/components/Layout/Header/CareerHeader";
;

export default function page() {
  return (
    <div>
      <CareerHeader />
      <CareerHero />
      <CareerFeature />
      <FeatureJobs />
      <RecruitmentProcess />
      <OpenPosition />
      <FooterOne />
    </div>
  );
}
