import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { CrisisRoutingModule } from "./crisis-routing.module";
import { CrisisService } from "app/services/crisis/crisis.service";
import { CrisisDetailComponent } from "./crisis-detail/crisis-detail.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CrisisRoutingModule
    ],
    declarations: [CrisisListComponent, CrisisDetailComponent],
    providers: [CrisisService]
})
export class CrisisModule { }
