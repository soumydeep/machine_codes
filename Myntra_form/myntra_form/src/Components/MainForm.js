import tabs from "./TabsConfig";
import {useState} from "react";

function MainForm(){
    const[activeTab,setActiveTab]=useState(0);
    const[data,setData]=useState({
        name:"soumya",
        email:"test@test.com",
        age:27,
        interests:["Coading","Music"],
        settings:["light"]
    })

    const allTabs=tabs;// here we tried to achieve Config driven UI so that we can add or remove data and it is not tightlty coupled
    console.log(allTabs,data);

    const ActiveTabComponent=allTabs[activeTab].component;

    return(
        
        <div className="main-form">
            Main Form
        <div className="heading-container">
        {allTabs.map((data,index)=><div key={index}className="heading" onClick={()=>{setActiveTab(index)}}>{data.name}</div>)}
        </div>
        <div className="tab-body">
            <ActiveTabComponent data={data} setData={setData}/>
        </div>
        </div>
       
    );
}

export default MainForm;