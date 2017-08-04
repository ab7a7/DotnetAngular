import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {AppComponent} from "./app.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [
    {path: "", component: AppComponent},
    {path: "admin", loadChildren: "app/admin/admin.module#AdminModule"},
    { path: "**", component: NotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
