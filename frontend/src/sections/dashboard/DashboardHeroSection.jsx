import React, { useEffect } from 'react'
import Button from '../../components/Button'
import { useUserContext } from '../../context/user.context'
import { NavLink, useNavigate } from 'react-router';

const DashboardHeroSection = () => {

    const { user, error } = useUserContext();
    const navigate = useNavigate()
    useEffect(() => {
        if (error?.response.status===401) {
            console.log("LOGGG")
            navigate('/login')
        }
    }, [error])

    return (
        <section>
            <div className='relative'>
                <div className='content h-[min(600px,100vh)]'>
                    <div className='h-full
                flex flex-col
                justify-center
                items-center
                space-y-12
                w-[min(720px,100%)]
                mx-auto
                '>
                        <div className='space-y-4'>

                            <div>
                                <h1 className='big-heading font-playfair text-center text-white'>
                                    <span className='font-voyage text-primary'> Welcome </span>
                                    {user && user.name}
                                </h1>

                                <div className='min-h-10 flex items-center justify-center'>
                                    <div className='para-small text-white/80 flex gap-2 items-center h-full p-3 rounded-2xl'>
                                        <i className="fa-regular fa-paper-plane"></i>
                                        <p className='font-bold underline'>{user && user.email}</p>
                                    </div>

                                    <div className='para-small text-white/80 flex gap-2 items-center h-full p-3 rounded-2xl'>
                                        <i className="fa-regular fa-circle-user"></i>                                        
                                        <p className='font-bold capitalize'>{user && user.role}</p>
                                    </div>
                                </div>
                            </div>

                            <p className='para text-white/80 text-center'>
                                To your dashboard, here you can explore your favorites properties.
                            </p>
                        </div>

                        <a href={"#favouriteProperties"}>
                            <Button text={"Explore Now"} />
                        </a>
                    </div>
                </div>

                {/* background image */}
                <div className='absolute bg-red-500 inset-0 overflow-hidden flex items-start -z-10'>
                    <img src="https://res.cloudinary.com/dxbwk0z1y/image/upload/v1774708558/pexels-thirdman-8470806_uw3ckf.jpg" alt=""
                        className=' inline-block object-cover w-full h-full saturate-150 brightness-105'
                    />
                    <div className='absolute inset-0 bg-black/72'></div>
                </div>
            </div>
        </section>
    )
}

export default DashboardHeroSection