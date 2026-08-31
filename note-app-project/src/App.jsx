import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")

  const [task, setTask] = useState([])



  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title, details)
    const copyTask = [...task];


    copyTask.push({ title, details })
    setTask(copyTask)

    setTitle("");
    setDetails("");
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    console.log(idx);
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }


  return (


    <div className='h-screen lg:flex bg-black text-white' >
      <form onSubmit={(e) => {

        submitHandler(e)

      }}
        classname='flex gap-4 lg:w-1/1 p-10 flex-col items-start'>


        <h1 className='text-2xl font-bold'>Add Notes</h1>


        <input className
          =' px-5 w-full font-medium py-2 border-2 outline-none rounded '
          type="text" placeholder='enter task'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);

          }}
        />



        <textarea className
          ='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded'
          placeholder='Write Details'

          value={details}
          onChange={(e) => {
            setDetails(e.target.value);

          }}

        ></textarea>

        <button className
          ='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'>
          ADD Notes
        </button>

      </form>



      <div className='lg:w-1/2 lg:border-l-2  p-10'>         

        <h1 className='text-3xl font-bold ml-8'>Recent Notes</h1>
        <div className='flex flex-wrap  items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {


            return <div key={idx} className=' flex text-sm flex-col justify-between relative h-52 w-42  text-black rounded-3xl py-10 px-4 font-bold leading-tight bg-[url(https://inkpx.com/media/template/preview/note-pages/7e542066-b184-413b-b764-551612aa47c6.png)] bg-cover'>
              <div>
                <h3 >{elem.title}</h3>
                <h4 className='text-gray-500'>{elem.details}</h4>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className=' w-full bg-red-700 font-extrabold rounded cursor-pointer active:scale-95 text-xs'>Delete note

              </button>


            </div>


          })}



        </div>
      </div>

    </div>
  )
}

export default App
