import { Component, OnInit } from "@angular/core";
import { Person } from "app/Models/Person";
import { PeopleService } from "app/services/people/people.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "app-people-list",
    templateUrl: "./people-list.component.html",
    styleUrls: ["./people-list.component.scss"]
})
export class PeopleListComponent implements OnInit {
    people: Observable<Person[]>;
    private selectedId: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private peopleService: PeopleService
    ) { }

    getPeople() {
        this.people = this.route.paramMap.switchMap((params: ParamMap) => {
            this.selectedId = +params.get("id");
            return this.peopleService.getPeople();
        });
    }

    isSelected(hero: Person) { return hero.id === this.selectedId; }

    ngOnInit() {
        this.getPeople();
    }

    onSelect(person: Person) {
        this.router.navigate(["/list-people", person.id]);
    }

}
