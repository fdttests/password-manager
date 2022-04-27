import { ComponentFixture, TestBed } from '@angular/core/testing';
import PasswordCardRepositoryMock from 'src/app/data/mocks/password-card.repository.mock';
import PasswordCardRepository from 'src/app/data/repositories/password-card.repository';

import { ListPasswordComponent } from './list-password.component';

describe('ListPasswordComponent', () => {
  let component: ListPasswordComponent;
  let fixture: ComponentFixture<ListPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPasswordComponent ],
      providers: [
        {
          provide: PasswordCardRepository,
          useClass: PasswordCardRepositoryMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
