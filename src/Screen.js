import React from 'react'

export default function Screen({handleOnChange,value}) {
    return (
        <div className="flex flex-col">
            <input type="text" onChange={handleOnChange} value={value} className="outline-none pr-8 pl-8 pb-0 pt-10 text-right font-bold" style={{fontSize:'3em',fontFamily: 'Poppins'}}/>
        </div>
    )
}
