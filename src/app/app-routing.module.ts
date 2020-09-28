import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { CatsComponent } from './components/cats/cats.component';
import { BirdsComponent } from './components/birds/birds.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dogs', component: DogsComponent},
  { path: 'cats', component: CatsComponent},
  { path: 'fox', component: BirdsComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
