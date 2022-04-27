import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import PasswordCardModel from 'src/app/data/models/password-card.model.';
import CreatePasswordCardUseCase from 'src/app/data/use-cases/create-password-card.use-case';
import UpdatePasswordCardUseCase from 'src/app/data/use-cases/update-password-card.use-case';

@Component({
  selector: 'app-modal-password',
  templateUrl: './modal-password.component.html',
  styleUrls: ['./modal-password.component.css']
})
export class ModalPasswordComponent {
  @ViewChild(ModalComponent)
  public modal!: ModalComponent;

  @Output()
  public onSavePassword = new EventEmitter();

  public showPassword = false;
  public showCopied = false;
  public isLoading = false;

  public passwordForm = this.formBuilder.group({
    username: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required, Validators.max(30)]),
    password: new FormControl('', Validators.required,),
  });

  public passwordCardId?: string;

  public constructor(
    private formBuilder: FormBuilder,
    private createPasswordCardUseCase: CreatePasswordCardUseCase,
    private updatePasswordCardUseCase: UpdatePasswordCardUseCase,
    private clipBoardService: ClipboardService
  ) { }

  public openWithPasswordCard(passwordCard: PasswordCardModel) {
    this.passwordForm.patchValue({
      username: passwordCard.username,
      url: passwordCard.url,
      password: passwordCard.password
    });

    this.passwordCardId = passwordCard.id;
    this.isLoading = false;
    this.showPassword = false;

    this.modal.open();
  }

  public async save() {
    const passwordCard: PasswordCardModel = {
      id: this.passwordCardId,
      username: this.passwordForm.controls['username'].value,
      url: this.passwordForm.controls['url'].value,
      password: this.passwordForm.controls['password'].value
    };

    let passwordEvent;

    if (passwordCard.id) {
      passwordEvent = this.updatePasswordCardUseCase.execute(passwordCard);
    } else {
      passwordEvent = this.createPasswordCardUseCase.execute(passwordCard);
    }

    this.isLoading = true;

    passwordEvent.subscribe({
      complete: () => {
        this.isLoading = false;
        this.modal.close();
        this.onSavePassword.emit();
      }
    });
  }

  public tooglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  public copyPassword() {
    this.clipBoardService.copy(this.passwordForm.controls['password'].value);

    this.showCopied = true;

    setTimeout(() => {
      this.showCopied = false;
    }, 1500);
  }
}
