import ServiceDetail from "../../../components/services/ServiceDetail";
import db from "../../../db.json";
import Lang from "../../../lib/lang";

export default async function ServiceSinglePage({ params }) {
  const lang = await Lang();
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Գտնում ենք տվյալ լեզվի բոլոր ծառայությունները
  const langData = db.services_page.find((item) => item.lang === lang) || db.services_page[0];
  const service = langData?.items.find((item) => item.slug === slug);

  // Եթե տվյալները չկան, ցույց տանք սխալ
  if (!service) {
    return (
      <div style={{ padding: "100px", textAlign: "center", fontSize: "24px" }}>
        <h1>404 - Այս ծառայությունը չի գտնվել</h1>
        <p>Լեզուն: {lang}</p>
        <p>Slug: {slug}</p>
      </div>
    );
  }

  if (!service.details) {
    return (
      <div style={{ padding: "100px", textAlign: "center", fontSize: "24px" }}>
        <h1>Տվյալները բացակայում են</h1>
        <p>Այս ծառայության համար details չկա:</p>
      </div>
    );
  }

  return (
    <div>
      <ServiceDetail 
        initialLang={lang}
        service={service.details}
        teacherImage={service.image}
        teacherName={service.teacher}
        teacherRole={service.role}
      />
    </div>
  );
}