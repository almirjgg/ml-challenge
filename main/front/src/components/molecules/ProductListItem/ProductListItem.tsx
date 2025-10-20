import { Link } from 'react-router-dom';
import type { Item } from '../../../../types';
import { formatCurrency } from '../../../utils/currency';
import shippingIcon from '../../../assets/ic_shipping.png';
import './ProductListItem.scss';

interface ProductListItemProps {
  item: Item;
}

const ProductListItem = ({ item }: ProductListItemProps) => {
  return (
    <Link to={`/items/${item.id}`} className='product-list-item-link'>
      <li className='product-list-item'>
        <img src={item.picture} alt={item.title} className='product-list-item__image' />
        <div className='product-list-item__info'>
          <span className='product-list-item__price'>
            {formatCurrency(item.price.amount, item.price.currency)}
            {item.free_shipping && <img src={shippingIcon} alt='Envío gratis' className='icon' />}
          </span>
          <h2 className='product-list-item__title'>{item.title}</h2>
        </div>
        <span className='product-list-item__location'>{item.city}</span>
      </li>
    </Link>
  );
};

export default ProductListItem;
