import axios from 'axios'
import{useEffect, useState} from 'react'
import {Routes, Route, BrowserRouter,Link} from 'react-router-dom'
import ProductDetails from './ProductDetails';
import ProductsList from './ProductsList'
import './Categories.css'


export default function Categories(){
    const [list, setList] = useState();
    const [products, setProducts]=useState();
    useEffect(getCategories, []);
    useEffect(getProducts, []);


    function getProducts() {
        axios.get('https://fakestoreapi.com/products')
            .then(result => {//result.data.category
                setProducts(result.data);
                //a=result.data;
               // console.log(result.data);
               
            })
        }

        function getCategories() {
            axios.get('https://fakestoreapi.com/products/categories')
                .then(result => {//result.data.category
                    setList(result.data);
                  //  a=result.data;
                    //console.log(result.data);
                })
            }
// function getCategories(){
//             products.reduce((r, a) => {
//                 // console.log("a", a);
//                 // console.log('r', r);
//                 r[a.category] = [...r[a.category] || [], a];
//                 return r;
//                }, {});
//             }

       if (!list ||!products) return  <h1> Loading..</h1>

    function filterByCat(cat){
        return products.filter(v=>(`${v.category}`==`${cat}`))
    }
    
    return(
      
<>

<ul className='categorieList'> 
 {list.map(x =><div className='category'> <Link to ={x.replace(" ","")} key={x.replace(" ","")} >{x} </Link> </div>)} 
</ul>


<Routes>
{/* {list.map(x => <Route path={x.replace(" ","")} key={x.replace(" ","")} element={<ProductsList productsL={filterByCat(x)} />}/>)}  */}

{list.map(x => <Route path={x.replace(" ","")} key={x.replace(" ","")} element={<ProductsList productsL={filterByCat(x)} />}/>)}

{/* if we put next line instead of the previous one, we can get details props in ProductDetails component*/}

{/* <Route path='electronics/*' key='electronics' element={<ProductsList productsL={filterByCat('electronics')} />}/> */}
   
{/* </Route> */}



         
    
</Routes>

</>

    )
}

