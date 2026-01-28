function Weather({ temp }){
return(
<div>
    <h2>Conditonal Rendering by using ternary Condition</h2>
    {temp > 30 ? <p>it's hot day</p> : <p> it's cool day</p>} <p>and temperature is {temp} C</p>
</div>
)
}
export default Weather