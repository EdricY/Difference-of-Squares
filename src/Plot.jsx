import { useRef, useState } from 'react'

const a10 = new Array(10).fill(0).map((x, i) => i)
const empty = new Image();

export default function Plot() {
  const [xVal, setXVal] = useState(2);
  const yVal = 10 - xVal;

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
    <div className='w-full'>
      {xVal} x {yVal}
      <div
        className={'box-content grid grid-10 w-full m-auto border-l-4 border-b-4 relative'}
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
              }>
            </div>
          )
        )}
        <InfoSquare xVal={xVal} />
      </div>
      <input className="range-size" list="plot-range" type="range" min="0" max="10" step="1" value={xVal} onChange={e => setXVal(Number(e.target.value))} />
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

    </div >
  );
}

function InfoSquare({ xVal }) {
  const yVal = 10 - xVal;

  const xPos = xVal;
  const yPos = xVal + 1;

  return <>
    <div
      className='absolute text-left'
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
          {xVal} x {yVal}
          <br />
          Area = {xVal * yVal}
        </div>
      }
    </div>
  </>
}

