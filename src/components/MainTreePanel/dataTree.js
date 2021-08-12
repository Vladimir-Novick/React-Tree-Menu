export const data = {
    '/root': {
      path: '/root',
      type: 'group',
      isRoot: true,
      children: ['/root/vlad', '/root/jslancer'],
    },
    '/root/vlad': {
      path: '/root/vlad',
      type: 'group',
      children: ['/root/vlad/readme'],
    },
    '/root/vlad/readme': {
      path: '/root/vlad/readme',
      type: 'item',
      content: 'Thanks for reading me me.'
    },
    '/root/jslancer': {
      path: '/root/jslancer',
      type: 'group',
      children: ['/root/jslancer/projects', '/root/jslancer/vblogs'],
    },
    '/root/jslancer/projects': {
      path: '/root/jslancer/projects',
      type: 'group',
      children: ['/root/jslancer/projects/treeview'],
    },
    '/root/jslancer/projects/treeview': {
      path: '/root/jslancer/projects/treeview',
      type: 'group',
      children: [],
    },
    '/root/jslancer/vblogs': {
      path: '/root/jslancer/vblogs',
      type: 'group',
      children: [],
    },
  };
