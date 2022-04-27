import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import GetPasswordCardFilterModel from "../models/get-password-card-filter.model";
import PasswordCardModel from "../models/password-card.model.";

@Injectable({
    providedIn: 'root'
})
export default class PasswordCardRepositoryMock {
    public constructor() { }

    public get(filter: GetPasswordCardFilterModel): Observable<Array<PasswordCardModel>> {
        return of([
            {
                'id': 'random',
                'name': 'sample',
                'url': 'sample.com',
                'username': 'sample',
                'password': 'sample'
            }
        ]);
    }

    public store(passwordCard: PasswordCardModel): Observable<void> {
        return of();
    }

    public update(passwordCard: PasswordCardModel): Observable<void> {
        return of();
    }

    public destroy(id: string): Observable<void> {
        return of();
    }
}
