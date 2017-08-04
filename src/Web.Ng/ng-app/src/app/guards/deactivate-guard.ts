import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";
import {Observable } from "rxjs/Observable";
import { CanComponentDeactivate } from "../contracts/CanComponentDeactivate";


@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
        canDeactivate(component: CanComponentDeactivate) {
            return component.CanDeactivate ? component.CanDeactivate() : true;
        }
}
