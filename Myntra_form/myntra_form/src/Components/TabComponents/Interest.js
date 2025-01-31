
function Interest(props){
    const interests=props.data.interests;
    const {data,setData}=props;
    const error=props.error;
    function handleChange(event,name){
        interests.includes(name)?setData({...data,interests:interests.filter((value)=>value!=name)}):setData({...data,interests:[...interests,name]})
    }

    return (
        <>
            <div>Interest</div>
            <div>
                <label>
                    <input
                    type="checkbox"
                    name="Coading"
                    checked={interests.includes("Coading")}
                    onChange={(e)=>handleChange(e,e.target.name)}
                    ></input>
                    Coading
                </label>
            </div>
            <div>
                <label>
                    <input
                    type="checkbox"
                    name="Music"
                    checked={interests.includes("Music")}
                    onChange={(e)=>handleChange(e,e.target.name)}
                    ></input>
                    Music
                </label>
            </div>
            <div>
            <label>
                <input
                type="checkbox"
                name="Javascript"
                checked={interests.includes("Javascript")}
                onChange={(e)=>handleChange(e,e.target.name)}
                ></input>
                Javascript
            </label>
        </div>
        <div>
        {error.interests &&<span className="error-container">{error.interests}</span>}
        </div>
        </>
    );
}
export default Interest 