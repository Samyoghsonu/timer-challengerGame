import React, { useImperativeHandle } from "react";
import { forwardRef } from "react";

const ResulModal = forwardRef(({ result, targetTime }, ref) => {
  useImperativeHandle(ref, () => {
    return {
      open(){
        
      }
    }
  })
  return (
    <dialog ref={ref} className="result-modal">
      <h2>Your {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the timer with <strong>x seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResulModal;
