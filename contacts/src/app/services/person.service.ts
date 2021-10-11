import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonFormComponent } from '../components/person-form/person-form.component';
import { PersonModel } from '../models/person-model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  apiUrl : string = 'https://localhost:44300/api/Persons/'
  persons! : PersonModel[];
  filteredPerson! : PersonModel[];
  favorites! : PersonModel[];
  blockeds! : PersonModel[];
  dataLoaded : boolean = false;
  

  constructor(
    private http : HttpClient,

  ) { }
  getPersons(){
   this.http.get<PersonModel>(this.apiUrl+'getalllist').subscribe((res:any)=>{
      this.persons = this.filteredPerson =res.data;
    });
    }
  getFavorites(){
 
    this.http.get<PersonModel>(this.apiUrl+'favorites').subscribe((res:any)=>{
       this.favorites = res.data;
     });
   }
   getBlockeds(){
 
    this.http.get<PersonModel>(this.apiUrl+'blockeds').subscribe((res:any)=>{
       this.blockeds = res.data;
     });
   }
  addPerson(person : PersonModel){
    return this.http.post(this.apiUrl+"add",person);
  }
  updatePerson(person : PersonModel){
    return this.http.post(this.apiUrl+"update",person);
  }
  deletePerson(person : PersonModel){
    return this.http.post(this.apiUrl+"delete",person);
  }
}
