function ColorBox({ bgColor, text, textColor}){
    const styled ={
        color: textColor,
       backgroundColor: bgColor, 
        width:"100px",
        height:"80px",
        borderRadius:"10px",
        margin:"10px",
        padding: "20px"
    }


    return(
        <>
        <div style={styled}>{text}</div>
        </>
    )
}
export default ColorBox