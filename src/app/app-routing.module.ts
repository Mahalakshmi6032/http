import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';
import { HiComponent } from './hi/hi.component';
const routes: Routes = [
  {path:"post",component:PostComponent},
  {path:"get",component:GetComponent},
  {path:"hi",component:HiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
