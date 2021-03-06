import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";
import { CrisesService } from "app/services/crises/crises.service";
import { Crisis } from "app/models";

@Component({
    selector: "app-crises-list",
    templateUrl: "./crises-list.component.html",
    styleUrls: ["./crises-list.component.scss"]
})
export class CrisesListComponent implements OnInit {
    crises: Observable<Crisis[]>;
    private selectedId: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private crisisService: CrisesService
    ) { }

    getCrisis() {
         this.crises = this.route.paramMap.switchMap((params: ParamMap) => {
             return this.crisisService.getCrises();
         });
    }

    isSelected(crisis: Crisis) { return crisis.id === this.selectedId; }

    ngOnInit() {
        this.getCrisis();
    }

    onSelect(crisis: Crisis) {
        this.selectedId = crisis.id;
        this.router.navigate([crisis.id], {relativeTo: this.route});
    }

}
