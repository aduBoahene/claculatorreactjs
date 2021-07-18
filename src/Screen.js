import React from 'react'

export default function Screen({handleOnChangeMain,valueMain}) {
    return (
        <div className="flex flex-col">
            <input type="text" onChange={handleOnChangeMain} value={valueMain} className="outline-none pr-8 pl-8 pb-0 pt-10 text-right font-bold" style={{fontSize:'3em',fontFamily: 'Poppins'}}/>
        </div>
    )
}
