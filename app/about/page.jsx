import AboutHero from "../../components/about/AboutHero";
import AboutStory from "../../components/about/AboutStory";
import db from "../../db.json";
import Lang from "../../lib/lang";

export default async function AboutPage() {
  const lang = await Lang();

  return (
    <div>
      <AboutHero initialLang={lang} data={db.about_page} />
      <AboutStory initialLang={lang} data={db.about_page} />
    </div>
  );
}