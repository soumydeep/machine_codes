
 function Settings(props){
    const{ data, setData}=props;
    return (
        <>
            <div>Settings</div>
            <div>
                <label>
                    <input
                    type="radio"
                    name="dark"
                    checked={data.settings.includes("dark")}
                    onChange={(e)=>{
                        if(e.target.checked){
                        setData({...data,settings:["dark"]})}}}
                    ></input>
                    dark
                </label>
                <label>
                    <input
                    type="radio"
                    name="light"
                    checked={data.settings.includes("light")}
                    onChange={(e)=>{
                        if(e.target.checked){
                        setData({...data,settings:["light"]})}}}
                    ></input>
                    light
                </label>
            </div>
        </>
    );
}
export default Settings;