import React, {useState, useEffect} from 'react'
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',')

  return (
    <div className="">
      <div
        className={`color ${index > 10 && 'color-light'}`}
        style={{backgroundColor: `rgb(${bcg})`}}
      >
        <p>
          {weight}%
        </p>
        <p>
          {hexColor.toUpperCase()}
        </p>
      </div>
    </div>
  )
}

export default SingleColor
