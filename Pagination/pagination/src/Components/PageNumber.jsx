
import { useEffect, useState } from "react";



function PageNumber(props){
    const [pageNumber,setPageNumber]=useState(1);


    const products=props.products;
    const singlePageCount=process.env.REACT_APP_SINGLE_PAGE_COUNT;
    console.log(singlePageCount);
    const setPageSortedProducts=props.setPageSortedProducts;
    const totalPages=Math.ceil(products.length/singlePageCount);
    const strIdx=(pageNumber-1)*singlePageCount;
    const endIdx=(parseInt(strIdx)+parseInt(singlePageCount))>products.length?products.length:(parseInt(strIdx)+parseInt(singlePageCount));
   
    console.log("page num",endIdx);
    
    function handleChange(e){
        console.log(e.target.getAttribute('a-key'));
        const currKey=e.target.getAttribute('a-key');
        setPageNumber(currKey);
    }
    useEffect(()=>{
        const pageSortedProducts=products.slice(strIdx,endIdx);
        console.log(pageSortedProducts);
        setPageSortedProducts(pageSortedProducts);
    },[pageNumber]);

    function PageButtons(){
        const productData=[];
        for(let i=1;i<=totalPages;i++){
            productData.push(<button className="page_button" a-key={i} onClick={handleChange}>{i}</button>);
        }
        return productData;
    }

    

    function handlePrevClick(){
        setPageNumber(prevcount=>prevcount-1);
        console.log()
    }

    function handleNextClick(){
        setPageNumber(prevcount=>prevcount+1);
        console.log()
    }
   

    return(
        <>
            <div>
              
            <div className="page_container">
               
                <PageButtons></PageButtons>
            
            </div>
            <div className="arrow_container">
                <button className="previous_button" disabled={pageNumber==1?true:false} onClick={handlePrevClick}>⬅</button>
                <button className="next_button" disabled={pageNumber==totalPages?true:false} onClick={handleNextClick}>➡</button>
                </div>
              
            </div>
        </>
    );

    
}

export default PageNumber