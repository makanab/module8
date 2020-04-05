import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'module8';
  clicked = false;
  users=['jdow','asmith','jdoe'];
  json = [{"firstName":"John", "lastName":"Dow" },
  {"firstName":"Ann", "lastName":"Smith" },
  {"firstName":"Joan", "lastName":"Doe" }];
 // students = JSON.parse(this.json);



}
