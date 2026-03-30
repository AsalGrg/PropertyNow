import React from 'react'

const Button = ({ text, type = 'button', isLoading = false }) => {
    return (


        <button className={`py-3 px-5 ${isLoading ? 'bg-black/80' : 'bg-primary'} font-bold text-white rounded-full cursor-pointer min-w-40 `}
            type={type}
            disabled={isLoading}
        >  {isLoading ? <img src="/tube-spinner.svg" alt="loading" className='w-8 mx-auto'/> : text}
        </button>
    )
}

export default Button