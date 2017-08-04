import { Component, OnInit, HostBinding } from "@angular/core";
import { Router, ActivatedRoute, ParamMap, CanDeactivate } from "@angular/router";
import { slideInDownAnimation } from "app/animations/animations";
import "rxjs/add/operator/switchMap";
import { Crisis } from "app/models";
import { CrisesService } from "app/services/crises/crises.service";
import { DialogService } from "app/services/dialog-service/dialog.service";
import { CanComponentDeactivate } from "app/contracts/CanComponentDeactivate";

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
    editName: string;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dialogService: DialogService
    ) { }

    CanDeactivate(): Promise<boolean> | boolean {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm("Discard changes?");
    }

    goBack() {
        const id = this.crisis ? this.crisis.id : null;
        this.router.navigate(["../"], { relativeTo: this.route });
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: {crises: Crisis}) => {
                this.crisis = data.crises;
                this.editName = this.crisis.name;
            });
    }

    save() {
        this.crisis.name = this.editName;
        this.goBack();
    }

}
