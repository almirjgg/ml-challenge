import type { ItemDetails } from '../../../../types';
import { formatCurrency } from '../../../utils/currency';
import Button from '../../atoms/Button/Button';
import './ProductDetailView.scss';

interface ProductDetailViewProps {
  product: ItemDetails;
}

const ProductDetailView = ({ product }: ProductDetailViewProps) => {
  const conditionMap: { [key: string]: string } = {
    new: 'Nuevo',
    used: 'Usado',
  };

  return (
    <div className='product-detail-view'>
      <div className='product-detail-view__main'>
        <img src={product.picture} alt={product.title} className='product-detail-view__image' />
        <div className='product-detail-view__info'>
          <span className='product-detail-view__condition-sold'>
            {conditionMap[product.condition] || product.condition} - {product.sold_quantity}{' '}
            vendidos
          </span>
          <h1 className='product-detail-view__title'>{product.title}</h1>
          <span className='product-detail-view__price'>
            {formatCurrency(product.price.amount, product.price.currency)}
          </span>
          <Button className='btn--primary'>Comprar</Button>
        </div>
      </div>
      <div className='product-detail-view__description'>
        <h2>Descripción del producto</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailView;
