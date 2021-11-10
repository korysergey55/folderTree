const { v4: uuidv4 } = require('uuid');
const treeData = [
  {
    key: uuidv4(),
    label: 'Documents',
    children: [
      {
        key: uuidv4(),
        label: 'Document 1-1',
        children: [
          {
            key: uuidv4(),
            label: 'Document-0-1.doc',
          },
          {
            key: uuidv4(),
            label: 'Document-0-2.doc',
          },
          {
            key: uuidv4(),
            label: 'Document-0-3.doc',
          },
          {
            key: uuidv4(),
            label: 'Document-0-4.doc',
          },
        ],
      },
    ],
  },
  {
    key: uuidv4(),
    label: 'Desktop',
    children: [
      {
        key: uuidv4(),
        label: 'document1.doc',
      },
      {
        key: uuidv4(),
        label: 'documennt-2.doc',
      },
    ],
  },
  {
    key: uuidv4(),
    label: 'Downloads',
  },
]

export default treeData
