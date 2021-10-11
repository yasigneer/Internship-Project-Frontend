import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonModel } from 'src/app/models/person-model';
import { PersonService } from 'src/app/services/person.service';
import { DeleteComponent } from '../delete/delete.component';
import { PersonFormComponent } from '../person-form/person-form.component';

@Component({
  selector: 'app-blockeds',
  templateUrl: './blockeds.component.html',
  styleUrls: ['./blockeds.component.css']
})
export class BlockedsComponent implements OnInit {
  personUpdate! : PersonModel
  constructor(
    public personService : PersonService,
    private dialog : MatDialog,
    private snackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
    this.personService.getBlockeds()
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
  blockPerson(person : PersonModel){
    this.personUpdate = person;
    this.personUpdate.block= false;
    this.personService.updatePerson(this.personUpdate).subscribe((res:any)=>{
      this.snackBar.open(res.message,'',{
        duration: 2000,
      })
      this.personService.getBlockeds();
    })

  }
}

