import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Crisis } from "app/models";
import { CrisesService } from "app/services/crises/crises.service";

@Injectable()
export class CrisesDetailResolver implements Resolve<Crisis> {
    constructor(private service: CrisesService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Crisis> {
        const id = +route.paramMap.get("id");

        return this.service.getCrisis(id).then(c => {
            if (c) {
                return c;
            } else {
                this.router.navigate(["/crises"]);
                return null;
            }
        });
    }
}
