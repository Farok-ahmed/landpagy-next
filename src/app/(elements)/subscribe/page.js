import ElementsBreadcrumb from "@/components/Layout/ElementsBreadcrumb";
import ElementsLayout from "@/components/Layout/ElementsLayout";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import NewsLetterHRM from "@/components/NewsLetter/NewsLetterHRM";
import NewsLetterTwo from "@/components/NewsLetter/NewsLetterTwo";
;

export default function Subscribe() {
  return (
    <ElementsLayout>
      <ElementsBreadcrumb title="Our Subscribe" />
      <NewsLetterTwo />
      <NewsLetterHRM />
      <NewsLetter />
    </ElementsLayout>
  );
}
