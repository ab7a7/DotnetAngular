import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { CompOneComponent } from "./comp-one/comp-one.component";
import { CompTwoComponent } from "./comp-two/comp-two.component";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [
    {path: "", component: AppComponent},
    { path: "one", component: CompOneComponent },
    { path: "two", component: CompTwoComponent },
    { path: "**", component: NotFoundComponent }
]
@NgModule({
    declarations: [
        AppComponent,
        CompOneComponent,
        CompTwoComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
