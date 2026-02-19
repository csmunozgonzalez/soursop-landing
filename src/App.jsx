import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '@/features/landing/pages/original/Landing';
import LandingBOS from '@/features/landing/pages/pymes/LandingBOS';
import LandingCEO from '@/features/landing/pages/ceo/LandingCEO';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pymes" element={<LandingBOS />} />
        <Route path="/ceo" element={<LandingCEO />} />
        {/* All other paths redirect back to landing or specific login/register buttons in landing */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
