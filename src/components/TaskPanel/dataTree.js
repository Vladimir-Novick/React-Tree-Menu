export const data = {
    '/projects': {
      path: '/projects',
      type: 'group',
      isRoot: true,
      isOpen:true,
      children: ['/projects/vlad', '/projects/TreeMenu'],
    },
    '/projects/vlad': {
      path: '/projects/vlad',
      type: 'group',
      isOpen:true,
      children: ['/projects/vlad/readme'],
    },
    '/projects/vlad/readme': {
      path: '/projects/vlad/readme',
      type: 'item',
      content: 'Thanks for reading me me.'
    },
    '/projects/TreeMenu': {
      path: '/projects/TreeMenu',
      type: 'group',
      isOpen:true,
      children: ['/projects/TreeMenu/projects', '/projects/TreeMenu/vblogs'],
    },
    '/projects/TreeMenu/projects': {
      path: '/projects/TreeMenu/projects',
      type: 'group',
      isOpen:true,
      children: ['/projects/TreeMenu/projects/treeview'],
    },
    '/projects/TreeMenu/projects/treeview': {
      path: '/projects/TreeMenu/projects/treeview',
      type: 'group',
      isOpen:false,
      children: [],
    },
    '/projects/TreeMenu/vblogs': {
      path: '/projects/TreeMenu/vblogs',
      type: 'group',
      isOpen:false,
      children: [],
    },
  };
