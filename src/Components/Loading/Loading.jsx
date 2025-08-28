import React from 'react';
import logo from '../../assets/logo.png';

const Loading = () => {
    return (
        <div className="h-[100vh] w-full flex items-center justify-center bg-[#212529]">
            <div className="relative flex items-center justify-center h-[150px] w-[150px] rounded-full">

                {/* Main Circle (Logo) */}
                <div className="flex items-center justify-center shadow h-[100px] w-[100px] rounded-full bg-[#343a40] z-10">
                    <img className="h-[50px]" src={logo} alt="logo" />
                </div>

                {/* Border Circle + Dots wrapper */}
                <div
                    className="absolute h-[140px] w-[140px] rounded-full border border-gray-600"
                    style={{
                        animation: "spin 8s linear infinite"
                    }}
                >
                    {/* Dots */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#dc3545] rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#198754] rounded-full"></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#ffc107] rounded-full"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#6610f2] rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading