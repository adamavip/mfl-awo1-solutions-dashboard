export default function RegionMapCard() {
  return (
    <div className="card" style={{ background: '#fee0e0', marginTop: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <div className="badge">Map</div>
        <div className="badge" style={{ background: '#d1f7c4' }}>
          Share your story
        </div>
      </div>
      <div className="map-placeholder" style={{ minHeight: 320, marginTop: 12 }}>
        Map placeholder
      </div>
    </div>
  );
}
