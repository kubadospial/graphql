import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./missions-list/missions-list.component').then(
        (c) => c.MissionsListComponent
      ),
  },
  {
    path: ':name',
    loadComponent: () =>
      import('./mission-details/mission-details.component').then(
        (c) => c.MissionDetailsComponent
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
