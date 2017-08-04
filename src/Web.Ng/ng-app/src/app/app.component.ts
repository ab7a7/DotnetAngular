import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { PeopleService } from "./services/people/people.service";
import { Person } from "./Models/Person";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
   title = "app";
    apiValues: string[];

    constructor() { }

    ngOnInit() { }
}
