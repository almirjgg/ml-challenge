import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemDetails, searchItems } from '../../../services/api';
import { type ItemDetails } from '../../../../types';
import ProductDetailView from '../../organisms/ProductDetailView/ProductDetailView';
import Breadcrumb from '../../molecules/Breadcrumb/Breadcrumb';
import './ProductDetailPage.scss';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ItemDetails | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProductDetails = async () => {
        try {
          setLoading(true);
          setError(null);
          const { item } = await getItemDetails(id);
          setProduct(item);

          const searchResults = await searchItems(item.title.split(' ')[0]);
          setCategories(searchResults.categories);
        } catch (err) {
          setError('No se pudo cargar el producto.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchProductDetails();
    }
  }, [id]);

  if (loading) return <div className='loader'>Cargando...</div>;
  if (error) return <div className='error'>{error}</div>;

  return (
    <section className='product-detail-page'>
      <Breadcrumb categories={categories} />
      {product && <ProductDetailView product={product} />}
    </section>
  );
};

export default ProductDetailPage;
