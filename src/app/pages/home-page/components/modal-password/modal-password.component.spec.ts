import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'src/app/components/modal/modal.module';
import PasswordCardRepositoryMock from 'src/app/data/mocks/password-card.repository.mock';
import PasswordCardRepository from 'src/app/data/repositories/password-card.repository';

import { ModalPasswordComponent } from './modal-password.component';

describe('ModalPasswordComponent', () => {
  let component: ModalPasswordComponent;
  let fixture: ComponentFixture<ModalPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPasswordComponent ],
      providers: [
        {
          provide: PasswordCardRepository,
          useClass: PasswordCardRepositoryMock
        }
      ],
      imports: [
        ReactiveFormsModule,
        ModalModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
