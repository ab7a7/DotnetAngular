import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {CompOneComponent} from "./comp-one/comp-one.component";
import {CompTwoComponent} from "./comp-two/comp-two.component";
import {MOneRoutingModule} from "./m-one-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MOneRoutingModule
  ],
  declarations: [CompOneComponent, CompTwoComponent]
})
export class MOneModule { }
