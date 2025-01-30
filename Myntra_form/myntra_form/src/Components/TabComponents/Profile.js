

function Profile(props) {
    const { data, setData } = props;

    function changeHandler(event,item){

       setData({...data,[item]:event.target.value});// to iterate over items we need to use it as a key so keep it inside [] 

    }

    return (
        <>
            <div>Profile</div>
            <div className="form-fields">
                <div>
                    <label>Name : </label>
                    <input type="text" value={data.name} onChange={(e)=>changeHandler(e,"name")}></input>
                </div>
                <div>
                    <label>Email : </label>
                    <input type="text" value={data.email} onChange={(e)=>changeHandler(e,"email")}></input>
                </div>
                <div>
                    <label>Age : </label>
                    <input type="number" value={data.age} onChange={(e)=>changeHandler(e,"age")}></input>
                </div>
            </div>
        </>
    );

}


export default Profile;