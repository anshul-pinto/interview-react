import { TExplorer } from './types'

export const handleNodeAddition = (
  rootNode: TExplorer,
  node: TExplorer,
  name: string,
  isFolder: boolean
): TExplorer => {
  if (node.id === rootNode.id) {
    return {
      ...rootNode,
      files: [
        {
          id: new Date().getTime(),
          name,
          isFolder,
          files: [],
        },
        ...rootNode.files,
      ],
    }
  }
  const newFileArr = rootNode.files.map((filenode) => {
    return handleNodeAddition(filenode, node, name, isFolder)
  })
  return {
    ...rootNode,
    files: newFileArr,
  }
}
