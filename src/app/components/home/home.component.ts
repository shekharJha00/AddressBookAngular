import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBook } from 'src/app/model/addressbook/addressbook.module';
import { AddressBookService} from 'src/app/addressbook.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private service : AddressBookService) { }
  public personModel: AddressBook= new AddressBook("","","","","","","","");

  contactList: any;

  ngOnInit(): void {
    this.service.getAllPerson().subscribe((data: any)=> {
      console.log(data);
      this.contactList= Object(data)["data"];
    })
  }

  delete(id: Number) {
    console.log(id);
    this.service.deleteById(id).subscribe((data: any)=> {
      console.log(data);
      this.ngOnInit();
    })
  }

  update(id: Number, person: AddressBook) {
    console.log(id, person);
    this.service.update(id, person);
    this.router.navigate(['form']);
  }

}