import React, { useEffect, useRef } from 'react'
import Button from './Button'
import { NavLink } from 'react-router'
import { useUserContext } from '../context/user.context'
import { getUserData } from '../services/getUserData'

const Navbar = () => {

    const { user, setuser, seterror} = useUserContext();

    const navbarRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbarRef.current.style.background = '#020202';
            } else {
                navbarRef.current.style.background = 'transparent';
            }
        });
    }, [])

    return (
        <nav className='fixed top-0 right-0 left-0 min-h-0 z-10
        transition-colors duration-105 ease-out
        '
            ref={navbarRef}
        >

            <div className='content flex items-center justify-between'>

                <NavLink to={'/'}>
                    <p className='logo para-big font-playfair text-white'>
                        Property<span className='text-primary font-voyage'>Now</span>
                    </p>
                </NavLink>

                {user ? (
                    <NavLink to={'/dashboard'}>
                        <div className='flex gap-4 items-center'>
                            <div className='px-4 py-3 border-2 border-accent rounded-full'>
                                <i className="fa-solid fa-user para-small text-white/70"></i>
                            </div>
                            <p className='para-small font-inter text-white font-medium'>{user.name}</p>
                        </div>
                    </NavLink>
                ) : (
                    <div className='flex gap-4 items-center'>
                        <NavLink to={'/login'}>
                            <p className='underline para-small text-white cursor-pointer'>Login</p>
                        </NavLink>
                        <NavLink to={'/register'}>
                            <Button text={"Signup"} />
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar