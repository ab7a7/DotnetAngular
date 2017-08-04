import {NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "app/guards/auth-guard";
import { AuthService } from "app/services/AuthService/auth-service.service";

const loginRoutes: Routes = [
    {path: "login", component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard, AuthService]
})
export class LoginRoutingModule { }
