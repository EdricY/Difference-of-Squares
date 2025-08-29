import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import Plot from './Plot'
import RectToSquare from './RectToSquare'
import MultTable from './MultTable'
import DifferenceCalc from './DifferenceCalc'
import DefSlide from './DefSlide'

function App() {

  return (
    <>
      <div className='slide text-xl py-10'>
        <h1 className='text-6xl text-center'>Difference of Squares</h1>
      </div>
      <div className='slide text-4xl py-10'>
        Let's begin with a story problem.
        <div className='my-10'></div>
        <p>
          A farmer has 10 units of fence
          to build an enclosure on the corner of his property.
        </p>
        <div className='flex items-center text-5xl my-10'>
          10 × <div className='rotate-45 translate-1/3 fence-l relative aspect-square size-15'></div>
        </div>
        <p>What kind of rectangular enclosures can he make?<br />What are their areas?</p>

      </div>
      <div className='slide'>
        <Plot />
      </div>

      <div className='slide text-3xl'>
        What is the difference between the largest enclosure and the others?
        <DifferenceCalc />

      </div>

      <div className='slide'>
        <RectToSquare />
      </div>

      <div className='slide'>
        <MultTable />
      </div>

      <div className='slide'>
        <DefSlide />
      </div>

      <div className='slide text-4xl'>
        <div className='grid grid-cols-2 gap-50'>
          <div>31 × 29</div>
          <div>47 × 53</div>
          <div>15 × 25</div>
          <div>18 × 22</div>
        </div>
      </div>

      <div className='slide text-4xl'>
        <div className='grid grid-cols-2 gap-50'>
          <div>17²</div>
          <div>19²</div>
          <div>23²</div>
          <div>28²</div>
        </div>
      </div>


      <div className='slide text-4xl'>
        <div>
          How much bigger is a 16' pizza than a 14' pizza?
        </div>
        <div className='flex gap-2 items-center'>

          <div className='my-20 size-72 rounded-full border-4 border-black'></div>
          <div className='size-63 rounded-full border-4 border-black'></div>
        </div>

      </div>

      <div className='slide text-4xl'>
        Pythagorean Theorem
        <div className='my-12'>
          a² + b² = c²
        </div>

        <div className='relative'>
          <svg viewBox="-2 -1 23 15" strokeWidth="0.5" width="400" stroke-linejoin="miter" stroke-miterlimit="10">
            <path d="M 0,0 L 0,10 L 20,10Z M 0,8.5 L 1.5,8.5 L 1.5,10" stroke='black' fill="none" />
          </svg>
          <div className='absolute left-0 top-1/3'>x</div>
          <div className='absolute right-2/3 bottom-4'>14</div>
          <div className='absolute right-3/5 top-1/5'>15</div>
        </div>

        <div className='relative self-end mt-10'>
          <svg viewBox="-2 -1 23 20" strokeWidth="0.5" width="400" stroke-linejoin="miter" stroke-miterlimit="10">
            <path d="M 0,0 L 0,14 L 20,14Z M 0,12 L 2,12 L 2,14" stroke='black' fill="none" />
          </svg>
          <div className='absolute left-0 top-1/3'>x</div>  
          <div className='absolute left-2/5 bottom-10'>20</div>
          <div className='absolute left-3/6 top-1/5'>24</div>
        </div>

      </div>

      <div className='slide text-4xl pb-60'>
        Pythagorean Triples
      </div>


      <div className='slide text-5xl pb-50'>
        <math>
          <mfrac>
            <mrow>
              <msup>
                <mi>x</mi>
                <mn>2</mn>
              </msup>
              <mo>−</mo>
              <mn>9</mn>
            </mrow>
            <mrow>
              <mi>x</mi>
              <mo>+</mo>
              <mn>3</mn>
            </mrow>
          </mfrac>
          <mo>=</mo>
          <mn>4</mn>
        </math>
      </div>

      <div className='slide text-5xl pb-50'>
        <math>
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <mn>6</mn>
          <mo>⁢</mo>
          <mi>x</mi>
          <mo>=</mo>
          <mn>40</mn>

        </math>

      </div>
      <div className='slide text-5xl pb-50'>
        Rationalize:
        <div className='my-8'></div>
        <math>
          <mfrac>
            <mrow><mn>1</mn></mrow>
            <mrow>
              <mn>4</mn>
              <mo>+</mo>
              <msqrt>
                <mi>5</mi>
              </msqrt>
            </mrow>
          </mfrac>
        </math>
      </div>
      <div className='slide'></div>
    </>
  );
}



export default App
