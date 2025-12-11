import PageShell from '../components/PageShell';
import RegionMapCard from '../components/RegionMapCard';

export default function WhereWeWorkPage() {
  return (
    <PageShell title="Where we work">
      <div className="card" style={{ background: '#ffe3e3' }}>
        <h3 className="section-title">Select the filters to localize the indicators you need</h3>
        <div className="filter-row">
          <select className="select" defaultValue="">
            <option value="" disabled>
              Sub region
            </option>
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
          </select>
          <select className="select" defaultValue="">
            <option value="" disabled>
              Region
            </option>
            <option>Andean</option>
            <option>Caribbean</option>
            <option>Pacific</option>
          </select>
          <select className="select" defaultValue="">
            <option value="" disabled>
              Country
            </option>
            <option>Kenya</option>
            <option>Brazil</option>
            <option>USA</option>
          </select>
          <select className="select" defaultValue="">
            <option value="" disabled>
              City
            </option>
            <option>Nairobi</option>
            <option>Rio</option>
            <option>New York</option>
          </select>
        </div>
        <RegionMapCard />
      </div>
    </PageShell>
  );
}
