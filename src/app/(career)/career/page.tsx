import CareerFeature from "@/components/Career/CareerFeature";
import CareerHero from "@/components/Career/CareerHero";
import FeatureJobs from "@/components/Career/FeatureJobs";
import OpenPosition from "@/components/Career/OpenPosition";
import RecruitmentProcess from "@/components/Career/RecruitmentProcess";

export default function page() {
  return (
    <>
      <CareerHero />
      <CareerFeature />
      <FeatureJobs />
      <RecruitmentProcess />
      <OpenPosition />
    </>
  );
}
