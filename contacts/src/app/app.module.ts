import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GridComponent } from './components/grid/grid.component';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from "@angular/common";
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { PersonFormComponent } from './components/person-form/person-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortNamePipe } from './pipes/sort.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DeleteComponent } from './components/delete/delete.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { BlockedsComponent } from './components/blockeds/blockeds.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GridComponent,
    PersonFormComponent,
    SortNamePipe,
    DeleteComponent,
    FavoritesComponent,
    BlockedsComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
