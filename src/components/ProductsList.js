import Product from './Product'
import {Routes, Route, BrowserRouter,Link} from 'react-router-dom'



export default function ProductsList(props){
    const { productsL } = props

    return(

   
        <ul>
             
             {productsL.map(x => <Product key={x.id} {...x}/>)} 
             {/* {productsL.map(x => <Link to ={x.title.replace(" ","")} key={x.title.replace(" ","")}>{x.title.replace(" ","")}</Link>)}  */}

        </ul>


       


    )
}


 
