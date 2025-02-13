import { useEffect, useState } from "react";
import FetchProducts from "./Components/FetchProducts";
import ProductCard from "./Components/ProductCard";
import PageNumber from "./Components/PageNumber"

function Pagination(){
const API_URL='https://dummyjson.com/products?limit=194';
const [products,setProducts]=useState([]);
const [pageSortedProducts,setPageSortedProducts]=useState([]);


async function getData(){
        const response=await FetchProducts(API_URL);
        setProducts(response.products);
        setPageSortedProducts(response.products.slice(0,process.env.REACT_APP_SINGLE_PAGE_COUNT));
      
}

useEffect(()=>{
    getData();     
    
},[]);


return (
    <div>
      <PageNumber products={products} setPageSortedProducts={setPageSortedProducts}></PageNumber>
      <ProductCard products={pageSortedProducts}></ProductCard>
    </div>
);

}

export default Pagination;