import React, {useState} from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    // 10 is the hardcode from Values
    try {
      let colors = new Values(color).all(10);
      console.log(colors)
      setList(colors)
    } catch(error) {
      setError(true);
      console.log(error)
    }
    setColor('')
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row p-4 w-full">
        <h1 className="text-xl">Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="border border-black focus:outline-none hover:outline-none py-1 rounded md:ml-6"
            type="text" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#FFFFFF"
          />
          <button 
            type="submit"
            className="bg-blue-500 text-white rounded w-20 py-1 ml-1 focus:outline-none hover:outline-none"
          >
            Submit
          </button>
          <p className="text-red-500 font-medium mx-6 text-xs pt-1">
            {`${error ? 'That is not color code' : '' }`}
          </p>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center pb-4 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 px-4 pr-10">
        {list.map((color, index) => (
          <SingleColor 
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        ))}
      </div>
    </div>
    
  );
}

export default App;
