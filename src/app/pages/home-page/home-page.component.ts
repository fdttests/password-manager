import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import PasswordCardModel from 'src/app/data/models/password-card.model.';
import DeletePasswordCardByIdUseCase from 'src/app/data/use-cases/delete-password-card-by-id.use-case';
import GetPasswordCardUseCase from 'src/app/data/use-cases/get-password-card-use-case';
import { ListPasswordComponent } from './components/list-password/list-password.component';
import { ModalPasswordComponent } from './components/modal-password/modal-password.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @ViewChild(ListPasswordComponent)
  public listPasswordComponent!: ListPasswordComponent;

  @ViewChild(ModalPasswordComponent)
  public modalPasswordComponent!: ModalPasswordComponent;

  public form = this.formBuilder.group({
    searchTerm: new FormControl('')
  });

  public constructor(
    private formBuilder: FormBuilder,
    private deletePasswordCardByIdUseCase: DeletePasswordCardByIdUseCase,
  ) { }

  public triggerSearch() {
    this.listPasswordComponent.loadPasswords();
  }

  public addPassword() {
    this.modalPasswordComponent.openWithPasswordCard({
      username: '',
      url: '',
      password: '',
    });
  }

  public editPassword(passwordCard: PasswordCardModel) {
    this.modalPasswordComponent.openWithPasswordCard(passwordCard);
  }

  public deletePassword(passwordCard: PasswordCardModel) {
    this.deletePasswordCardByIdUseCase.execute(passwordCard.id as string).subscribe(() => {
      alert('Password deleted!');
      this.triggerSearch();
    });
  }
}
