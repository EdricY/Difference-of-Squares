import { useEffect, useRef, useState } from 'react'
import useOnScreen, { useOnScreenOnce } from './useOnScreen';

const a10 = new Array(10).fill(0).map((x, i) => i)
const empty = new Image();

export default function Plot() {
  const [xVal, setXVal] = useState(1);
  const yVal = 10 - xVal;
  const ref = useRef();
  const onScreen = useOnScreenOnce(ref);
  const [visited, setVisited] = useState([]);
  useEffect(() => {
    if (!visited.includes(xVal)) {
      setVisited([...visited, xVal]);
    }
  }, [xVal])

  function isSideBorder(x, y) {
    if (x == xVal && y >= xVal) return true;
  }

  function isTopBorder(x, y) {
    if (y == xVal - 1 && x < xVal) return true;
  }

  function isInside(x, y) {
    if (y > xVal - 1 && x < xVal) return true;
  }

  return (
    <div
      ref={ref}
      className={
        'w-full transition duration-200 my-10 '
        + (onScreen ? "opacity-100" : "opacity-0")
      }
    >
      <div
        className={
          'box-content grid grid-10 w-full m-auto border-l-4 border-b-4 relative '
          + 'transition duration-2000 origin-bottom-left '
          + (onScreen ? "opacity-100 scale-100" : "opacity-0 scale-0 ")

        }
        onDragOver={function (e) {
          e.preventDefault();

          const left = e.currentTarget.offsetLeft;
          const width = e.currentTarget.offsetWidth;
          const frac = (e.pageX - left) / width;
          setXVal(Math.min(10, Math.max(0, Math.round(frac * 10))));
          return true;
        }}
      >
        {a10.map(y =>
          a10.map(x =>
            <div
              key={x + "," + y}
              className={
                'aspect-square relative pointer-events-none '
                + (isSideBorder(x, y) ? "fence-l " : "")
                + (isTopBorder(x, y) ? "fence-b " : "")
                + (isInside(x, y) ? "bg-red-200 border-b border-l " : "")
                + (onScreen ? "opacity-100 transition-opacity duration-800 delay-1600" : "opacity-0")
              }>
            </div>
          )
        )}
        <InfoSquare
          xVal={xVal}
          className={
            (onScreen ? "opacity-100 transition-opacity duration-800 delay-1600" : "opacity-0")
          }
        />
        <div className={'relative grid grid-cols-subgrid col-span-full inset-0 text-3xl ' +
          (onScreen ? "opacity-100 transition-opacity duration-800 delay-1600" : "opacity-0")
        }>
          {visited.includes(1) && <div className='mt-8 ml-8 absolute w-full text-center col-span-1 col-start-1 appear'>9</div>}
          {visited.includes(2) && <div className='mt-8 ml-8 absolute w-full text-center col-span-1 col-start-2 appear'>16</div>}
          {visited.includes(3) && <div className='mt-8 ml-8 absolute w-full text-center col-span-1 col-start-3 appear'>21</div>}
          {visited.includes(4) && <div className='mt-8 ml-8 absolute w-full text-center col-span-1 col-start-4 appear'>24</div>}
          {visited.includes(5) && <div className='mt-8 ml-8 absolute w-full text-center col-span-1 col-start-5 appear'>25</div>}
          {visited.includes(6) && <div className='mt-8 ml-8 absolute w-full text-center col-span-1 col-start-6 appear'>24</div>}
          {visited.includes(7) && <div className='mt-8 ml-8 absolute w-full text-center col-span-1 col-start-7 appear'>21</div>}
          {visited.includes(8) && <div className='mt-8 ml-8 absolute w-full text-center col-span-1 col-start-8 appear'>16</div>}
          {visited.includes(9) && <div className='mt-8 ml-8 absolute w-full text-center col-span-1 col-start-9 appear'>9</div>}
        </div>
      </div>
      <input
        className={
          "range-size  "
          + (onScreen ? "opacity-100 transition-opacity duration-800 delay-1600" : "opacity-0")
        }

        list="plot-range" type="range"
        min="0" max="10" step="1"
        value={xVal} onChange={e => setXVal(Number(e.target.value))}
      />
      <datalist id="plot-range">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </datalist>
    </div>
  );
}

function InfoSquare({ xVal, className = "" }) {
  const yVal = 10 - xVal;

  const xPos = xVal;
  const yPos = xVal + 1;

  return <>
    <div
      className={'absolute text-left ' + className}
      style={{ gridColumn: xPos, gridRow: yPos }}
    >
      <div
        className={
          'cursor-grab absolute rounded-full size-3 bg-[#ffa500] '
          + (xVal == 0 ? ' left-[-2px]' : ' top-[-9px] left-[56px]')

        }
        draggable
        onDragStart={e => {
          e.dataTransfer.setDragImage(empty, 0, 0);
          e.dataTransfer.dropEffect = "none"
        }}
      ></div>
      {(xVal == 0 || yVal == 0) ||
        <div className={'pl-4 ml-16 whitespace-nowrap text-4xl ' + (xVal >= 9 ? "-mt-10" : "")}>
          {xVal} × {yVal}
          <br />
          Area = {xVal * yVal}
        </div>
      }
    </div>
  </>
}

