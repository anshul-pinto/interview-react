import React from 'react'

interface IProgressBar {
  progress: number
  totalTime: number
}
export const ProgressBar: React.FC<IProgressBar> = ({
  progress,
  totalTime,
}) => {
  return (
    <div
      style={{
        width: '100%',
      }}
      className="progress-bar"
    >
      <div
        style={{
          width: `${progress}%`,
          transition: `${totalTime}s ease`,
        }}
        className="progress"
      ></div>
    </div>
  )
}
