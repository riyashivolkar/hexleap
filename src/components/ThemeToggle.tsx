
import React, { useState, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

const ThemeToggle: React.FC = () => {
    const [DarkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme == 'dark') setDarkMode(true)
    }, [])

    useEffect(() => {
        if (DarkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }

    }, [DarkMode])


    return (
        <div
            className='relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1'
            onClick={() => setDarkMode(!DarkMode)}
        >
            <FaMoon className='text-white' size={18} />
            <div className='absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-600'
                style={DarkMode ? { left: '2px' } : { right: '2px' }}
            ></div>
            <BsSunFill className='ml-auto text-yellow-400' size={18} />
        </div >
    );
};

export default ThemeToggle;
