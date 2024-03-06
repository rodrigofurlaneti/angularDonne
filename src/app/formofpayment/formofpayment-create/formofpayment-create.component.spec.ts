import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormOfPaymentCreateComponent } from './formofpayment-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { FormOfPaymentModel } from 'src/interface/formofpayment.interface';
import { faker } from '@faker-js/faker';
import { FormOfPaymentListComponent } from '../formofpayment-list/formofpayment-list.component';
import { FormOfPaymentCreateService } from './formofpayment-create.service';

describe('FormOfPaymentCreateComponent', () => {
    let component: FormOfPaymentCreateComponent;
    let fixture: ComponentFixture<FormOfPaymentCreateComponent>;
    let router: Router;
    let service: FormOfPaymentCreateService;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'formofpayment-list', component: FormOfPaymentListComponent}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FormOfPaymentCreateComponent],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(FormOfPaymentCreateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        service = TestBed.inject(FormOfPaymentCreateService);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Create => formofpayment create component', () => {
            expect(component).toBeTruthy();
        });

    });

    // #endregion

    //#region [Properties]

    it('MessageTime => Empty', () => {
        //Arrange
        let expectedValue: number = 3000;
        let expectedValueTypeOf: string = 'number';

        //Act
        component.messageTime = expectedValue;

        //Assert
        expect(component.messageTime).toBe(expectedValue);
        expect(typeof(component.messageTime)).toBe(expectedValueTypeOf);
    });

    it('MessageErro => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'string';

        //Act
        component.messageErro = expectedValueTypeOf;
        
        //Assert
        expect(typeof(component.messageErro)).toBe(expectedValueTypeOf);
    });

    it('RouterString => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'string';

        //Act
        component.routerString = expectedValueTypeOf;
        
        //Assert
        expect(typeof(component.routerString)).toBe(expectedValueTypeOf);
    });

    it('formofpaymentModel => TypeOf', () => {
        //Arrange
        var objformofpaymentModel: FormOfPaymentModel = new FormOfPaymentModel()
        objformofpaymentModel.formOfPaymentId = faker.number.int();
        objformofpaymentModel.formOfPaymentName = faker.person.fullName();
        objformofpaymentModel.userId = faker.number.int();
        objformofpaymentModel.userName = faker.person.fullName();
        objformofpaymentModel.dateInsert = faker.date.anytime();
        objformofpaymentModel.dateUpdate = faker.date.anytime();
        let expectedValueTypeOf: string = 'object';

        //Act
        component.formOfPaymentModel = objformofpaymentModel;
        
        //Assert
        expect(typeof(component.formOfPaymentModel)).toBe(expectedValueTypeOf);
        expect(component.formOfPaymentModel).toBe(objformofpaymentModel);
    });

    //#endregion

    // #region [Methods]
    
    describe('Methods', () => {

        describe('Save', () => {

            it('Save => formOfPaymentName => Empty', () => {
                //Arrange
                let expectedValueTypeOf: string = 'undefined';
                let messageformofpaymentName: string = 'Não está preenchido o campo nome da categoria!';
                var spyOnComponent = spyOn(component, 'save').and.callThrough();
                var objformofpaymentModel: FormOfPaymentModel = new FormOfPaymentModel()
                objformofpaymentModel.formOfPaymentName = '';
                spyOnProperty(component, 'formOfPaymentModel', 'get').and.returnValue(objformofpaymentModel);
                
                //Act
                var result = component.save();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });

            it('Save => formofpaymentModel => Populate', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'save').and.callThrough();
                var objformofpaymentModel: FormOfPaymentModel = new FormOfPaymentModel()
                objformofpaymentModel.formOfPaymentName = faker.person.fullName();
                spyOnProperty(component, 'formOfPaymentModel', 'get').and.returnValue(objformofpaymentModel);
                
                //Act
                component.save();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.formOfPaymentModel.formOfPaymentName).toBe(objformofpaymentModel.formOfPaymentName);
            });

            it('Save => Success => Subscribe', () => {
                //Arrange
                var objformofpaymentModel: FormOfPaymentModel = new FormOfPaymentModel()
                objformofpaymentModel.userId = 1;
                objformofpaymentModel.userName = 'Administrador';
                objformofpaymentModel.formOfPaymentId = 1;
                objformofpaymentModel.formOfPaymentName = 'Administrador';
                objformofpaymentModel.dateUpdate = faker.date.anytime();
                objformofpaymentModel.dateInsert = faker.date.anytime();
                var spyOnComponent = spyOn(component, 'save').and.callThrough();

                const response = [
                    {
                        "formofpaymentId": "1",
                        "formofpaymentName": "Administrador",
                        "dateInsert": "",
                        "dateUpdate": "",
                        "userId": "1",
                        "userName": "Administrador"
                    }
                ];
                
                service.save(objformofpaymentModel).subscribe((data) => {
                    expect(data).toEqual(response);
                });

                //Act
                component.save();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.save).toHaveBeenCalled();
            });

        });

        describe('Reply', () => {

            it('Reply => RouterString', fakeAsync(() => {
                //Arrange
                let expectedValue: string = 'main';
                var spyOnComponent = spyOn(component, 'reply').and.callThrough();
                var spyOnRouter = spyOn(router, 'navigate').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(expectedValue);
                
                //Act
                component.reply();
        
                //Assert
                expect(component.routerString).toBe(expectedValue);
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(spyOnRouter).toHaveBeenCalledTimes(1);
            }));

            it('Reply', fakeAsync(() => {
                //Arrange
                let routerString: string = 'main';
                var spyOnComponent = spyOn(component, 'reply').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(routerString);
        
                //Act
                component.reply();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.routerString).toBe(routerString);
            }));

        });

        describe('formofpaymentList', () => {

            it('formofpaymentList => RouterString', fakeAsync(() => {
                //Arrange
                let expectedValue: string = 'formofpayment-list';
                var spyOnComponent = spyOn(component, 'formOfPaymentList').and.callThrough();
                var spyOnRouter = spyOn(router, 'navigate').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(expectedValue);
                
                //Act
                component.formOfPaymentList();
        
                //Assert
                expect(component.routerString).toBe(expectedValue);
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(spyOnRouter).toHaveBeenCalledTimes(1);
            }));

            it('formofpaymentList', fakeAsync(() => {
                //Arrange
                let routerString: string = 'formofpayment-list';
                var spyOnComponent = spyOn(component, 'formOfPaymentList').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(routerString);
        
                //Act
                component.formOfPaymentList();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.routerString).toBe(routerString);
            }));

        });

        describe('AuthenticatedUser', () => {

            it('AuthenticatedUser => UserIdLogin', () => {
                //Arrange
                let userIdLogin: number = faker.number.int();
                var element = document.createElement('input');
                element.id = 'userIdLogin';
                element.name = 'userIdLogin';
                element.value = userIdLogin.toString();
                element.type="hidden";
                document.getElementById = jasmine.createSpy('userIdLogin').and.returnValue(element);
                var objformofpaymentModel: FormOfPaymentModel = new FormOfPaymentModel();
                objformofpaymentModel.userId = userIdLogin;
                var spyOnComponent = spyOn(component, 'authenticatedUser').and.callThrough();
                spyOnProperty(component, 'formOfPaymentModel', 'get').and.returnValue(objformofpaymentModel);
                
                //Act
                component.authenticatedUser();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
            });

            it('AuthenticatedUser => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'function';
        
                //Act
                var result = component.authenticatedUser;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });

        })
        
        describe('ErrorMessage', () => {

            it('ErrorMessage => MessageErro', () => {
                //Arrange
                let expectedValueTypeOf: string = 'undefined';
                let expectedValue: string = 'Erro ao cadastrar a forma de pagamento!';
                var spyOnComponent = spyOn(component, 'errorMessage').and.callThrough();
                spyOnProperty(component, 'messageErro', 'get').and.returnValue(expectedValue);
                
                //Act
                var result = component.errorMessage();
        
                //Assert
                expect(component.messageErro).toBe(expectedValue);
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });
        })
    });

    // #endregion
});