"use client";

import "./ServiceDetail.css";

export default function ServiceDetail({ initialLang, service, teacherImage, teacherName, teacherRole }) {
  if (!service) return <div style={{ padding: "100px", textAlign: "center" }}>Տվյալներ չկան</div>;

  return (
    <article className="service-detail">
      <div className="service-detail-header">
        <div className="service-detail-image">
          <img src={teacherImage} alt={teacherName} />
        </div>
        <div className="service-detail-title-box">
          <h1 className="service-detail-title">{service.title}</h1>
          <p className="service-detail-subtitle">{service.subtitle}</p>
          <p className="service-detail-teacher">Դասատու՝ {teacherName} ({teacherRole})</p>
        </div>
      </div>
      
      <div className="service-detail-intro">
        <p>{service.intro1}</p>
        <p>{service.intro2}</p>
      </div>

      <div className="service-detail-section">
        <h2 className="service-detail-section-title">{service.programsTitle}</h2>
        <ul className="service-detail-list">
          {service.programs && service.programs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="service-detail-section">
        <h2 className="service-detail-section-title">{service.typesTitle}</h2>
        <div className="service-types-grid">
          <div className="service-type-card">
            <h3>{service.individualTitle}</h3>
            <ul>
              {service.individualList && service.individualList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="service-type-card">
            <h3>{service.groupTitle}</h3>
            <ul>
              {service.groupList && service.groupList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="service-detail-section">
        <h2 className="service-detail-section-title">{service.formatsTitle}</h2>
        <div className="service-formats">
          <p>{service.online}</p>
          <p>{service.offline}</p>
          <p className="service-address">{service.address}</p>
        </div>
      </div>

      <div className="service-detail-footer">
        <p>{service.footerText}</p>
      </div>
    </article>
  );
}