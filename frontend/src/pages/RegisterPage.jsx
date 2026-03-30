import React, { useState } from 'react'
import Button from '../components/Button'
import { NavLink, useNavigate } from 'react-router'
import registerUser from '../services/registerUser'
import { toast, ToastContainer } from 'react-toastify'
const RegisterPage = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [isLoading, setisLoading] = useState(false)

    const navigate = useNavigate()
    async function submitRegisterUser(e) {
        e.preventDefault();
        setisLoading(true);

        const requestData = {
            name,
            email,
            password
        };
        try {
            const response = await registerUser(requestData);
            toast.success(response.data.message);
            console.log(response.data)
            emptyInputFields();
            await delay(1200)
            navigate('/login');
        } catch (err) {
            console.log(err.response.data.message)
            toast.error(err.response.data.message);
            emptyInputFields();
        } finally {
            setisLoading(false);
        }
    }

    function emptyInputFields() {
        setName('')
        setEmail('')
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
                                    Register
                                    <span className='font-voyage text-primary'> Here.</span>
                                </h1>
                                <p className='para text-end text-black/70'>Please enter your details to register.</p>
                            </div>

                            {/* form content */}
                            <div className=' w-[min(480px,100%)] rounded-lg mx-auto h-fit border-2 border-[#727070] p-4 flex flex-col gap-small'>
                                <form className='space-y-3'
                                    onSubmit={submitRegisterUser}
                                >
                                    <div className='w-full'>
                                        <label htmlFor='name' className='para font-medium'>Username</label>
                                        <input type='text' id='name' className=''
                                            value={name}
                                            disabled={isLoading}
                                            onChange={(e) => setName(e.target.value)}
                                        ></input>
                                    </div>

                                    <div className='w-full'>
                                        <label htmlFor='password' className='para font-medium'>Email</label>
                                        <input type='email' id='password' className=''
                                            value={email}
                                            disabled={isLoading}
                                            required
                                            onChange={e => setEmail(e.target.value)}
                                        ></input>
                                    </div>

                                    <div className='w-full'>
                                        <label htmlFor='password' className='para font-medium'>Password</label>
                                        <input type='text' id='password' className=''
                                            required
                                            disabled={isLoading}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        ></input>
                                    </div>

                                    <div className='w-full flex flex-col items-center space-y-6'>
                                        <Button text={'Sign up'} type='submit'
                                            isLoading={isLoading}
                                        />
                                        <p className='para text-black/70'>
                                            Already have an account?
                                            <NavLink to={'/login'}>
                                                <span className='text-primary underline'>Login here</span>
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

export default RegisterPage