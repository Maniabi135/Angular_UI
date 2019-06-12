import { Component, OnInit } from '@angular/core';
import { navTopMenu, navBottomMenu } from './side-menu';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  topMenuItems: any[];
  bottomMenuItems: any[];

  constructor() { }

  ngOnInit() {
    this.topMenuItems = navTopMenu.filter(menuItem => menuItem);
    this.bottomMenuItems = navBottomMenu.filter(menuItem => menuItem);
  }

  
}
