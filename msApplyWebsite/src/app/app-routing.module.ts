import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { CrudTableComponent } from './crud-table/crud-table.component';

const routes: Routes = [
  { path: 'aboutMe', component: AboutMeComponent },
  { path: '', redirectTo: '/aboutMe', pathMatch: 'full' },
  { path: 'crud', component: CrudTableComponent },
  {
    path: 'acknowledgements',
    loadChildren: ()=>import('./acknowledgments/acknowledgments.module').then(m=>m.AcknowledgmentsModule)
  },
  { path: 'notFound', component: PagenotfoundComponent },
  { path: '**', redirectTo:'/notFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
