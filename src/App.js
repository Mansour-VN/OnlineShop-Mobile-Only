import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import CartPage from './Pages/CartPage/CartPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import {useEffect, useState} from "react";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  const notify = () => toast("Out of Stock!");
const productsList = [
    {
        id: 1,
        name: "Product 1",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, molestias!",
        description: "Shirt",
        price: 100,
        image: "https://picsum.photos/200/280",
        quantity:10,
    },
    {
        id: 2,
        name: "Product 2",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, molestias!",
        description: "Jeans",
        price: 110,
        image: "https://picsum.photos/200/281",
        quantity:10,
    },
    {
        id: 3,
        name: "Product 3",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, molestias!",
        description: "Shoes",
        price: 120,
        image: "https://picsum.photos/200/282",
        quantity:10,
    },
    {
        id: 4,
        name: "Product 2",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, molestias!",
        description: "Jeans",
        price: 130,
        image: "https://picsum.photos/200/283",
        quantity:10,
    },
];

function App() {

    const [products, setProducts] = useState(productsList);
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState({});
    const [page, setPage] = useState("home");
    const [previous, setprevious] = useState("");



    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
        localStorage.setItem("cart",JSON.stringify(cart))
    }, [products]);


    const handlePage = (p) => {
        setprevious(page);
        setPage(p)
    }
    const previousPage = () => {
        setprevious(page);
        setPage(previous)
    }
    const handleProduct = (p) => {
        setProduct(p);
        
    }

    
   const addToCart = (product)=>{
    const check=cart.find((item)=>item.id===product.id)
    if(product.quantity>0){
    if(check===undefined){
        const updatedProducts=[]
        products.forEach((item)=>{
            if(item.id===product.id){
                item.quantity--
                updatedProducts.push(item)
            }else{
                updatedProducts.push(item)
            }
          })
          setProducts(updatedProducts)
        setCart([...cart , {...product,number:1}]);
    }else{
      const updatedCart=[]
      const updatedProducts=[]
      cart.forEach((item)=>{
        if(item.id===product.id){
            item.number++
            item.quantity--
            updatedCart.push(item)
        }else{
            updatedCart.push(item)
        }
      })
      products.forEach((item)=>{
        if(item.id===product.id){
            item.quantity--
            updatedProducts.push(item)
        }else{
            updatedProducts.push(item)
        }
      })
      setProducts(updatedProducts)
      setCart(updatedCart)  
    }}else{
 notify()
    }
   
   }

   const plus= (product)=>{
    if(product.quantity>0){
          const updatedCart=[]
          const updatedProducts=[]
          cart.forEach((item)=>{
            if(item.id===product.id){
                item.number++
                item.quantity--
                updatedCart.push(item)
            }else{
                updatedCart.push(item)
            }
          })
          products.forEach((item)=>{
            if(item.id===product.id){
                item.quantity--
                updatedProducts.push(item)
            }else{
                updatedProducts.push(item)
            }
          })
          
          setCart(updatedCart) 
          setProducts(updatedProducts) 
        }else{
     notify()
        }  
}

const minus= (product)=>{
        let updatedCart=[]
        const updatedProducts=[]
        cart.forEach((item)=>{
          if(item.id===product.id){
              item.number--
              item.quantity++
              updatedCart.push(item)
          }else{
              updatedCart.push(item)
          }
        })
        products.forEach((item)=>{
          if(item.id===product.id){
              item.quantity++
              updatedProducts.push(item)
          }else{
              updatedProducts.push(item)
          }
        })
        if(product.number===0){
            updatedCart=cart.filter((item)=>item.id!==product.id)
        }
        
        setCart(updatedCart)
        setProducts(updatedProducts)  
   }
    return (
        <div className="App">
            {page === "home" && <HomePage products={products} handleProduct={handleProduct} handlePage={handlePage}/>}
            {page === "product" && <ProductPage product={product} previousPage={previousPage}  handlePage={handlePage} addToCart={addToCart} />}
            {page === "cart" && <CartPage handlePage={handlePage} plus={plus} minus={minus} cart={cart} />}
            <ToastContainer />
        </div>
    );
}

export default App;
