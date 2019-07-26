import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

export default function useDarkMode() {

    const [dark, setDark] = useLocalStorage("Dark Mode");

    useEffect(() => {
        if(localStorage.getItem("Dark Mode") === 'true') {
            document.body.classList.add('dark-mode')
        } else (
            document.body.classList.remove('dark-mode')
        )
    }, [dark]);

    return [dark, setDark];   
}