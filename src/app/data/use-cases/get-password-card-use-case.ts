import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import UseCase from "../base/use-case";
import GetPasswordCardFilterModel from "../models/get-password-card-filter.model";
import PasswordCardModel from "../models/password-card.model.";
import PasswordCardRepository from "../repositories/password-card.repository";

@Injectable({ providedIn: 'root' })
export default class GetPasswordCardUseCase implements UseCase<GetPasswordCardFilterModel, Observable<Array<PasswordCardModel>>> {
    public constructor(
        private passwordCardRepository: PasswordCardRepository
    ) { }

    public execute(params: GetPasswordCardFilterModel): Observable<Array<PasswordCardModel>> {
        return this.passwordCardRepository.get(params);
    }
}