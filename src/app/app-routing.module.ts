import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionsListComponent } from './missions-list/missions-list.component';
import { DetailsResolver } from './spacex/details.resolver';

const routes: Routes = [
  { path: '', component: MissionsListComponent },
  {
    path: ':name',
    resolve: { name: DetailsResolver },
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
