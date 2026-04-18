// Geometric abstract marks — clinical, line-based
const GeoArcs = ({ opacity = 0.6 }) => (
  <svg viewBox="0 0 400 400" style={{ opacity }}>
    <g className="spin">
      <circle cx="200" cy="200" r="180" fill="none" stroke="#2E7BC4" strokeWidth="0.5" strokeDasharray="2 4" />
      <circle cx="200" cy="200" r="140" fill="none" stroke="#2E7BC4" strokeWidth="0.5" />
    </g>
    <circle cx="200" cy="200" r="100" fill="none" stroke="#143D8A" strokeWidth="0.5" />
    <path d="M 60 200 A 140 140 0 0 1 340 200" fill="none" stroke="#2E7BC4" strokeWidth="1.5" />
    <circle cx="200" cy="200" r="4" fill="#2E7BC4" className="breathe" />
  </svg>
);

const GeoGrid = ({ opacity = 0.25 }) => (
  <svg viewBox="0 0 600 400" style={{ opacity }}>
    <defs>
      <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.7" fill="#2E7BC4" />
      </pattern>
    </defs>
    <rect width="600" height="400" fill="url(#dots)" />
  </svg>
);

const GeoCross = ({ opacity = 0.9 }) => (
  <svg viewBox="0 0 200 200" style={{ opacity }}>
    <line x1="100" y1="0" x2="100" y2="200" stroke="#2E7BC4" strokeWidth="0.5" />
    <line x1="0" y1="100" x2="200" y2="100" stroke="#2E7BC4" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="#143D8A" strokeWidth="1" />
    <circle cx="100" cy="100" r="30" fill="none" stroke="#2E7BC4" strokeWidth="1" className="breathe" />
  </svg>
);

const GeoSquare = ({ opacity = 0.7 }) => (
  <svg viewBox="0 0 300 300" style={{ opacity }}>
    <g className="spin" style={{ animationDuration: "160s" }}>
      <rect x="50" y="50" width="200" height="200" fill="none" stroke="#2E7BC4" strokeWidth="0.5" transform="rotate(15 150 150)" />
      <rect x="80" y="80" width="140" height="140" fill="none" stroke="#143D8A" strokeWidth="0.5" transform="rotate(-10 150 150)" />
    </g>
    <rect x="110" y="110" width="80" height="80" fill="none" stroke="#2E7BC4" />
  </svg>
);

const GeoScale = ({ opacity = 0.6 }) => (
  <svg viewBox="0 0 400 100" style={{ opacity }}>
    {Array.from({ length: 42 }).map((_, i) => (
      <line key={i} x1={i * 10} x2={i * 10} y1="50" y2={i % 5 === 0 ? "20" : (i % 2 === 0 ? "38" : "44")} stroke="#2E7BC4" strokeWidth="0.5" />
    ))}
    <line x1="0" y1="50" x2="420" y2="50" stroke="#2E7BC4" strokeWidth="0.5" />
  </svg>
);

Object.assign(window, { GeoArcs, GeoGrid, GeoCross, GeoSquare, GeoScale });
