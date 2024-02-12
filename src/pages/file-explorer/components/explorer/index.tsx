import { useState } from 'react'
import { TestingExplorerData } from './tesing.data'
import React from 'react'
import { TExplorer } from './types'
import { Folder } from '../folder'

export const Explorer = () => {
  const [explorer, setExplorer] = useState(TestingExplorerData)
  return (
    <div>
      <Folder folder={explorer} />
    </div>
  )
}
