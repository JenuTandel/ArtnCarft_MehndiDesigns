import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtNCraftComponent } from './art-n-craft.component';

const routes: Routes = [{ path: '', component: ArtNCraftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtNCraftRoutingModule { }
