import { Injectable } from "@angular/core";

@Injectable()
export class DialogService {
    confirmResult = false;
    constructor() { }

    confirm(message: string): Promise<boolean> {
        return Promise.resolve(
            window.confirm(message)
        );
    }
}
