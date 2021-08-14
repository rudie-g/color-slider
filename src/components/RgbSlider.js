function RgbSlider({setColor}) {
    return (
        <input type="range" onChange={(e)=>{setColor(e.target.value)}} min="0" max="255" />
    )
}

export default RgbSlider