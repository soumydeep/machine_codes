import tabs from "./TabsConfig";
import { useState } from "react";

function MainForm() {
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState({
        name: "soumya",
        email: "test@test.com",
        age: 27,
        interests: ["Coading", "Music"],
        settings: ["light"]
    })
    const [error,setError]=useState({});

    const allTabs = tabs;// here we tried to achieve Config driven UI so that we can add or remove data and it is not tightlty coupled
    console.log(allTabs, data);

    const ActiveTabComponent = allTabs[activeTab].component;

    const onClickHandler = (e) => {
        const buttonType = e.target.name;
        
        if (buttonType === "previous") {
            if(allTabs[activeTab].validate(data,error,setError)){
                console.log("inside");
                setActiveTab(activeTab - 1);
            }
            
        }else if (buttonType === "next") {
            if(allTabs[activeTab].validate(data,error,setError)){
                console.log("inside");
                setActiveTab(activeTab+1);
            }
            
        } else if (buttonType === "submit") {
            //call some api
            console.log(data);
        }
    }
    return (

        <div className="main-form">
            Main Form
            <div className="heading-container">
                {allTabs.map((data, index) => <div key={index} className="heading" onClick={() => { setActiveTab(index) }}>{data.name}</div>)}
            </div>
            <div className="tab-body">
                <ActiveTabComponent data={data} setData={setData} error={error}/>
            </div>
            <div>
                {activeTab != 0 && <button name="previous" onClick={(e) => onClickHandler(e)}>Previous</button>}
                {activeTab != allTabs.length - 1 && <button name="next" onClick={(e) => onClickHandler(e)}>Next</button>}
                {activeTab == allTabs.length - 1 && <button name="submit" onClick={(e) => onClickHandler(e)}>Submit</button>}
            </div>
        </div>

    );
}

export default MainForm;