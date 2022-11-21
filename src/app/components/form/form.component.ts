import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBook } from 'src/app/model/addressbook/addressbook.module';
import { AddressBookService } from 'src/app/addressbook.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  public personModel: AddressBook= new AddressBook("","","","","","","","");

  constructor(private router: Router, private service: AddressBookService) { }

  ngOnInit(): void {
    if (this.service.id !=0) {
      this.personModel= this.service.person;
    }
  }

  onAdd() {
    if (this.service.id !=0) {
      this.service.updateById(this.service.id, this.service.person).subscribe((data: any)=> {
        console.log(data);
        this.router.navigate(['']);
        this.service.update(0,null);
      })
    } else {
      console.log(this.personModel);
      this.service.addPerson(this.personModel).subscribe((data: any)=> {this.router.navigate(['']);})
    }
  }

}