import {Routes, Route, BrowserRouter,Link, useLocation,useParams,Outlet} from 'react-router-dom'
import ProductDetails from './ProductDetails'

export default function Product(props){
    const { title , image , price,id ,description} = props
   console.log(description);
    return (
     

       <div width="150px" height="150px">
           <img src={image} width="150px" height="150px"></img>
           <div>{price}$</div>
           <button>Add to Cart</button>
   
            <nav>
       
            {/* <Link to ={id.toString()}  element={<ProductDetails details={description}/>}>{title}</Link> */}
            <Link to ='dd'  element={<ProductDetails details={description}/>}>{title}</Link>
            <Routes>
                {/* <Route path=":productId" element={<ProductDetails details={description} />} /> */}
                <Route path='dd' element={<h1>details to display</h1>} />
            </Routes>
            

          
            </nav>
            <Outlet />
               

       </div>
    )
}
