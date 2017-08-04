import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {CompOneComponent} from "./comp-one/comp-one.component";
import {CompTwoComponent} from "./comp-two/comp-two.component";

const heroesRoutes: Routes = [
    { path: "one", component: CompOneComponent },
    { path: "two", component: CompTwoComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MOneRoutingModule { }
