function RgbDisplay({ bgColor, colorRed, colorBlue, colorGreen }) {
    return (
    <div style={{backgroundColor: bgColor}} className="displaydiv">
        <h3>I'm the display!</h3>
        <br />
        <br />
        <p>Red: {colorRed}</p>
        <p>Blue: {colorBlue}</p>
        <p>Green: {colorGreen}</p>
    </div>
    )
}

export default RgbDisplay