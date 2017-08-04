import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PeopleListComponent } from "./people-list/people-list.component";
import { PeopleDetailComponent } from "./people-detail/people-detail.component";

const heroesRoutes: Routes = [
    { path: "list-people", component: PeopleListComponent },
    { path: "list-people/:id", component: PeopleDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PeopleRoutingModule { }
