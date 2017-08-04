import { Component, OnInit, HostBinding } from "@angular/core";
import { Person } from "app/models";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import {slideInDownAnimation} from "app/animations/animations";
import "rxjs/add/operator/switchMap";

@Component({
    selector: "app-crisis-detail",
    templateUrl: "./crisis-detail.component.html",
    styleUrls: ["./crisis-detail.component.scss"],
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
        private crisisService: PeopleService
    ) { }

    goBack() {
        const id = this.person ? this.person.id : null;
        this.router.navigate(["/list-crisis", {id: id}]);
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.crisisService.getPerson(+params.get("id")))
            .subscribe((person: Person) => this.person = person);
    }

}
