import PageShell from './components/PageShell';

export default function HomePage() {
  return (
    <PageShell title="Home Page" subtitle="Participatory action plan by citizens">
      <div className="grid-two">
        <div className="card" style={{ background: '#d2f8ed' }}>
          <h3 className="section-title">Description of city</h3>
          <p style={{ maxWidth: 540, fontWeight: 600 }}>
            The home page mirrors the playful inspiration from the mock with bold blocks, rounded corners, and
            friendly colors. Replace these paragraphs with your project overview, goals, and how citizens can get
            involved.
          </p>
        </div>
        <div className="card" style={{ background: '#ffcd85', textAlign: 'center' }}>
          <h3 className="section-title">World on the map</h3>
          <div className="map-placeholder" style={{ minHeight: 220 }}>
            Globe illustration placeholder
          </div>
        </div>
      </div>
      <div className="card" style={{ marginTop: 20, background: '#c7e6ff' }}>
        <h3 className="section-title">They are working on this!</h3>
        <p style={{ fontWeight: 600 }}>
          Highlight community champions and partners who contribute to the action plan. Add cards, logos, or links to
          showcase collaborations and share progress updates.
        </p>
      </div>
      <div className="card" style={{ marginTop: 20, background: '#c7e6ff' }}>
        <h3 className="section-title">By local partners</h3>
        <p style={{ fontWeight: 600 }}>
          Invite local organizations to submit projects, resources, and data. This area can expand into grids of partner
          stories, calls to action, and quick stats.
        </p>
      </div>
    </PageShell>
  );
}
