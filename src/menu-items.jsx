const menuItems = {
  items: [
    {
      id: 'navigation',
      title: ' ',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/default'
        },
        {
          id: 'employees',
          title: 'Employees',
          type: 'item',
          icon: 'feather icon-users',
          url: '/app/employees'
        },
        {
          id: 'leave-applications',
          title: 'Leave Applications',
          type: 'item',
          icon: 'feather icon-book',
          url: '/app/leave-applications'
        },
        {
          id: 'leave-form',
          title: 'Leave Form',
          type: 'item',
          icon: 'feather icon-book',
          url: '/app/leave-form'
        },
        {
          id: 'reports',
          title: 'Reports',
          type: 'item',
          icon: 'feather icon-file-text',
          url: '/app/reports' 
        },
        {
          id: 'log-out',
          title: 'Log Out',
          type: 'item',
          icon: 'feather icon-power',
          url: '/auth/signin-1'
        },
      ]
    },
    
  ],
};

export default menuItems;
