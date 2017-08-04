import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminComponent } from "./admin/admin.component";
import { ManagePeopleComponent } from "./manage-people/manage-people.component";
import { ManageCrisesComponent } from "./manage-crises/manage-crises.component";
import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminDashboardComponent,
        AdminComponent,
        ManagePeopleComponent,
        ManageCrisesComponent
    ]
})
export class AdminModule { }
