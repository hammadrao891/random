import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Canvas from './components/Canvas';
import FieldRandomPoints from './pages/FieldRandomPoints';
import ExcelRandomPoints from './pages/ExcelRandomPoints';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <div className="text-center justify-center flex flex-col max-w-4xl mx-auto pt-4">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/excel_random_points" element={<ExcelRandomPoints />} />
          <Route path="/field_random_points" element={<FieldRandomPoints />} />
        </Routes>
        {/* <Canvas /> */}
      </div>
    </Router>
  );
}

export default App;
