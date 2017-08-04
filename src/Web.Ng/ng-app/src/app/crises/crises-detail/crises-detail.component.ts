import { Component, OnInit, HostBinding } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import {slideInDownAnimation} from "app/animations/animations";
import "rxjs/add/operator/switchMap";
import { Crisis } from "app/models";
import { CrisesService } from "app/services/crises/crises.service";

@Component({
    selector: "app-crises-detail",
    templateUrl: "./crises-detail.component.html",
    styleUrls: ["./crises-detail.component.scss"],
    animations: [slideInDownAnimation]
})
export class CrisesDetailComponent implements OnInit {
    @HostBinding("@routeAnimation") routeAnimation: true;
    @HostBinding("style.display") display: "block";
    @HostBinding("style.position") position: "absolute";

    crisis: Crisis;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private crisisService: CrisesService
    ) { }

    goBack() {
        const id = this.crisis ? this.crisis.id : null;
        this.router.navigate(["../"], {relativeTo: this.route});
    }

    ngOnInit() {
         this.route.paramMap
             .switchMap((params: ParamMap) => this.crisisService.getCrisis(+params.get("id")))
             .subscribe((person: Crisis) => this.crisis = person);
    }

}
