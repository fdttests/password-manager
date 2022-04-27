import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";

import { environment } from "src/environments/environment";
import encodeQueryString from "../utils/encode-query-string.util";
import GetPasswordCardFilterModel from "../models/get-password-card-filter.model";
import PasswordCardModel from "../models/password-card.model.";
import GenericResponseModel from "../models/generic-response.model";

@Injectable({
    providedIn: 'root'
})
export default class PasswordCardRepository {
    private apiUrl = environment.apiUrl;

    public constructor(
        private http: HttpClient
    ) { }

    public get(filter: GetPasswordCardFilterModel): Observable<Array<PasswordCardModel>> {
        const queryString = encodeQueryString(filter);

        return this.http
            .get<GenericResponseModel>(`${this.apiUrl}/password-cards?${queryString}`)
            .pipe(
                map((response: GenericResponseModel) => {
                    return response?.data && Array.isArray(response.data) ? response.data : [];
                }),
            );
    }

    public store(passwordCard: PasswordCardModel) {
        return this.http.post<void>(`${this.apiUrl}/password-cards`, {
            data: passwordCard
        })
    }

    public update(passwordCard: PasswordCardModel) {
        return this.http.put<void>(`${this.apiUrl}/password-cards/${passwordCard.id}`, {
            data: {
                username: passwordCard.username,
                password: passwordCard.password,
                url: passwordCard.url
            }
        });
    }

    public destroy(id: string) {
        return this.http
            .delete<void>(`${this.apiUrl}/password-cards/${id}`);
    }
}
