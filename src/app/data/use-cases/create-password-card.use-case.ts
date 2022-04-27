import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import UseCase from "../base/use-case";
import PasswordCardModel from "../models/password-card.model.";
import PasswordCardRepository from "../repositories/password-card.repository";

@Injectable({ providedIn: 'root' })
export default class CreatePasswordCardUseCase implements UseCase<PasswordCardModel, Observable<void>> {
    public constructor(
        private passwordCardRepository: PasswordCardRepository
    ) { }

    public execute(params: PasswordCardModel): Observable<void> {
        return this.passwordCardRepository.store(params);
    }
}