'use client'

import { useState } from "react";

export default function Tests() {
    const [activePaneIndex, setActivePaneIndex] = useState(0);

    const handlePaneClick = (index) => {
      setActivePaneIndex(index);
  };

    return(
      <>
        {/*<div className="w-[90%] flex flex-col justify-center items-center h-[80vh]">   
            <div class="antialiased w-full bg-gradient-to-b flex flex-col font-sans from-black items-stretch justify-center h-screen p-2 to-gray-900 sm:flex-row sm:items-center">
            <div class="flex flex-col flex-grow items-stretch max-w-2xl min-w-md w-full sm:flex-row sm:h-72 sm:overflow-hidden">
                <div class={`active cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all ${activePaneIndex === 0 ? 'active' : ''}`} onClick={() => handlePaneClick(0)}>
                  <div class="absolute background bg-center bg-cover bg-red-500 bg-red-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                  <div class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
                  <div class="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 transition-all z-30 sm:mb-3 sm:ml-2">
                    <div class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-red-500 w-10"><i class="fas fa-walking"></i></div>
                    <div class="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                      <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Imagine</div>
                      <div class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Chase your dreams</div>
                    </div>
                  </div>
                </div>
                <div class={`undefined cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all ${activePaneIndex === 1 ? 'active' : ''}`} onClick={() => handlePaneClick(1)}>
                  <div class="absolute background bg-center bg-cover bg-yellow-500 bg-yellow-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                  <div class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
                  <div class="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 transition-all z-30 sm:mb-3 sm:ml-2">
                    <div class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-yellow-500 w-10"><i class="fas fa-apple-alt"></i></div>
                    <div class="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                      <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Build</div>
                      <div class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Realize your vision</div>
                    </div>
                  </div>
                </div>
                <div class={`undefined cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all ${activePaneIndex === 1 ? 'active' : ''}`} onClick={() => handlePaneClick(1)}>
                  <div class="absolute background bg-center bg-cover bg-green-500 bg-green-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                  <div class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
                  <div class="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 transition-all z-30 sm:mb-3 sm:ml-2">
                    <div class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-green-500 w-10"><i class="fas fa-tree"></i></div>
                    <div class="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                      <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Explore</div>
                      <div class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Discover the world</div>
                    </div>
                  </div>
                </div>
                <div class={`undefined cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all ${activePaneIndex === 1 ? 'active' : ''}`} onClick={() => handlePaneClick(1)}>
                  <div class="absolute background bg-center bg-cover bg-blue-500 bg-blue-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                  <div class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
                  <div class="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 transition-all z-30 sm:mb-3 sm:ml-2">
                    <div class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-blue-500 w-10"><i class="fas fa-tint"></i></div>
                    <div class="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                      <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Adapt</div>
                      <div class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Embrace the times</div>
                    </div>
                  </div>
                </div>
                <div class={`undefined cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all ${activePaneIndex === 1 ? 'active' : ''}`} onClick={() => handlePaneClick(1)}>
                  <div class="absolute background bg-center bg-cover bg-purple-500 bg-purple-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                  <div class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
                  <div class="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 transition-all z-30 sm:mb-3 sm:ml-2">
                    <div class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-purple-500 w-10"><i class="fas fa-palette"></i></div>
                    <div class="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                      <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Inspire</div>
                      <div class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Share your potential</div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
    </div>*/}
    <div className="w-[90%] flex flex-col justify-center items-center">
            <div className="antialiased w-full bg-gradient-to-b flex flex-col font-sans from-black items-stretch justify-center p-2 to-gray-900 sm:flex-row sm:items-center">
                <div className="flex flex-col flex-grow items-stretch w-full sm:flex-row sm:h-72 sm:overflow-hidden">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                        <div key={index}
                             className={`cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all ${activePaneIndex === index ? 'active' : ''}`}
                             onClick={() => handlePaneClick(index)}>
                            {/* Pane content goes here */}
                            <div class="absolute background bg-center bg-cover bg-purple-500 bg-purple-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                  <div class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
                  <div class="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 transition-all z-30 sm:mb-3 sm:ml-2">
                    <div class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-purple-500 w-10"><i class="fas fa-palette"></i></div>
                    <div class="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                      <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Inspire</div>
                      <div class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Share your potential</div>
                    </div>
                  </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}