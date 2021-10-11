import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonModel } from 'src/app/models/person-model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  personDelete! : PersonModel
  constructor(
    private personService : PersonService,
    @Inject(MAT_DIALOG_DATA) public data : PersonModel,
    private dialogRef : MatDialogRef<DeleteComponent>,
    private _snackbar : MatSnackBar
  ) { }
  ngOnInit(): void {
    
  }
  deletePerson(){
    this.personDelete = this.data;
    this.personService.deletePerson(this.personDelete).subscribe((res:any)=>{
      this._snackbar.open(res.message,'',{
        duration:2000
      });
      this.personService.getPersons();
      this.dialogRef.close();
    })
  }

}
