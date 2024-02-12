import { useState } from 'react'
import { TExplorer } from '../explorer/types'
import React from 'react'

interface IFolder {
  folder: TExplorer
}

export const Folder: React.FC<IFolder> = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false)
  if (folder.isFolder)
    return (
      <>
        <div
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
        >
          📁 {folder.name}
        </div>
        <div
          style={{
            display: isOpen ? 'block' : 'none',
            paddingLeft: '8px',
          }}
        >
          {folder.files.map((item) => {
            return <Folder folder={item} />
          })}
        </div>
      </>
    )
  else return <div>📄 {folder.name}</div>
}
