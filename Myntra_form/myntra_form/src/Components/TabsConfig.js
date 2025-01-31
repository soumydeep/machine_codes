import Profile from "./TabComponents/Profile";
import Interest from "./TabComponents/Interest";
import Settings from "./TabComponents/Settings";

const tabs=[
    {
        name:"Profile",
        component:Profile,
        validate:(data,error,setError)=>{
            const err={};
            if(data.name.length<2 || !data.name){
               err.name="Name is not valid"
            }
            if(!data.email){
                err.email="Please enter a Valid Email"
            }
            if(data.age<18){
                err.age="Age must be more than 18"
            }
            setError(err);
            return err.name || err.age || err.email ?false:true;
        }
    },
    {
        name:"Interest",
        component:Interest,
        validate:(data,error,setError)=>{
            const err={};
            if(data.interests.length==0){
                err.interests="Please add atleast one interest"
            }
            setError(err)
            return err.interests?false:true;
        }
    },
    {
        name:"Settings",
        component:Settings,
        validate:(data,error,setError)=>{
            return true;
        }
    },
    
]
export default tabs;