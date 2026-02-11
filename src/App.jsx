import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '@/features/landing/pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* All other paths redirect back to landing or specific login/register buttons in landing */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
