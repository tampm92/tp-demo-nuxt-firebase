export default {
  url: "/admin",
  name: "Home",
  children: [{
      name: 'Dashboard',
      url: '/admin',
      icon: 'icon-speedometer'
    },
    {
      name: 'Users',
      url: '/admin/users',
      icon: 'icon-user',
      children: [{
        url: "/admin/users",
        name: "List",
      },{
        url: "/admin/users/add",
        name: "Add",
      }, {
        url: "/admin/users/:slug",
        name: "Review",
        attributes: { hidden: true },
      }]
    }
  ]
}
