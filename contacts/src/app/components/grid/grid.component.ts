import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonModel } from 'src/app/models/person-model';
import { PersonService } from 'src/app/services/person.service';
import { DeleteComponent } from '../delete/delete.component';
import { PersonFormComponent } from '../person-form/person-form.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  personUpdate! : PersonModel;
  showSpinner! : boolean
  result : any
  constructor(
    public personService : PersonService,
    public dialog:MatDialog,
    private snackBar : MatSnackBar
    ) { }

  ngOnInit(): void {
    console.log(this.personService.persons)
    this.personService.getPersons();
  }

  openAddForm(){
    this.dialog.open(PersonFormComponent,{
      width:"400px"
    });
  }
  openUpdateForm(person : PersonModel){
    this.dialog.open(PersonFormComponent,{
      width:"400px",
      data : person
    })
  }
  delete(person : PersonModel){
    this.dialog.open(DeleteComponent,{
      data : person,
      width: "400px"
    })
  }
  isFavorite(person: PersonModel){
    return person.favorite? "btn-favorite" : "btn-default"
  }
  updateFavorite(person:PersonModel){
    if(person.favorite == false || person.favorite == null){
      person.favorite = true;
    }
    else{
      person.favorite = false;
    }
    this.personService.updatePerson(person).subscribe((res:any)=>{
      this.snackBar.open(res.message,'',{
        duration:2000
      })
      this.personService.getPersons();
    })
  }


}
