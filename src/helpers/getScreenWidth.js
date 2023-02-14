import { useState, useEffect } from 'react';

export const GetScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth);

    const handleResize = () => {
        const screenWidth = document.documentElement.clientWidth;
        setScreenWidth(screenWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });
   return screenWidth;
}