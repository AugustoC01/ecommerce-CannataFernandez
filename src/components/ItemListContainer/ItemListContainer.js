import './ItemListContainer.css';
import { getProducts } from '../../asyncmock';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    getProducts(categoryId).then(response => {
      setProducts(response)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
  }, [categoryId])

  if(loading) return <LoadingSpinner />
  
  return(
    <div className='itemList-container'>
      {products.length > 0 
        ? <ItemList products={products} />
        : <h1>No hay productos</h1>}
    </div>
  )
}

export default ItemListContainer