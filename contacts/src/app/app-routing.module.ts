import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockedsComponent } from './components/blockeds/blockeds.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FooterComponent } from './components/footer/footer.component';
import { GridComponent } from './components/grid/grid.component';

const routes: Routes = [
  {
    path : '',
    component : GridComponent
  },
  {
    path : 'favorites',
    component : FavoritesComponent
  },
  {
    path : 'blockeds',
    component : BlockedsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
