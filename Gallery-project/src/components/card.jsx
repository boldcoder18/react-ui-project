import React from 'react'

const Card = (props) => {
    const item = props.elem.data[0]

    const nasaUrl = `https://images.nasa.gov/details/${item.nasa_id}`

    return (
        <div className="w-44 h-auto flex flex-col justify-between p-1">
            <a href={nasaUrl} target='_blank'>
                <div className='h-full w-44 overflow-hidden rounded-2xl border-2 border-gray-400'>
                    <img
                        className='h-full w-full object-cover' src={props.elem.links[0].href} alt="" />
                </div>
                <h2 className='font-semibold line-clamp-2 uppercase text-xs '>{props.elem.data[0].title}</h2>
            </a >
        </div>
    )
}

export default Card
