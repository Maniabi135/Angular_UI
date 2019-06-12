import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children:[
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

export const AccountRouterComponent = [AccountComponent, DashboardComponent]
