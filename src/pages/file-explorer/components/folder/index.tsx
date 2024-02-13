import { MouseEvent, useState } from 'react'
import { TExplorer } from '../explorer/types'
import React from 'react'

const FOLDER_ICON = '📁'
const FILE_ICON = '📄'

interface IFolder {
  folder: TExplorer
  addNode: (parentNode: TExplorer, name: string, isFolder: boolean) => void
}

export const Folder: React.FC<IFolder> = ({ folder, addNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [addItem, setAddItem] = useState({
    value: false,
    isFolder: true,
  })

  const handleOnClickAdd = (
    e: MouseEvent<HTMLButtonElement>,
    isFolder: boolean
  ) => {
    e.stopPropagation()
    setIsOpen(true)
    setAddItem({
      value: true,
      isFolder,
    })
  }

  if (folder.isFolder)
    return (
      <>
        <div
          className="folder-item"
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
        >
          <p>
            {FOLDER_ICON} {folder.name}
          </p>
          <div>
            <button onClick={(e) => handleOnClickAdd(e, true)}>
              {FOLDER_ICON}+
            </button>
            <button onClick={(e) => handleOnClickAdd(e, false)}>
              {FILE_ICON}+
            </button>
          </div>
        </div>
        <div
          style={{
            display: isOpen ? 'block' : 'none',
            paddingLeft: '20px',
          }}
        >
          {addItem.value && (
            <div>
              <span>{addItem.isFolder ? FOLDER_ICON : FILE_ICON}</span>
              <input
                autoFocus
                onBlur={() => {
                  setAddItem({
                    value: false,
                    isFolder: false,
                  })
                }}
                onKeyDown={(e) => {
                  const itemName = (e.target as HTMLInputElement).value
                  if (e.key === 'Enter' && itemName) {
                    // handle adding node
                    addNode(folder, itemName, addItem.isFolder)
                    setAddItem({
                      value: false,
                      isFolder: false,
                    })
                  }
                }}
              ></input>
            </div>
          )}
          {folder.files.map((item) => {
            return <Folder addNode={addNode} folder={item} />
          })}
        </div>
      </>
    )
  else
    return (
      <div className="folder-item">
        <p>
          {FILE_ICON} {folder.name}
        </p>
      </div>
    )
}
