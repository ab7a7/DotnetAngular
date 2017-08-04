import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
   title = "app";
    apiValues: string[];

    constructor(private httpService: Http) { }

    ngOnInit() {
        // this.httpService.get("api/values")
        //     .subscribe(res => this.apiValues = res.json() as string[]);
    }
}
