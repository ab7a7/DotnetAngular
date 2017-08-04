import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ComposeMessageComponent } from "./compose-message/compose-message.component";
const heroesRoutes: Routes = [
    {
        path: "compose",
        component: ComposeMessageComponent,
        outlet: "popup"
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MessagesRoutingModule { }
