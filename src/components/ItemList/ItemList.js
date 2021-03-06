import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <ul className='list-container'>
      {products.map(
        (prod) => prod.stock > 0 && <Item key={prod.id} {...prod} />
      )}
    </ul>
  );
};

export default ItemList;
