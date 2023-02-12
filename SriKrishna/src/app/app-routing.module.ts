import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DisplayComponent } from './display/display.component';
import { ExpansionTableComponent } from './expansion-table/expansion-table.component';
import { HEComponent } from './he/he.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'home', component: RegisterComponent },
  { path: 'dashBoard', component: DashBoardComponent },
  { path: 'expandTable', component: ExpansionTableComponent },
  { path: 'higherEdu', component: HEComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
