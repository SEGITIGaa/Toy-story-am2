import { Router, Routes, Route, DetiloesKiosk } from './exporter';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DetiloesKiosk />} />
      </Routes>
    </Router>
  );
}

export default App;
