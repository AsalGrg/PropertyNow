import React from 'react'
import Button from '../../components/Button'

const HeroSection = () => {
    return (
        <section>
            <div className='relative'>
                <div className='content h-[min(720px,100vh)]'>
                    <div className='h-full
                flex flex-col
                justify-center
                items-center
                space-y-12
                w-[min(720px,100%)]
                mx-auto
                '>
                        <div className='space-y-4'>
                            <h1 className='big-heading font-playfair text-center text-white'>The
                                <span className='font-voyage text-primary'> Key </span>
                                to Your Next<span className='font-voyage text-primary'> Chapter </span>
                            </h1>
                            <p className='para text-white/80 text-center'>
                                Explore the best properties in your city with ease. From cozy apartments to luxury villas, we help you discover the perfect place to call home.
                            </p>
                        </div>
                        <a href="#properties">
                            <Button text={"Explore Now"} />
                        </a>
                    </div>
                </div>

                {/* background image */}
                <div className='absolute bg-red-500 inset-0 overflow-hidden flex items-center -z-10'>
                    <img src="https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774708558/pexels-kindelmedia-7579042_k0s7mw.jpg" alt=""
                        className=' inline-block object-cover w-full h-full saturate-150 brightness-105'
                    />
                    <div className='absolute inset-0 bg-black/72'></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection