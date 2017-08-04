import { Component, OnInit } from "@angular/core";
import { Person } from "app/models";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { PeopleService } from "app/services/people/people.service";
import "rxjs/add/operator/switchMap";

@Component({
    selector: "app-people-detail",
    templateUrl: "./people-detail.component.html",
    styleUrls: ["./people-detail.component.scss"]
})
export class PeopleDetailComponent implements OnInit {
    person: Person;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private peopleService: PeopleService
    ) { }

    goBack() {
        this.router.navigate(["/list-people"]);
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.peopleService.getPerson(+params.get("id")))
            .subscribe((person: Person) => this.person = person);
    }

}
