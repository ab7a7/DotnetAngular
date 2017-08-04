import { Injectable } from "@angular/core";
import { PEOPLE } from "app/services/people/people";
import { Person } from "app/Models/Person";

@Injectable()
export class PeopleService {

    constructor() { }

    getPeople(): Promise<Person[]> {
        return Promise.resolve(PEOPLE);
    }

    getPerson(id: number): Promise<Person> {
        return this.getPeople().then(people => people.find((p => p.id === id)));
    }
}
