import React from 'react'

function Background() {
  return (
    <>
        <div className="fixed z-[2] w-full h-screen"></div>

        <div className="w-full py-10 flex absolute top-[5%] justify-center text-zinc-600 text-semibold">Documents.</div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[11vw] font-semibold text-zinc-00 leading-none tracking-tighter">Docs.</h1>
    </>
  )
}

export default Background