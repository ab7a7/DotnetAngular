import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PeopleListComponent } from "./people-list/people-list.component";
import { PeopleRoutingModule } from "./people-routing.module";
import { PeopleService } from "app/services/people/people.service";
import { PeopleDetailComponent } from "./people-detail/people-detail.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PeopleRoutingModule
    ],
    declarations: [PeopleListComponent, PeopleDetailComponent],
    providers: [PeopleService]
})
export class PeopleModule { }
