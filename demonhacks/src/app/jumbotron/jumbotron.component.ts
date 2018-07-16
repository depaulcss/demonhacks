import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  eventDate:String = 'Saturday, October 20 - Sunday, October 21';
  eventDescription:String = "Disregard sleep; Pursue greatness;";
  eventLocation:String = "Chicago, Illinois";

  constructor() {}

  ngOnInit() {
  }

}
