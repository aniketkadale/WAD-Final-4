import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Registration';

 

  displayname= '';
  displayaddress= '';
  displaycontact='';
  displayemail= '';

  getValue(name:string, address:string, contact:string, email:string) {
    // Assign the input values to the display variables
    this.displayname = name;
    this.displayaddress = address;
    this.displaycontact = contact;
    this.displayemail = email;
  }
}
