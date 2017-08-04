import { Injectable } from "@angular/core";
import { Crisis } from "app/models";
import {Crises} from "./crises";
@Injectable()
export class CrisesService {

  constructor() { }

  getCrises(): Promise<Crisis[]> {
      return Promise.resolve(Crises);
  }

  getCrisis(id: number): Promise<Crisis> {
      return this.getCrises().then(crises => crises.find(c => c.id === id));
  }
}
