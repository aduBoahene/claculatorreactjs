import React from 'react'

export default function Knob({number,height,width,backColor,borderRadius,onPress}) {
    return (
        <div className={`${borderRadius} flex h-${height} w-${width} items-center justify-center ${backColor} mb-4`} 
        style={{fontFamily: 'Poppins', fontWeight:800}} onClick={onPress}>
            {number}
        </div>
    )
}
