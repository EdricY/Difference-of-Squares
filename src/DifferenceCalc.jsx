import { useEffect, useRef } from "react";
import useOnScreen, { useOnScreenOnce } from "./useOnScreen";

export default function DifferenceCalc() {
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  useEffect(() => {

  },)


  return <div
    ref={ref}
    className={
      'relative grid grid-cols-18 items-center text-center h-50'
      + ' text-3xl my-10 ' +
      (onScreen ? "opacity-100 transition-opacity" : "opacity-0")
    }>
    {onScreen && <>
      <div className="col-span-2">9</div>
      <div className="col-span-2">16</div>
      <div className="col-span-2">21</div>
      <div className="col-span-2">24</div>
      <div className="col-span-2 text-4xl">25</div>
      <div className="col-span-2">24</div>
      <div className="col-span-2">21</div>
      <div className="col-span-2">16</div>
      <div className="col-span-2">9</div>

      <div className="row-2 col-[8/10] -mt-3 border-b h-6 rounded-[50%] blink" style={{ animationDelay: "1s" }}></div>
      <div className="row-2 col-[10/12] -mt-3 border-b h-6 rounded-[50%] blink" style={{ animationDelay: "1s" }}></div>
      <div className="relative row-3 col-[8/10] appear" style={{ animationDelay: "2s" }}>
        <div className="disappear" style={{ animationDelay: "14s" }}>1</div>
        <div className="absolute inset-0 appear" style={{ animationDelay: "14s" }}>1²</div>
      </div>
      <div className="relative row-3 col-[10/12] appear" style={{ animationDelay: "2s" }}>
        <div className="disappear" style={{ animationDelay: "14s" }}>1</div>
        <div className="absolute inset-0 appear" style={{ animationDelay: "14s" }}>1²</div>
      </div>

      <div className="row-2 col-[6/10] -mt-3 border-b h-6 rounded-[50%] blink" style={{ animationDelay: "3s" }}></div>
      <div className="row-2 col-[10/14] -mt-3 border-b h-6 rounded-[50%] blink" style={{ animationDelay: "3s" }}></div>
      <div className="relative row-4 col-[6/10] appear" style={{ animationDelay: "4s" }}>
        <div className="disappear" style={{ animationDelay: "14s" }}>4</div>
        <div className="absolute inset-0 appear" style={{ animationDelay: "14s" }}>2²</div>
      </div>
      <div className="relative row-4 col-[10/14] appear" style={{ animationDelay: "4s" }}>
        <div className="disappear" style={{ animationDelay: "14s" }}>4</div>
        <div className="absolute inset-0 appear" style={{ animationDelay: "14s" }}>2²</div>
      </div>

      <div className="row-2 col-[4/10] -mt-3 border-b h-6 rounded-[50%] blink" style={{ animationDelay: "5s" }}></div>
      <div className="row-2 col-[10/16] -mt-3 border-b h-6 rounded-[50%] blink" style={{ animationDelay: "5s" }}></div>
      <div className="relative row-5 col-[4/10] appear" style={{ animationDelay: "6s" }}>
        <div className="disappear" style={{ animationDelay: "14s" }}>9</div>
        <div className="absolute inset-0 appear" style={{ animationDelay: "14s" }}>3²</div>
      </div>
      <div className="relative row-5 col-[10/16] appear" style={{ animationDelay: "6s" }}>
        <div className="disappear" style={{ animationDelay: "14s" }}>9</div>
        <div className="absolute inset-0 appear" style={{ animationDelay: "14s" }}>3²</div>
      </div>

      <div className="row-2 col-[2/10] -mt-3 border-b h-6 rounded-[50%] blink" style={{ animationDelay: "7s" }}></div>
      <div className="row-2 col-[10/18] -mt-3 border-b h-6 rounded-[50%] blink" style={{ animationDelay: "7s" }}></div>
      <div className="relative row-6 col-[2/10] appear" style={{ animationDelay: "8s" }}>
        <div className="disappear" style={{ animationDelay: "14s" }}>16</div>
        <div className="absolute inset-0 appear" style={{ animationDelay: "14s" }}>4²</div>
      </div>
      <div className="relative row-6 col-[10/18] appear" style={{ animationDelay: "8s" }}>
        <div className="disappear" style={{ animationDelay: "14s" }}>16</div>
        <div className="absolute inset-0 appear" style={{ animationDelay: "14s" }}>4²</div>
      </div>
    </>}
  </div>

}