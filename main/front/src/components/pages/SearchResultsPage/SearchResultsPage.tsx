import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchItems } from '../../../services/api';
import { type Item } from '../../../../types';
import Breadcrumb from '../../molecules/Breadcrumb/Breadcrumb';
import ProductList from '../../organisms/ProductList/ProductList';
import './SearchResultsPage.scss';
import NotFoundView from '../../organisms/NotFoundView/NotFoundView';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      const fetchItems = async () => {
        try {
          setLoading(true);
          setError(null);
          const results = await searchItems(query);
          setItems(results.items);
          setCategories(results.categories);
        } catch (err) {
          setError('Ocurrió un error al buscar los productos.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchItems();
    } else {
      setItems([]);
      setCategories([]);
    }
  }, [query]);

  if (loading && query) return <div className='loader'>Buscando productos...</div>;
  if (error) return <div className='error'>{error}</div>;

  return (
    <section className='search-results-page'>
      <Breadcrumb categories={categories} />
      {/* 2. Aquí está la lógica condicional */}
      {items.length > 0 ? (
        <ProductList items={items} />
      ) : (
        // Si no hay items, se renderiza NotFoundView
        query && (
          <NotFoundView
            title='No hay publicaciones que coincidan con tu búsqueda.'
            message='Intenta con otra búsqueda.'
          />
        )
      )}
    </section>
  );
};

export default SearchResultsPage;
