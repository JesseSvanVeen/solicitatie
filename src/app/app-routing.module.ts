import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DatapageComponent } from './datapage/datapage.component';


const routes: Routes = [
  {path : '', component : HomepageComponent},
  {path : 'data', component : DatapageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
