import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import UseCase from "../base/use-case";
import PasswordCardRepository from "../repositories/password-card.repository";

@Injectable({ providedIn: 'root' })
export default class DeletePasswordCardByIdUseCase implements UseCase<string, Observable<void>> {
    public constructor(
        private passwordCardRepository: PasswordCardRepository
    ) { }

    public execute(id: string): Observable<void> {
        return this.passwordCardRepository.destroy(id);
    }
}