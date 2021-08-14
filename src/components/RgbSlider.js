function RgbSlider({ updateColor, color }) {
    return (
        <div>
            <p>{color}</p>
            <input type="range" onChange={(event)=>{updateColor(color, event.target.value)}} min="0" max="255"  />
        </div>
    )
}

export default RgbSlider