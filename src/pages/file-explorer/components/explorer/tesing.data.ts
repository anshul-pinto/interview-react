import { TExplorer } from './types'

export const TestingExplorerData: TExplorer = {
  id: 1,
  name: 'root',
  isFolder: true,
  files: [
    {
      id: 2,
      name: 'index.html',
      isFolder: false,
      files: [],
    },
    {
      id: 3,
      name: 'components',
      isFolder: true,
      files: [
        {
          id: 4,
          name: 'accrodian.tsx',
          isFolder: false,
        },
      ],
    },
  ],
}
