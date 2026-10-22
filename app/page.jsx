import Hero from "../components/Hero";
import Slider from "../components/Slider";
import WhyChooseUs from "../components/WhyChooseUs"; 
import db from "../db.json";
import Lang from "../lib/lang";

export default async function Home() {
  const lang = await Lang();

  return (
    <div>
      <Hero initialLang={lang} heroData={db.home_hero} />
      <Slider initialLang={lang} sliderData={db.home_slider} />
      
      {/* Նոր բաժինը */}
      <WhyChooseUs initialLang={lang} data={db.why_choose_us} />
    </div>
  );
}