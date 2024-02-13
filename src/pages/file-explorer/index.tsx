import React from 'react'
import { Explorer } from './components/explorer'
import './explorer.css'

export const FileExplorerPage = () => {
  return (
    <div>
      <p
        style={{
          marginBottom: '40px',
        }}
      >
        File Explorer Page
      </p>
      <Explorer />
    </div>
  )
}
