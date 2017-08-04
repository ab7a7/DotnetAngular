import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { CrisisDetailComponent } from "./crisis-detail/crisis-detail.component";

const heroesRoutes: Routes = [
    { path: "list-crisis", component: CrisisListComponent },
    { path: "list-crisis/:id", component: CrisisDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CrisisRoutingModule { }
