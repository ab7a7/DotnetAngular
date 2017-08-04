import { Component, OnInit, HostBinding } from "@angular/core";
import { Person } from "app/models";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { PeopleService } from "app/services/people/people.service";
import {slideInDownAnimation} from "app/animations/animations";
import "rxjs/add/operator/switchMap";

@Component({
    selector: "app-people-detail",
    templateUrl: "./people-detail.component.html",
    styleUrls: ["./people-detail.component.scss"],
    animations: [slideInDownAnimation]
})
export class PeopleDetailComponent implements OnInit {
    @HostBinding("@routeAnimation") routeAnimation: true;
    @HostBinding("style.display") display: "block";
    @HostBinding("style.position") position: "absolute";

    person: Person;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private peopleService: PeopleService
    ) { }

    goBack() {
        const id = this.person ? this.person.id : null;
        this.router.navigate(["/list-people", {id: id}]);
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.peopleService.getPerson(+params.get("id")))
            .subscribe((person: Person) => this.person = person);
    }

}
