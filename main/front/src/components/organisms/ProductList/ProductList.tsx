import type { Item } from '../../../../types';
import ProductListItem from '../../molecules/ProductListItem/ProductListItem';
import './ProductList.scss';

interface ProductListProps {
  items: Item[];
}

const ProductList = ({ items }: ProductListProps) => {
  return (
    <ol className='product-list'>
      {items.map(item => (
        <ProductListItem key={item.id} item={item} />
      ))}
    </ol>
  );
};

export default ProductList;
