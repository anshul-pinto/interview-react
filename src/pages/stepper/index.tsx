import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { CHECKOUT_STEPS } from './data'

export const Stepper = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [margin, setMargin] = useState({
    left: 0,
    right: 0,
  })
  const stepperRef = useRef([])
  const progessWidth = `${(activeIdx / (CHECKOUT_STEPS.length - 1)) * 100}%`

  useEffect(() => {
    const leftEl = stepperRef.current[0] as HTMLDivElement
    const rightEl = stepperRef.current[
      CHECKOUT_STEPS.length - 1
    ] as HTMLDivElement

    setMargin({
      left: leftEl.offsetWidth / 2,
      right: rightEl.offsetWidth / 2,
    })
  }, [stepperRef.current])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      Stepper
      <div className="stepper">
        {CHECKOUT_STEPS.map((step, idx) => {
          return (
            <div
              ref={(el) => (stepperRef.current[idx] = el)}
              className={`step ${activeIdx === idx ? 'active' : ''} ${idx < activeIdx ? 'complete' : ''}`}
              key={step.name}
            >
              <div className="step-number">{idx + 1}</div>
              <div className="step-name">{step.name}</div>
            </div>
          )
        })}
        <div
          style={{
            width: `calc(100% - ${margin.left + margin.right}px)`,
            marginLeft: `${margin.left}px`,
            marginRight: `${margin.right}px`,
          }}
          className="progress-bar"
        >
          <div
            style={{
              width: progessWidth,
            }}
            className="progress"
          ></div>
        </div>
      </div>
      <div
        style={{
          height: '300px',
          textAlign: 'center',
          marginTop: '80px',
        }}
      >
        {CHECKOUT_STEPS[activeIdx].Component()}
      </div>
      <button
        onClick={() => {
          if (activeIdx < CHECKOUT_STEPS.length - 1)
            setActiveIdx((prev) => prev + 1)
        }}
      >
        Next
      </button>
    </div>
  )
}
