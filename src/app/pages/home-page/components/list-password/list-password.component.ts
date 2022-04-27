import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import PasswordCardModel from 'src/app/data/models/password-card.model.';
import GetPasswordCardUseCase from 'src/app/data/use-cases/get-password-card-use-case';

@Component({
    selector: 'app-list-password',
    templateUrl: './list-password.component.html',
    styleUrls: ['./list-password.component.css']
})
export class ListPasswordComponent implements OnInit, OnChanges {
  @Input() public searchTerm?: string;

  @Output() public onEditPassword = new EventEmitter();
  @Output() public onDeletePassword = new EventEmitter();

  public isLoading = false;
  public passwordCards: Array<PasswordCardModel> = [];

  private debounce?: any;

  public constructor(
    private getPasswordCardUseCase: GetPasswordCardUseCase
  ) { }

  public ngOnInit(): void {
      this.loadPasswords();
  }

  public ngOnChanges(changes: SimpleChanges): void {
      if (changes['searchTerm'] && !changes['searchTerm']?.isFirstChange()) {
          this.loadPasswords();
      }
  }

  public loadPasswords() {
      if (this.debounce) {
          clearTimeout(this.debounce);
      }

      this.debounce = setTimeout(() => {
          this.isLoading = true;

          this.getPasswordCardUseCase.execute({
              term: this.searchTerm
          }).subscribe({
              next: (passwords) => {
                  this.passwordCards = passwords;
              },
              complete: () => {
                  this.isLoading = false;
              },
          });
      }, 500);
  }
}
