import { useState } from 'react'


function App() {
  const [home, setHome] = useState(0)
  const [guest, setGuest] = useState(0)

  const handleClickHome = (point: number) => setHome(home + point)
  const handleClickGuest = (point: number) => setGuest(guest + point)

  return (
    <>
      <div className="relative flex min-h-screen flex-row justify-center gap-24 overflow-hidden bg-blue-950 py-6 sm:py-12">
        <div className="flex flex-col">
          <h1 className="font-verdana mx-auto font-bold tracking-widest text-white text-2xl">HOME</h1>
          <div className="font-cursedtimer text-8xl rounded bg-black px-24 py-16 text-red-500">{home}</div>
          <div className="font-cursedtimer my-7 flex justify-between">
            <button 
              className="rounded-md border border-current p-4 text-slate-400"
              onClick={() => handleClickHome(1)}
            >
                + 1
            </button>
            <button className="rounded-md border border-current p-4 text-slate-400"
              onClick={() => handleClickHome(2)}
            >
              + 2
            </button>
            <button className="rounded-md border border-current p-4 text-slate-400"
              onClick={() =>handleClickHome(3)}
            >
              + 3
            </button>
          </div>
          <button className="rounded-md border border-current p-4 text-slate-400" onClick={() => {setHome(0);}}>Reset</button>
        </div>
        <div className="flex flex-col">
          <h1 className="font-verdana mx-auto font-bold tracking-widest text-white text-2xl">GUEST</h1>
          <div className="font-cursedtimer text-8xl rounded bg-black px-24 py-16 text-red-500">{guest}</div>
          <div className="font-cursedtimer my-7 flex justify-between">
            <button className="rounded-md border border-current p-4 text-slate-400"
              onClick={() => handleClickGuest(1)}
            >
              + 1
            </button>
            <button className="rounded-md border border-current p-4 text-slate-400"
              onClick={() => handleClickGuest(2)}
            >
              + 2
            </button>
            <button className="rounded-md border border-current p-4 text-slate-400"
              onClick={() => handleClickGuest(3)}
            >
              + 3
            </button>
          </div>
          <button className="rounded-md border border-current p-4 text-slate-400" onClick={() => {setGuest(0);}}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
