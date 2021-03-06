﻿import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { MOneModule } from "./m-one/m-one.module";
import { PeopleModule } from "./people/people.module";
import { CrisesModule } from "./crises/crises.module";
import { MessagesModule } from "./messages/messages.module";
import { LoginModule } from "app/login/login.module";
import { CanDeactivateGuard } from "./guards/deactivate-guard";
import { DialogService } from "app/services/dialog-service/dialog.service";

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        MOneModule,
        PeopleModule,
        CrisesModule,
        MessagesModule,
        LoginModule,
        AppRoutingModule
    ],
    providers: [CanDeactivateGuard, DialogService],
    bootstrap: [AppComponent]
})
export class AppModule { }
