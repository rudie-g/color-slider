function RgbSlider({ setColor, color }) {
    return (
        <div>
            <p>{color}</p>
            <input type="range" onChange={(event)=>{setColor(event.target.value)}} min="0" max="255" />
        </div>
    )
}

export default RgbSlider