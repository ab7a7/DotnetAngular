import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {AppComponent} from "./app.component";
import { ModuleOComponent } from "app/m-one/module-o/module-o.component";
const appRoutes: Routes = [
    { path: "", component: AppComponent, pathMatch: "full" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
