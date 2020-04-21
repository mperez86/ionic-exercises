import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'exercise/FruitList',
    pathMatch: 'full'
  },
  {
    path: 'exercise/SandBox',
    loadChildren: () => import('./pages/sandbox/sandbox.module').then( m => m.SandboxPageModule)
  },
  {
    path: 'exercise/FruitList',
    loadChildren: () => import('./pages/fruit-list/fruit-list.module').then( m => m.FruitListPageModule)
  },
  {
    path: 'exercise/FruitList/:fruit-id',
    loadChildren: () => import('./pages/fruit-details/fruit-details.module').then( m => m.FruitDetailsPageModule)
  },
  {
    path: 'exercise/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
