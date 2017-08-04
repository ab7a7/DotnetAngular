import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComposeMessageComponent } from "./compose-message/compose-message.component";
import { MessagesRoutingModule } from "app/messages/messages-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MessagesRoutingModule
  ],
  declarations: [ComposeMessageComponent]
})
export class MessagesModule { }
