import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/components/card/card.module';
import { ListPasswordComponent } from './components/list-password/list-password.component';
import { ModalPasswordComponent } from './components/modal-password/modal-password.component';

const routes: Routes = [
  {
      "path": "",
      "component": HomePageComponent
  }
];

@NgModule({
  declarations: [
    HomePageComponent,
    ListPasswordComponent,
    ModalPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ModalModule,
    CardModule
  ]
})
export class HomePageModule { }
