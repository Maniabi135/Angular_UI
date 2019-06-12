import { MenuRoutes } from '../../common/inerface/menu-routes';

export const navTopMenu: MenuRoutes[] = [
  { path: '/dashboard', title: 'Dashboard', image: '../../../assets/side_menu/home.svg' },
  { path: '/advanceSearch', title: 'Advance Search', image: '../../../assets/side_menu/shuffle.svg'},
  { path: '/myLeads', title: 'My Leads', image: '../../../assets/side_menu/receiver.svg'}
]

export const navBottomMenu: MenuRoutes[] = [
    { path: '/notification', title: 'Notification', image: '../../../assets/side_menu/notification.svg'},
    { path: '/userProfile', title: 'User Profile', image: '../../../assets/side_menu/profile.svg'}
  ]