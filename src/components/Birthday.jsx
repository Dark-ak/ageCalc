import React from 'react'

const Birthday = ({ bday }) => {
    return (
        <div>
            <div className='flex items-center'>
                {bday[0] ? (
                    <p className='text-purple text-5xl md:text-8xl font-extrabold'>{bday[0]}</p>
                ) : (
                    <p className='text-purple text-5xl md:text-8xl font-extrabold'>--</p>
                )}
                <p className='text-5xl md:text-8xl font-extrabold italic'>years</p>
            </div>
            <div className='flex'>
                {bday[1] ? (
                    <p className='text-purple text-5xl md:text-8xl font-extrabold'>{bday[1]}</p>
                ) : (
                    <p className='text-purple text-5xl md:text-8xl font-extrabold'>--</p>
                )}
                <p className='text-5xl md:text-8xl font-extrabold italic'>months</p>
            </div>
            <div className='flex'>
                {bday[2] ? (
                    <p className='text-purple text-5xl md:text-8xl font-extrabold'>{bday[2]}</p>
                ) : (
                    <p className='text-purple text-5xl md:text-8xl font-extrabold'>--</p>
                )}
                <p className='text-5xl md:text-8xl font-extrabold italic'>day</p>
            </div>
        </div>
    )
}

export default Birthday