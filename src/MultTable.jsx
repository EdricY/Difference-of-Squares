import { useRef, useState } from "react";
import { useOnScreenOnce } from "./useOnScreen";

const a13 = new Array(13).fill(0).map((x, i) => i);

function isLeftEdge(x, y) {
  return x == 0;
}
function isTopEdge(x, y) {
  return y == 0;
}
function isPerfectSq(x, y) {
  return x == y;
}

let start = 2000;
let inc = 500;
const timings = {
  "1×1": start + inc * 1,
  "2×2": start + inc * 2,
  "3×3": start + inc * 3,
  "4×4": start + inc * 4,
  "5×5": start + inc * 5,
  "6×6": start + inc * 6,
  "7×7": start + inc * 7,
  "8×8": start + inc * 8,
  "9×9": start + inc * 9,
  "10×10": start + inc * 10,
  "11×11": start + inc * 11,
  "12×12": start + inc * 12,

  "4×6": start + inc * 15,
  "6×4": start + inc * 15,
  "3×7": start + inc * 17,
  "7×3": start + inc * 17,
  "2×8": start + inc * 19,
  "8×2": start + inc * 19,
  "1×9": start + inc * 21,
  "9×1": start + inc * 21,

  "3×1": start + inc * 32,
  "1×3": start + inc * 32,
  "4×2": start + inc * 33,
  "2×4": start + inc * 33,
  "5×3": start + inc * 34,
  "3×5": start + inc * 34,
  // "6×4": start + inc * 35,
  // "4×6": start + inc * 35,
  "7×5": start + inc * 36,
  "5×7": start + inc * 36,
  "8×6": start + inc * 37,
  "6×8": start + inc * 37,
  "9×7": start + inc * 38,
  "7×9": start + inc * 38,
  "10×8": start + inc * 39,
  "8×10": start + inc * 39,
  "11×9": start + inc * 40,
  "9×11": start + inc * 40,
  "12×10": start + inc * 41,
  "10×12": start + inc * 41,
}

export default function MultTable() {
  const ref = useRef();
  const onScreen = useOnScreenOnce(ref);
  const [hoveredId, setHoveredId] = useState(null)
  const [referenceId, setReferenceId] = useState(null)
  const [subtractId, setSubtractId] = useState(null)
  return (
    <div className="my-20 min-h-175" ref={ref}>
      <div className="text-3xl my-10">Times Tables</div>

      {onScreen && <div className="mult-grid appear" onMouseLeave={() => {
        setHoveredId(null)
        setReferenceId(null)
        setSubtractId(null)
      }}>
        {a13.map((y) =>
          a13.map((x) => {
            if (isLeftEdge(x, y) && isTopEdge(x, y)) return <div
              key={x + "×" + y}>×</div>
            if (isTopEdge(x, y)) return <div
              key={x + "×" + y}
              className="border-b"
            >
              {x}
            </div>
            if (isLeftEdge(x, y)) return <div
              key={x + "×" + y}
              className="border-r flex items-center justify-center"
            >
              {y}
            </div>
            else return <div
              key={x + "×" + y}
              onMouseEnter={() => {
                if ((x + y) % 2 == 1) {
                  // setHoveredId(null)
                  // setReferenceId(null)
                  // setSubtractId(null)
                  return;
                } else {
                  const avg = (x + y) / 2
                  setHoveredId(x + "×" + y)
                  setReferenceId(avg + "×" + avg)
                  setSubtractId(Math.abs(avg - y) + "×" + Math.abs(avg - y))
                }
              }}
              className={
                "border-b border-r aspect-square flex items-center justify-center transition cursor-default "
                + (hoveredId == (x + "×" + y) ? " bg-red-100" : "")
                + (referenceId == (x + "×" + y) ? " bg-blue-100" : "")
                + (subtractId == (x + "×" + y) ? " bg-emerald-100" : "")
              }
            >
              {
                ((x + y) % 2 == 0) &&
                <span className="appear" style={{
                  animationDelay: timings[x + "×" + y] ? timings[x + "×" + y] + "ms" : "50s"
                }}>{x * y}</span>
              }
            </div>
          })
        )}
      </div>}
      <div className="min-h-12 text-3xl mx-20 my-4">
        {hoveredId && <>
          {hoveredId}
          {' '}={' '}
          {referenceId.split("×")[0]}²
          {' '}−{' '}
          {subtractId.split("×")[0]}²
        </>}

      </div>

    </div >
  );
}
