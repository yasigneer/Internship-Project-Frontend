import { Component, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/models/person-model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
  }
  search(searchText : string){
    searchText = searchText.toLowerCase();
    this.personService.filteredPerson = this.personService.persons.filter((person:PersonModel)=>{
      return person.firstName.toLowerCase().indexOf(searchText) > -1  || person.lastName.toLowerCase().indexOf(searchText) > -1 || person.phoneNumber.toLowerCase().indexOf(searchText) > -1
    });
  }

}
