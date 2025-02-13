import { useEffect } from "react";


async function FetchProducts(url){

        const response=await fetch(url);
        const jsonReponse=await response.json();
        console.log(jsonReponse)
        return jsonReponse;
        // by default it always return a promise
}
export default FetchProducts;