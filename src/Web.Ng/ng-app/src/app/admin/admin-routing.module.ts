import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { ManageCrisesComponent } from "./manage-crises/manage-crises.component";
import { ManagePeopleComponent } from "./manage-people/manage-people.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AuthGuard } from "app/guards/auth-guard";
const adminRoutes: Routes = [
    {
        path: "admin",
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "",
                canActivateChild: [AuthGuard],
                children: [
                    { path: "crises", component: ManageCrisesComponent },
                    { path: "people", component: ManagePeopleComponent },
                    { path: "", component: AdminDashboardComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }
