import React, { useState } from 'react'
import axios from 'axios'
import Card from './components/card'

const App = () => {
  const [Data, setData] = useState([])
  const [num, setNum] = useState(1)
  const [descriptions, setDescriptions] = useState([])

  const getDAta = async () => {
    const response = await axios.get(`https://images-api.nasa.gov/search?q=galaxy&media_type=image&page=${num}&page_size=48`)
    setData(response.data.collection.items)

    //  Correct nesting
    setDescriptions(response.data.collection.items.map(item => item.data[0]?.description || "No description available"))
    console.log(response.data.collection.items)
  }


  React.useEffect(() => {
    getDAta()
  }, [num])

  const index = (newIndex) => {
    if (newIndex >= 1) {
      setNum(newIndex)
      console.log(newIndex)
    }
  }



  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (Data.length > 0) {
    printUserData = Data.map(function (elem, idx) {

      return <div key={idx} >
        <Card elem={elem} />
      </div>
    })
  }
  return (
    <div className="h-screen bg-[url('https://i.pinimg.com/1200x/0a/d9/24/0ad924de82d42969b087654bc7b17711.jpg')] overflow-auto [scroll-width::none] [&::-webkit-scrollbar]:hidden items-center text-white">


      <h1 className="text-5xl font-serif text-center flex justify-center py-4 bg-[url('https://i.pinimg.com/1200x/0a/d9/24/0ad924de82d42969b087654bc7b17711.jpg')] text-white uppercase">NASA GALAXY Gallery</h1>


      <div className="flex flex-wrap gap-4 justify-center pt-4 bg-[url('https://i.pinimg.com/1200x/45/7b/3a/457b3aeb18251ad74cab765899b1e91c.jpg')] object-fill">

        {printUserData}

      </div>

      <div className="flex justify-center items-center gap-4 py-4 bg-[url('https://i.pinimg.com/736x/6a/a6/2e/6aa62efffbc1a50947a21bdeeec3dbf0.jpg')] object-center" >
        <button
          onClick={() => index(num - 1)}
          className='bg-red-800 text-white text-2xl text-semibold px-6 py-2 rounded-b-2xl active:scale-90 border-4 border-red-400'>
          Prev~
        </button>
        <h2 className='text-2xl font-serif text-gray-200 uppercase'>~Page{num}~</h2>
        <button
          onClick={() => index(num + 1)}
          className='bg-blue-800 text-white text-2xl text-semibold px-6 py-2 rounded-t-2xl active:scale-90 border-4 border-blue-400'>
          ~Next
        </button>

      </div>



    </div>
  )
}

export default App
