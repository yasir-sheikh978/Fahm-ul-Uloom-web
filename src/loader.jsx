import React from "react";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Loading() {
    useEffect(() => {
        checkUser()
    }, [])
    const navigate = useNavigate();

    const checkUser = async () => {
        const userId = await localStorage.getItem('user')
        if (userId !== null) {
            navigate("/Index");
            console.log("user found going home");
        } 
        else (
            navigate("/Login")
        )
    }
    console.log(checkUser);
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-800">
            <div className="text-center">
                {/* Sports-themed GIF */}
                <img
                    src="https://media.giphy.com/media/26xBMuFqU8fqBsAN2/giphy.gif" // Update with any high-quality sports-related GIF
                    alt="Loading..."
                    className="w-64 h-64 mx-auto rounded-full shadow-2xl animate-bounce"
                />

                {/* Animated text with gradient effect */}
                <h1 className="mt-8 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 animate-pulse">
                    Your Sports Experience Awaits
                </h1>

                {/* Subtext for a welcoming message */}
                <p className="text-gray-300 mt-4 text-lg">
                    We're gearing up for your ultimate sports journey. Hang tight!
                </p>

                {/* Stylish loading spinner animation */}
                <div className="mt-8 w-16 h-16 border-t-4 border-yellow-400 border-solid rounded-full animate-spin mx-auto"></div>
            </div>
        </div>
    );
}
