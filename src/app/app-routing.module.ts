import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./my-order/my-order.module').then((m) => m.MyOrderModule),
  },
  {
    path: 'my-order',
    loadChildren: () =>
      import('./my-order/my-order.module').then((m) => m.MyOrderModule),
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./wishlist/wishlist.module').then((m) => m.WishlistModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'art-n-craft',
    loadChildren: () =>
      import('./art-n-craft/art-n-craft.module').then((m) => m.ArtNCraftModule),
  },
  {
    path: 'mehndi-design',
    loadChildren: () =>
      import('./mehndi-designs/mehndi-designs.module').then(
        (m) => m.MehndiDesignsModule
      ),
  },
  {
    path: 'mehndi-designs',
    loadChildren: () =>
      import('./mehndi-designs/mehndi-designs.module').then(
        (m) => m.MehndiDesignsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
