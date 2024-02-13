import { useState } from 'react'
import { TestingExplorerData } from './tesing.data'
import React from 'react'
import { TExplorer } from './types'
import { Folder } from '../folder'
import { handleNodeAddition } from './utils'

export const Explorer = () => {
  const [explorer, setExplorer] = useState(TestingExplorerData)

  const addNode = (parentNode: TExplorer, name: string, isFolder: boolean) => {
    const newTree = handleNodeAddition(explorer, parentNode, name, isFolder)
    setExplorer(newTree)
  }

  return (
    <div>
      <Folder addNode={addNode} folder={explorer} />
    </div>
  )
}
