import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonModel } from 'src/app/models/person-model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  cardForm!: FormGroup;
  persons! : PersonModel[];
  personUpdate! : PersonModel;
  showSpinner : boolean = false


  constructor(
    private fb:FormBuilder,
    public personService:  PersonService,
    private dialogRef : MatDialogRef<PersonFormComponent>,
    private _snackBar : MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data : PersonModel

  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.cardForm = this.fb.group({
      firstName:[this.data?.firstName||'',[Validators.minLength(2), Validators.maxLength(20),Validators.required]],
      lastName:[this.data?.lastName||'',[Validators.minLength(2), Validators.maxLength(20),Validators.required]],
      phoneNumber:[this.data?.phoneNumber||'',[Validators.maxLength(15),Validators.required]],
      mail:[this.data?.mail||'',Validators.email],
      description: [this.data?.description||'',Validators.maxLength(25)]
    });
  }
  addPerson(){
    this.personService.addPerson(this.cardForm.value).subscribe((res:any)=>{
      this.isSucceed(res.message);
    });
  }
  updatePerson(){
    this.personUpdate = this.cardForm.value;
    this.personUpdate.id = this.data.id;
    this.personService.updatePerson(this.personUpdate).subscribe((res:any)=>{
      this.isSucceed(res.message);
    })
  }
  blockPerson(person : PersonModel){
    this.personUpdate = person;
    this.personUpdate.favorite= false;
    this.personUpdate.block= true;
    this.personService.updatePerson(this.personUpdate).subscribe((res:any)=>{
      this.isSucceed(res.message);
    })

  }
  isSucceed(message : string){
    this._snackBar.open(message,'',{
      duration:2000
    });
    this.showSpinner=true;
    this.personService.getPersons();
    this.dialogRef.close()
  }

}

