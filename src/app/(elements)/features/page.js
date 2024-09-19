import MainFeatureOne from "@/components/Features/MainFeatureOne";
import MainFeatureThree from "@/components/Features/MainFeatureThree";
import MainFeatureTwo from "@/components/Features/MainFeatureTwo";
import FeatureHero from "@/components/HeroBanner/FeatureHero";
import ElementsLayout from "@/components/Layout/ElementsLayout";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Features() {
  return (
    <ElementsLayout>
      <FeatureHero />
      <MainFeatureOne />
      <MainFeatureTwo />
      <MainFeatureThree />
      <NewsLetter />
    </ElementsLayout>
  );
}
