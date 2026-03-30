import React, { useState } from 'react'
import Button from '../components/Button'
import { NavLink, useNavigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'
import loginUser from '../services/loginUser'
import { useUserContext } from '../context/user.context'

const LoginPage = () => {

    const [usernameOrEmail, setUsernameOrEmail] = useState("")
    const [password, setPassword] = useState("")

    const [isLoading, setisLoading] = useState(false)

    const {setuser, seterror}= useUserContext();


    const navigate = useNavigate()
    async function submitLoginUser(e) {
        e.preventDefault();
        setisLoading(true);

        const requestData = {
            usernameOrEmail,
            password
        };
        try {
            const response = await loginUser(requestData);
            toast.success(response.data.message);
            emptyInputFields();
            console.log(response.data.user)

            // setting context
            setuser(response.data.user)
            seterror(null)

            await delay(1200);
            navigate('/');
        } catch (err) {
            toast.error(err.response.data.message);
            emptyInputFields();
        } finally {
            setisLoading(false);
        }
    }

    function emptyInputFields() {
        setUsernameOrEmail('')
        setPassword('')
    }

    async function delay(time) {
        return new Promise((resolve) => {
            setTimeout(resolve, time)
        })
    }

    return (
        <section>
            <div className=''>

                <div className='content min-h-[300px] space-y-28'>

                    {/* logo */}
                    <p className='logo para-big font-playfair'>
                        Property<span className='text-primary font-voyage'>Now</span>
                    </p>

                    {/* form */}
                    <div className='min-h-[500px] flex items-center'>

                        <div className='w-full flex flex-col gap-big h-full'>
                            {/* text */}
                            <div className='lg:w-[50%] w-full mx-auto'>
                                <h1 className='big-heading font-playfair text-center'>
                                    Welcome
                                    <span className='font-voyage text-primary'> Back</span>
                                </h1>
                                <p className='para text-end text-black/70'>Please login to enter.</p>
                            </div>

                            {/* form content */}
                            <div className=' w-[min(480px,100%)] rounded-lg mx-auto h-fit border-2 border-[#727070] p-4 flex flex-col'>
                                <form className='flex flex-col gap-small'
                                    onSubmit={submitLoginUser}
                                >
                                    <div className='space-y-3'>
                                        <div className='w-full'>
                                            <label htmlFor='name' className='para font-medium'>Username</label>
                                            <input type='text' id='name' className=''
                                                value={usernameOrEmail}
                                                onChange={(e) => setUsernameOrEmail(e.target.value)}
                                                required
                                                disabled={isLoading}
                                            ></input>
                                        </div>

                                        <div className='w-full'>
                                            <label htmlFor='password' className='para font-medium'>Password</label>
                                            <input type='text' id='password' className=''
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                disabled={isLoading}
                                            ></input>
                                        </div>
                                    </div>


                                    <div className='w-full flex flex-col items-center space-y-6'>
                                        <Button text={'Login'} type='submit'
                                            isLoading={isLoading}
                                        />
                                        <p className='para text-black/70'>
                                            Don't have an account?
                                            <NavLink to={'/register'}>
                                                <span className='text-primary underline'>Register here</span>
                                            </NavLink>
                                        </p>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <ToastContainer />
        </section>
    )
}

export default LoginPage