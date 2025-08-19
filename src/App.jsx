import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Plot from './Plot'
import RectToSquare from './RectToSquare'

function App() {

  return (
    <>
      <div className='text-xl my-10'>
        Let's begin with a story problem.
        <div className='my-10'></div>
        A farmer has 10 units of fence 
         to build an enclosure on the corner of his property.
         <div className='flex items-center text-3xl'>

        10 x <div className='rotate-45 translate-1/3 fence-l relative aspect-square size-15'></div>
         </div>
      </div>
      <Plot />
      <div className='mt-20'></div>
      <RectToSquare />
    </>

  );
}



export default App
