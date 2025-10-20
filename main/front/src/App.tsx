import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import SearchResultsPage from './components/pages/SearchResultsPage';
import ProductDetailPage from './components/pages/ProductDetailPage';
import MainLayout from './components/templates/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='items' element={<SearchResultsPage />} />
          <Route path='items/:id' element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
