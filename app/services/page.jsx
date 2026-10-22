import ServicesHero from "../../components/services/ServicesHero";
import ServicesGrid from "../../components/services/ServicesGrid";
import db from "../../db.json";
import Lang from "../../lib/lang";

export default async function ServicesPage() {
  const lang = await Lang();

  return (
    <div>
      <ServicesHero initialLang={lang} data={db.services_page} />
      <ServicesGrid initialLang={lang} data={db.services_page} />
    </div>
  );
}