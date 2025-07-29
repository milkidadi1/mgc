// OurServices.jsx
import "./ourservices.css";

const services = [
  {
    number: "01",
    title: "General Construction Works",
    points: [
      "Residential, Commercial, and Institutional Building Projects (B+G+multi-floor)",
      "Roads and Highways (URRAP and community roads)",
      "Bridge Construction (Steel & Reinforced Concrete Structures)",
      "Irrigation Canals & Dams",
      "Retaining Walls, Ponds, and Hydraulic Structures",
    ],
  },
  {
    number: "02",
    title: "Design & Build",
    points: [
      "Turnkey solutions from concept design to full implementation",
      "Architectural & Structural Design",
      "Cost Estimation and Feasibility Studies",
    ],
  },
  {
    number: "03",
    title: "Construction Management & Supervision",
    points: [
      "End-to-end site supervision and contract administration",
      "Quality assurance and timeline monitoring",
    ],
  },
  {
    number: "04",
    title: "Maintenance & Renovation Works",
    points: [
      "Road and bridge maintenance",
      "Structural repairs and upgrades",
      "Public facility rehabilitation",
    ],
  },
];

export default function OurServices() {
  return (
    <>
      <section className="our-services">
        <h2>Our Services</h2>
        <p className="subtitle">
          MWGC offers a wide range of construction and engineering services, including:
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>
              <div className="number-badge">{service.number}</div>
              <h3>{service.title}</h3>
              <ul>
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
