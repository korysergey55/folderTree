const { v4: uuidv4 } = require('uuid');
const treeData = [
  {
    key: '1',
    label: 'Documents',
    children: [
      {
        key: '1-1',
        label: 'Document 1-1',
        children: [
          {
            key: '0-1',
            label: 'Document-0-1.doc',
          },
          {
            key: '0-2',
            label: 'Document-0-2.doc',
          },
          {
            key: '0-3',
            label: 'Document-0-3.doc',
          },
          {
            key: '0-4',
            label: 'Document-0-4.doc',
          },
        ],
      },
    ],
  },
  {
    key: '2',
    label: 'Desktop',
    children: [
      {
        key: '2-1',
        label: 'document1.doc',
      },
      {
        key: '2-2',
        label: 'documennt-2.doc',
        children: [
          {
            key: '2-3',
            label: 'Document-0-1.doc',
          },
          {
            key: '2-4',
            label: 'Document-0-2.doc',
          },
          {
            key: '2-5',
            label: 'Document-0-3.doc',
          },
          {
            key: '2-6',
            label: 'Document-0-4.doc',
            children: [
              {
                key: '2-6-1',
                label: 'Document-0-1.doc',
              },
              {
                key: '2-6-2',
                label: 'Document-0-2.doc',
              },
              {
                key: '2-6-3',
                label: 'Document-0-3.doc',
              },
              {
                key: '2-6-4',
                label: 'Document-0-4.doc',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: '3',
    label: 'Downloads',
  },
]

export default treeData
