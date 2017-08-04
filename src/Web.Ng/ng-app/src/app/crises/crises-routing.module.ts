import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CrisesListComponent } from "./crises-list/crises-list.component";
import { CrisesDetailComponent } from "./crises-detail/crises-detail.component";
import { CrisesComponent } from "./crises/crises.component";
import { CrisesHomeComponent } from "./crises-home/crises-home.component";
import { CanDeactivateGuard } from "app/guards/deactivate-guard";
import { CrisesDetailResolver } from "./resolvers/crises-detail-resolver.service";

const heroesRoutes: Routes = [
    {
        path: "crises",
        component: CrisesComponent,
        children: [
            {
                path: "", component: CrisesListComponent,
                children: [
                    {
                        path: ":id",
                        canDeactivate: [CanDeactivateGuard],
                        component: CrisesDetailComponent,
                        resolve: {
                            crises: CrisesDetailResolver
                        }
                    },
                    {
                        path: "",
                        component: CrisesHomeComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [CrisesDetailResolver]
})
export class CrisesRoutingModule { }
