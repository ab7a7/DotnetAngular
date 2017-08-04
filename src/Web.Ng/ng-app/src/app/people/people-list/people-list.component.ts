import { Component, OnInit } from "@angular/core";
import { Person } from "app/Models/Person";
import { PeopleService } from "app/services/people/people.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-people-list",
    templateUrl: "./people-list.component.html",
    styleUrls: ["./people-list.component.scss"]
})
export class PeopleListComponent implements OnInit {
    people: Person[];

    constructor(
        private router: Router,
        private peopleService: PeopleService
    ) { }

    getPeople() {
        this.peopleService.getPeople().then(p => this.people = p);
    }

    ngOnInit() {
        this.getPeople();
    }

    onSelect(person: Person) {
        this.router.navigate(["/list-people", person.id]);
    }

}
