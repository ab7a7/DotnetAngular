import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = "app";
    apiValues: string[];

    constructor(private httpService: Http) { }

    ngOnInit() {
        this.httpService.get("api/values")
            .subscribe(res => this.apiValues = res.json() as string[]);
    }
}
