import React from 'react';
import { useState, useEffect } from 'react';
import './Login.scss'
import './index.css'

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
   
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch(`https://localhost:7013/Api/Login?mail=${email}&password=${password}`, {
                method: 'POST',
                mode: 'cors',
                headers:{
                    "content-type": "text/plain; charset=utf-8",
                    "date": "Wed,27 Dec 2023 12:28:03 GMT",
                    "server": "Kestrel"
                }
            });
    
            if (response.ok) {
                const users = await response.json();
    
                const matchedUser = users.find((user) => user.mail === email && user.password === password);
    
                if (matchedUser) {
                    console.log('Login successful:', matchedUser);
    
                } else {
                    console.error('Login failed: Invalid email or password');
    
                }
            } else {
                console.error('Login failed: Unable to fetch users');
    
            }
        } catch (error) {
            console.error('Error during login:', error);
    
        }
    };
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        if (darkMode) {
        document.body.classList.add('dark');
        document.body.classList.add('DarkModeText')
        } else {
        document.body.classList.remove('dark');
        document.body.classList.add('DarkModeText')
        }
    }, [darkMode]);
    return(
        <>
           <div className={`flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ${darkMode ? 'dark-mode' : ''}`}>
                <div>
                <button
                    type="button"
                    onClick={toggleDarkMode}
                    className="flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto"
                    src="https://media.discordapp.net/attachments/1153684347686232106/1189191505190060062/smakeAjns-removebg-preview.png?ex=659d43e4&is=658acee4&hm=f4686bffc56d8d0c76cd60e77214e285d71ff14c01ccf176f5109a595258f792&=&format=webp&quality=lossless&width=473&height=473"
                    
                    
                />

                </div>

                <div className={`mt-10 sm:mx-auto sm:w-full sm:max-w-sm ${darkMode ? 'dark' : ''}${darkMode ? 'DarkModeText' : ''}`}>
                <form className="space-y-6" method="POST" onSubmit={handleLogin}>
                    <div>
                    <label htmlFor="email" className={`block text-sm font-medium leading-6 text-gray-900 ${darkMode ? 'DarkModeText' : ''}`}>
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className={`block text-sm font-medium leading-6 text-gray-900 ${darkMode ? 'DarkModeText' : ''}`}>
                        Password
                        </label>
                        <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Register
                    </a>
                </p>
                </div>
            </div>
        </>
    );
}

export default Login;