import React, { useState } from 'react'
import Knob from './Knob'
import Screen from './Screen'

export default function Keyboard() {
  const [screenValue, setScreenValue] = useState('0')

  const [firstValue, setFirstValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)

  const handleEqualTo = () => {
    let total = 0
    setSecondValue(screenValue)

    console.log('second value', secondValue)
    console.log('first value', firstValue)

    console.log('sum', secondValue + firstValue)
    total = parseInt(firstValue) + parseInt(secondValue)
    setScreenValue(total)
  }

  const handlePlus = (buttonLabel) => {
    setScreenValue(buttonLabel)
    setFirstValue(screenValue)
    setScreenValue('0')
  }

  const handleDivide = () => {
    setScreenValue('0')
  }

  const handleModulus = () => {
    setScreenValue('0')
  }

  const handleSeven = (num) => {
    setScreenValue(screenValue + num)
    console.log("screen value",screenValue)
  }

  return (
    <div className="flex flex-col">
      <Screen handleOnChangeMain={(e) => setScreenValue(e.target.value)} value={screenValue} />
      <div className="flex justify-evenly p-8 flex-wrap w-96 max-w-xs mx-auto rounded-lg">
        <Knob
          number="C"
          height="14"
          width="14"
          backColor="bg-gray-200"
          borderRadius="rounded-full"
          onPress={(e) => setScreenValue('0')}
        />
        <Knob
          number="+"
          height="14"
          width="14"
          backColor="bg-gray-200"
          borderRadius="rounded-full"
          onPress={(e) => handlePlus()}
        />
        <Knob
          number="x²"
          height="14"
          width="14"
          backColor="bg-gray-200"
          borderRadius="rounded-full"
          onPress={(e) => handleModulus()}
        />
        <Knob
          number="÷"
          height="14"
          width="14"
          backColor="bg-gray-200"
          borderRadius="rounded-full"
          onPress={(e) => handleDivide()}
        />
        <Knob
          number="7"
          height="14"
          width="14"
          onPress={(e) => handleSeven(e.target.outerText)}
        />
        <Knob
          number="8"
          height="14"
          width="14"
          onPress={(e) => handleSeven(e.target.outerText)}
        />
        <Knob
          number="9"
          height="14"
          width="14"
          onPress={(e) => handleSeven(e.target.outerText)}
        />
        <Knob
          number="X"
          height="14"
          width="14"
          onPress={(e) => console.log('object,', e.target.outerText)}
          backColor="bg-gray-200"
          borderRadius="rounded-full"
        />
        <Knob
          number="4"
          height="14"
          width="14"
          onPress={(e) => handleSeven(e.target.outerText)}
        />
        <Knob
          number="5"
          height="14"
          width="14"
          onPress={(e) => handleSeven(e.target.outerText)}
        />
        <Knob
          number="6"
          height="14"
          width="14"
          onPress={(e) => handleSeven(e.target.outerText)}
        />
        <Knob
          number="-"
          height="14"
          width="14"
          backColor="bg-gray-200"
          borderRadius="rounded-full"
          onPress={(e) => console.log('object,', e.target.outerText)}
        />
        <Knob
          number="1"
          height="14"
          width="14"
          onPress={(e) => handleSeven(e.target.outerText)}
        />
        <Knob
          number="2"
          height="14"
          width="14"
          onPress={(e) => handleSeven(e.target.outerText)}
        />
        <Knob
          number="3"
          height="14"
          width="14"
          onPress={(e) => handleSeven(e.target.outerText)}
        />
        <Knob
          number="+"
          height="14"
          width="14"
          backColor="bg-gray-200"
          borderRadius="rounded-full"
          onPress={(e) => handlePlus(e.target.outerText)}
        />
        <Knob
          number="0"
          height="14"
          width="16"
          onPress={(e) => handleSeven(e.target.outerText)}
        />
        <Knob
          number="."
          height="14"
          width="16"
          onPress={(e) => handleSeven(e.target.outerText)}
        />
        <Knob
          number="="
          height="14"
          width="28"
          backColor="bg-yellow-300"
          borderRadius="rounded-lg"
          onPress={(e) => handleEqualTo()}
        />
      </div>
    </div>
  )
}
