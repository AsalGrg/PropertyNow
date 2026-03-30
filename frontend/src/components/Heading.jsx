import React from 'react'

const Heading = ({primaryText, secondaryText, para}) => {
    return (
        <div className='w-[min(740px,100%)] space-y-4 mx-auto'>
            <h2 className='big-heading text-black font-playfair text-center'>
                <span className='font-voyage text-primary'>{primaryText}</span> {secondaryText}
            </h2>
            <p className='para text-end text-black/80'>{para}</p>
        </div>

    )
}

export default Heading