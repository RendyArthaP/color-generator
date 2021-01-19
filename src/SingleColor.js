import React, {useState, useEffect} from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(',')
  const hexValue = `#${hexColor.toUpperCase()}`

  const copyClipboard = () => {
    setAlert(true)
    navigator.clipboard.writeText(hexValue)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <div className="">
      <div
        className={`color ${index > 10 && 'color-light'}`}
        style={{backgroundColor: `rgb(${bcg})`}}
        onClick={copyClipboard}
      >
        <p>
          {weight}%
        </p>
        <p>
          {hexValue}
        </p>
        {alert && 
          <p className="font-medium text-gray-300 text-xs w-full text-center pt-8">
            COPIED TO CLIPBOARD
          </p>
        }
      </div>
    </div>
  )
}

export default SingleColor
