import { useEffect, useState } from "react";


function SearchBox() {

    const [result, setResult] = useState([]);
    const [input,setInput]= useState("");
    const [catchData,setCatchData]=useState({});
    const [showBox,setShowBox]=useState(false);

    const fetchData = async () => {
        if(catchData[input]){
            console.log("Catch call",input);
            setResult(catchData[input]);
            return;
        }
        console.log("Api call",input);
        const response = await fetch("https://dummyjson.com/recipes/search?q="+input);
        const jsonData= await response.json();
        setResult(jsonData.recipes);
        setCatchData((prevState)=>({...prevState,[input]:jsonData.recipes}));
    }

   
 
    useEffect(()=>{
       const debounceTimer=setTimeout(()=>{
        fetchData();
       },300);

       return()=>{
        clearInterval(debounceTimer);
       }
    },[input])

    return (
        <>

            <div className="search_heading">Search Box</div>
            <div className="input_container">
                <input className="input_box" 
                onChange={(e)=>setInput((prevState)=>prevState=e.target.value)}
                onFocus={()=>{setShowBox(true)}}
                onBlur={()=>{setShowBox(false)}}

                >

                </input>
            </div>
            <div className="result_container">
                <div className="result">{showBox && result.map((val,index)=><span key={index} className="result_data">{val.name}</span>)}</div>
            
            </div>

        </>
    );
}

export default SearchBox;