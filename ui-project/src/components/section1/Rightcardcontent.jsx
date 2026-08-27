
const Rightcardcontent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-ful p-6 flex flex-col justify-between '>
            <h2 className='bg-white text-xl font-bold rounded-full h-8 w-8 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-lg text-shadow-3xs leading-relaxed text-white mb-10'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur natus, cum delectus inventore ducimus dolore. </p>
                <div>
                    <button style={{backgroundColor:props.color}} className=' px-6 py-2 rounded-full text-white text-lg'>{props.tag}</button>

                </div>
            </div>
        </div>
    )
}

export default Rightcardcontent