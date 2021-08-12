export const data = {
    '/projects': {
      path: '/projects',
      type: 'group',
      isRoot: true,
      children: ['/projects/vlad', '/projects/jslancer'],
    },
    '/projects/vlad': {
      path: '/projects/vlad',
      type: 'group',
      children: ['/projects/vlad/readme'],
    },
    '/projects/vlad/readme': {
      path: '/projects/vlad/readme',
      type: 'item',
      content: 'Thanks for reading me me.'
    },
    '/projects/jslancer': {
      path: '/projects/jslancer',
      type: 'group',
      children: ['/projects/jslancer/projects', '/projects/jslancer/vblogs'],
    },
    '/projects/jslancer/projects': {
      path: '/projects/jslancer/projects',
      type: 'group',
      children: ['/projects/jslancer/projects/treeview'],
    },
    '/projects/jslancer/projects/treeview': {
      path: '/projects/jslancer/projects/treeview',
      type: 'group',
      children: [],
    },
    '/projects/jslancer/vblogs': {
      path: '/projects/jslancer/vblogs',
      type: 'group',
      children: [],
    },
  };
