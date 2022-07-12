import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogviewComponent } from './blogview/blogview.component';

const routes: Routes = [
  {path:'',component:BlogviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
