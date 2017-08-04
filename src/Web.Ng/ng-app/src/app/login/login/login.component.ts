import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/services/AuthService/auth-service.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
    message: string;
    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }

    ngOnInit() {
    }

    setMessage() {
        this.message = `Logged ${this.authService.isLoggedIn ? "in" : "out"}`;
    }

    login() {
        this.message = "Trying to log in";

        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : "/crises/admin";

                this.router.navigate([redirect]);
            }
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}
