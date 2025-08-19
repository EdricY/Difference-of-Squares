import { useState } from "react";

const a10 = new Array(10).fill(0).map((x, i) => i)

export default function RectToSquare() {
  // const x = 6; // 6 7 8 or 9
  const [x, setX] = useState(6);

  const h = 10 - x;
  const w = x - 5;

  const [atStart, setAtStart] = useState(true);

  // the grid is flipped over the y axis- very strange behavior for now.
  return <>
    <div className="relative">
      <div className="text-center">Click to animate!</div>
      <div
        onClick={() => setAtStart(!atStart)}
        className={'grid grid-10 w-full m-auto border-l-4 border-t-4 border-b relative -scale-y-100 box-content'}
      >
        <div className="absolute z-1 col-[1/6] row-[1/6] size-full border-b-5 border-r-5 border-black"
          style={{
            opacity: atStart ? 0 : 1,
            transition: atStart ? 'opacity 0.4s' : 'opacity 0.4s'

          }}>
        </div>
        <div
          className="absolute z-1 size-full bg-blue-200/80 border-5 border-black flex items-center justify-center"
          style={{
            gridColumn: `${h + 1} / span ${5 - h}`,
            gridRow: `${h + 1} /span ${5 - h}`,
            opacity: atStart ? 0 : 1,
            transition: atStart ? 'opacity 0.4s' : 'opacity 0.4s 1.2s'
          }}
        >
          <div className="-scale-y-100 text-4xl">{5-h}²</div>

        </div>
        {a10.map(y =>
          a10.map(x =>
            <div
              key={x + "," + y}
              className={
                'aspect-square relative pointer-events-none border-t border-r'
              }>
            </div>
          )
        )}
        <div
          className='absolute text-left bg-red-200 w-full h-full z-[-1]'
          style={{
            gridColumn: `1 / span 5`,
            gridRow: `1 / span ${h}`
          }}
        ></div>
        <div
          className={'absolute text-left w-full h-full z-[-1] ' + (atStart ? 'bg-red-200' : 'bg-red-300')}
          style={{
            gridColumn: `6 / span ${x - 5}`,
            gridRow: `1 / span ${h}`,
            transformOrigin: "0 100%",
            rotate: atStart ? "" : '90deg',
            translate: atStart ? "" : `calc(-60px * 5)`,
            transition: atStart ? 'rotate 0.4s 0.4s, translate 0.4s 0s, background-color 0.4s' : 'rotate 0.4s 0.4s, translate 0.4s 0.8s, background-color 0.4s'
          }}
        ></div>

      </div>
      <input list="rect-range" className="w-full" type="range" min="6" max="9" step="1" value={x} onChange={e => setX(Number(e.target.value))} />
      <datalist id="rect-range">
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
      </datalist>
      {/* <div className="text-4xl absolute top-60 left-30 ">
        {x} x {10 - x}
        <span class={"transition " + (atStart ? "opacity-0" : "")}> = 5² - {5-h}²</span>
      </div> */}
    </div>

  </>
}
