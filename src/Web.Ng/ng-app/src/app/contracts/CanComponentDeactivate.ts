import { Observable } from "rxjs/Observable";

export interface CanComponentDeactivate {
    CanDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
