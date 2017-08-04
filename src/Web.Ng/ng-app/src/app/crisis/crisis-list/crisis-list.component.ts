import { Component, OnInit } from "@angular/core";
import { Person } from "app/Models/Person";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "app-crisis-list",
    templateUrl: "./crisis-list.component.html",
    styleUrls: ["./crisis-list.component.scss"]
})
export class CrisisListComponent implements OnInit {
    crisis: Observable<Person[]>;
    private selectedId: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private crisisService: CrisisService
    ) { }

    getCrisis() {
        this.crisis = this.route.paramMap.switchMap((params: ParamMap) => {
            this.selectedId = +params.get("id");
            return this.crisisService.getCrisis();
        });
    }

    isSelected(hero: Person) { return hero.id === this.selectedId; }

    ngOnInit() {
        this.getCrisis();
    }

    onSelect(person: Person) {
        this.router.navigate(["/list-crisis", person.id]);
    }

}
