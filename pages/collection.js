import {getData} from '../utils/fetchData'
import {useState} from 'react'
import Head from 'next/head'
import ProductItem from '../components/product/ProductItem'


const Home = (props) => {
  const [products, setProducts] = useState(props.products)


  return (
    <div className="products"style={{marginLeft:'10%', marginRight:'10%'}}>
      
      <Head>
        <title>Home Page</title>
      </Head>
      {
        products.length === 0
        ? <h2>No Product</h2>
        :
        products.map(product =>(
          <ProductItem key={product._id} product={product}/>
          
        ))
        
      }
      
    </div>
  )
}


export async function getServerSideProps() {
  const res = await getData('product')
  return {
    props: {
      products: res.products,
      result: res.result
    }, // will be passed to the page component as props
  }
}
export default Home