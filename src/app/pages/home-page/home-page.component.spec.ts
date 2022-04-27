import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { ListPasswordComponent } from './components/list-password/list-password.component';
import { ModalPasswordComponent } from './components/modal-password/modal-password.component';
import PasswordCardRepositoryMock from 'src/app/data/mocks/password-card.repository.mock';
import PasswordCardRepository from 'src/app/data/repositories/password-card.repository';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
    let component: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                HomePageComponent,
                ListPasswordComponent,
                ModalPasswordComponent,
            ],
            providers: [
                {
                    provide: PasswordCardRepository,
                    useClass: PasswordCardRepositoryMock
                }
            ],
            imports: [
                ModalModule,
                BrowserAnimationsModule,
                ReactiveFormsModule,
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
