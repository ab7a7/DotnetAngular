import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/services/AuthService/auth-service.service";
import { Router, NavigationExtras } from "@angular/router";

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
                const navigationExtras: NavigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true
                };
                this.router.navigate([redirect], navigationExtras);
            }
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}
