import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Plot from './Plot'
import RectToSquare from './RectToSquare'
import MultTable from './MultTable'

function App() {

  return (
    <>
      <div className='text-xl py-10 h-screen flex flex-col justify-center'>
        Let's begin with a story problem.
        <div className='my-10'></div>
        <p>
          A farmer has 10 units of fence
          to build an enclosure on the corner of his property.
        </p>
        <div className='flex items-center text-3xl my-10'>
          10 × <div className='rotate-45 translate-1/3 fence-l relative aspect-square size-15'></div>
        </div>
        <p>What kind of rectangular enclosures can he make?<br />What are their areas?</p>

      </div>
      <Plot />
      <div className='mt-20'></div>
      <RectToSquare />

      <MultTable />
    </>

  );
}



export default App
