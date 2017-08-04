import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CrisesListComponent } from "./crises-list/crises-list.component";
import { CrisesRoutingModule } from "./crises-routing.module";
import { CrisesDetailComponent } from "./crises-detail/crises-detail.component";
import { CrisesComponent } from "./crises/crises.component";
import { CrisesHomeComponent } from "./crises-home/crises-home.component";
import { CrisesService } from "app/services/crises/crises.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CrisesRoutingModule
    ],
    declarations: [CrisesListComponent, CrisesDetailComponent, CrisesComponent, CrisesHomeComponent],
    providers: [CrisesService]
})
export class CrisesModule { }
