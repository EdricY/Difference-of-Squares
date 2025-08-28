import { useState } from "react";

const a7 = new Array(7).fill(0).map((x, i) => i)

export default function DefSlide() {
  // const x = 6; // 6 7 8 or 9
  const [x, setX] = useState(7);

  const h = 10 - x;
  const w = x - 5;

  const [atStart, setAtStart] = useState(false);

  // the grid is flipped over the y axis- very strange behavior for now.
  return <>
    <div className="relative my-20">

      <div className="text-center text-4xl my-4">Formal Definition</div>
      <div
        onClick={() => setAtStart(!atStart)}
        className={'grid grid-cols-7 w-full m-auto border-l-4 border-t-4 border-b relative -scale-y-100 box-content'}
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
          <div className="-scale-y-100 text-4xl">b²</div>
        </div>

        {/* top square */}
        <div
          className={"absolute z-1 size-full mb-2 text-center"}
          style={{
            gridColumn: `1 / 6`,
            gridRow: `6 / 7`,
            opacity: atStart ? 0 : 1,
            transition: atStart ? 'opacity 0.4s' : 'opacity 0.4s 1.2s'
          }}
        >
          <div className="border-b rounded-[50%] inset-x-0 absolute h-4">
          </div>
          <div className="-scale-y-100 text-4xl pb-6">a</div>
        </div>

        {/* side square */}
        <div
          className={"absolute z-1 size-full text-center flex flex-col justify-center"}
          style={{
            gridRow: `1 / 6`,
            gridColumn: `6 / 7`,
            opacity: atStart ? 0 : 1,
            transition: atStart ? 'opacity 0.4s' : 'opacity 0.4s 1.2s'
          }}
        >
          <div className="border-r rounded-[50%] inset-y-0 absolute w-4">
          </div>
          <div className="-scale-y-100 text-4xl pb-6">a</div>
        </div>


        {/* top rectangle */}
        <div
          className={"absolute z-1 size-full mb-2 text-center"}
          style={{
            gridColumn: `1 / 6`,
            gridRow: `4 / 5`,
            opacity: !atStart ? 0 : 1,
            transition: !atStart ? 'opacity 0.4s' : 'opacity 0.4s .8s'
          }}
        >
          <div className="border-b rounded-[50%] inset-x-0 absolute h-4">
          </div>
          <div className="-scale-y-100 text-4xl pb-6">a</div>
        </div>
        <div
          className={"absolute z-1 size-full mb-2 text-center"}
          style={{
            gridColumn: `6 / 8`,
            gridRow: `4 / 5`,
            opacity: !atStart ? 0 : 1,
            transition: !atStart ? 'opacity 0.4s' : 'opacity 0.4s .8s'
          }}
        >
          <div className="border-b rounded-[50%] inset-x-0 absolute h-4">
          </div>
          <div className="-scale-y-100 text-4xl pb-6">b</div>
        </div>


        {/* side rectangle */}
        <div
          className={"absolute z-1 size-full text-center flex flex-col justify-center"}
          style={{
            gridRow: `1 / 4`,
            gridColumn: `8 / 9`,
            opacity: !atStart ? 0 : 1,
            transition: !atStart ? 'opacity 0.4s' : 'opacity 0.4s .8s'
          }}
        >
          <div className="border-r rounded-[50%] inset-y-0 absolute w-4">
          </div>
          <div className="-scale-y-100 text-4xl pb-6 w-30">a − b</div>
        </div>

        {a7.map(y =>
          a7.map(x =>
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
            translate: atStart ? "" : `calc(-85.7px * 5)`,
            transition: atStart ? 'rotate 0.4s 0.4s, translate 0.4s 0s, background-color 0.4s' : 'rotate 0.4s 0.4s, translate 0.4s 0.8s, background-color 0.4s'
          }}
        ></div>

      </div>
      <div className="text-4xl my-4 text-center">
        a² − b² = (a + b) (a − b)
      </div>
    </div>

  </>
}
