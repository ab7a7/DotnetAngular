import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/map";

@Component({
    selector: "app-admin-dashboard",
    templateUrl: "./admin-dashboard.component.html",
    styleUrls: ["./admin-dashboard.component.scss"]
})
export class AdminDashboardComponent implements OnInit {
    sessionId: Observable<string>;
    token: Observable<string>;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sessionId = this.route.queryParamMap
            .map(params => params.get("session_id") || "None");

        this.token = this.route.fragment.map(f => f || "None");
    }

}
