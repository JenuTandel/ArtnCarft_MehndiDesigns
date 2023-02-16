import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MehndiDesignsComponent } from './mehndi-designs.component';

const routes: Routes = [{ path: '', component: MehndiDesignsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MehndiDesignsRoutingModule { }
