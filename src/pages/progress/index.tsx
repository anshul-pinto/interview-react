import React, { useEffect, useRef, useState } from 'react'
import { ProgressBar } from './progress-bar'

export const ProgressPage = () => {
  const TIME = 5
  const [progress, setProgress] = useState(0)

  const resetProgress = () => window.location.reload()
  const startProgress = () => setProgress(100)

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ProgressBar progress={progress} totalTime={TIME} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <button onClick={resetProgress}>Reset</button>
        <button onClick={startProgress}>Start</button>
      </div>
    </div>
  )
}
