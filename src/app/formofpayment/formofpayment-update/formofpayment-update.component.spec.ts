import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormOfPaymentUpdateComponent } from './formofpayment-update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormOfPaymentModel } from 'src/interface/formofpayment.interface';
import { faker } from '@faker-js/faker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { of } from 'rxjs';
import { FormOfPaymentUpdateService } from './formofpayment-update.service';

describe('FormOfPaymentUpdateComponent', () => {
    let component: FormOfPaymentUpdateComponent;
    let fixture: ComponentFixture<FormOfPaymentUpdateComponent>;
    let router: Router;
    let service: FormOfPaymentUpdateService;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'FormOfPayment-update', component: FormOfPaymentUpdateComponent}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormOfPaymentUpdateComponent],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(FormOfPaymentUpdateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        service = TestBed.inject(FormOfPaymentUpdateService);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Update => FormOfPayment Update component', () => {
            expect(component).toBeTruthy();
        });

    });

    // #endregion

           //#region [Properties]

           describe('Property private', () => {

            it('FormOfPaymentModel => TypeOf', () => {
                //Arrange
                let objFormOfPaymentModel: FormOfPaymentModel = new FormOfPaymentModel()
                objFormOfPaymentModel.formOfPaymentId = faker.number.int();
                objFormOfPaymentModel.formOfPaymentName = faker.person.fullName();
                objFormOfPaymentModel.dateInsert = faker.date.anytime();
                objFormOfPaymentModel.dateUpdate = faker.date.anytime();
                objFormOfPaymentModel.userId = faker.number.int();
                objFormOfPaymentModel.userName = faker.person.fullName();
        
                //Act
                component.formOfPaymentModel = objFormOfPaymentModel;
                
                //Assert
                expect(component.formOfPaymentModel.formOfPaymentId).toBe(objFormOfPaymentModel.formOfPaymentId);
                expect(component.formOfPaymentModel.formOfPaymentName).toBe(objFormOfPaymentModel.formOfPaymentName);
                expect(component.formOfPaymentModel.dateInsert).toBe(objFormOfPaymentModel.dateInsert);
                expect(component.formOfPaymentModel.dateUpdate).toBe(objFormOfPaymentModel.dateUpdate);
                expect(component.formOfPaymentModel.userId).toBe(objFormOfPaymentModel.userId);
                expect(component.formOfPaymentModel.userName).toBe(objFormOfPaymentModel.userName);
                expect(typeof(component.formOfPaymentModel.formOfPaymentId)).toBe('number');
                expect(typeof(component.formOfPaymentModel.formOfPaymentName)).toBe('string');
                expect(typeof(component.formOfPaymentModel.dateInsert)).toBe('object');
                expect(typeof(component.formOfPaymentModel.dateUpdate)).toBe('object');
                expect(typeof(component.formOfPaymentModel.userId)).toBe('number');
                expect(typeof(component.formOfPaymentModel.userName)).toBe('string');
            });

            it('DisplayedColumns => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'object';
                let objDisplayedColumns: string[] = ['name'];

                //Act
                component.displayedColumns = objDisplayedColumns;
                
                //Assert
                expect(typeof(component.displayedColumns)).toBe(expectedValueTypeOf);
                expect(component.displayedColumns).toEqual(objDisplayedColumns);
            });

            it('ClickedRows => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'object';
                let objClickedRows: Set<FormOfPaymentModel> = new Set<FormOfPaymentModel>();

                //Act
                component.clickedRows = objClickedRows;
                
                //Assert
                expect(typeof(component.clickedRows)).toBe(expectedValueTypeOf);
                expect(component.clickedRows).toEqual(objClickedRows);
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

            it('DataSource => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'object';
                let expectedValue: FormOfPaymentModel[] = [];
        
                //Act
                component.dataSource = expectedValue;
                
                //Assert
                expect(typeof(component.dataSource)).toBe(expectedValueTypeOf);
                expect(component.dataSource).toEqual(expectedValue);
            });

            it('MessageTime => Empty', () => {
                //Arrange
                let expectedValue: number = 3000;
        
                //Act
                //Assert
                expect(component.messageTime).toBe(expectedValue);
            });
    
            it('IsIdZero => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'boolean';
                let expectedValue: boolean = true;

                //Act
                component.isIdZero = expectedValue;
                
                //Assert
                expect(component.isIdZero).toBe(expectedValue);
                expect(typeof(component.isIdZero)).toBe(expectedValueTypeOf);
            });

            it('IsIdGreaterThanZero => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'boolean';
                let expectedValue: boolean = false;
                
                //Act
                component.isIdGreaterThanZero = expectedValue;
                
                //Assert
                expect(component.isIdGreaterThanZero).toBe(expectedValue);
                expect(typeof(component.isIdGreaterThanZero)).toBe(expectedValueTypeOf);
            });

            it('Status => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'string';
                let expectedValue: string = '';
                
                //Act
                component.status = expectedValue;
                
                //Assert
                expect(component.status).toBe(expectedValue);
                expect(typeof(component.status)).toBe(expectedValueTypeOf);
            });

            it('MessageTime => Empty', () => {
                //Arrange
                let expectedValueTypeOf: string = 'number';
                let expectedValue: number = 3000;
                //Act
                component.messageTime = expectedValue;

                //Assert
                expect(component.messageTime).toBe(expectedValue);
                expect(typeof(component.messageTime)).toBe(expectedValueTypeOf);
            });

            it('Ids => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'number';
                let expectedValue: number = 0;
                
                //Act
                component.ids = expectedValue;
                
                //Assert
                expect(component.ids).toBe(expectedValue);
                expect(typeof(component.ids)).toBe(expectedValueTypeOf);
            });
        });
        
        // #endregion


    // #region [Methods]
    
    describe('Methods', () => {

        describe('Update', () => {

            it('Update => Success', () => {
                //Arrange
                let spyOnComponent = spyOn(component, 'update').and.callThrough();

                //Act
                component.update();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.update).toHaveBeenCalled();
            });
        });

        describe('Reply', () => {

            it('Reply => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'function';
        
                //Act
                let result = component.reply;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });
        
            it('Reply => RouterString', fakeAsync(() => {
                //Arrange
                let expectedValue: string = 'main';
                let spyOnComponent = spyOn(component, 'reply').and.callThrough();
                let spyOnRouter = spyOn(router, 'navigate').and.callThrough();
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
                let spyOnComponent = spyOn(component, 'reply').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(routerString);
        
                //Act
                component.reply();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.routerString).toBe(routerString);
            }));

        });

        describe('SuccessMessage', () => {

            it('SuccessMessage => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'function';
        
                //Act
                let result = component.successMessage;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });
        });
    
        describe('ErrorMessage', () => {

            it('ErrorMessage => MessageErro', () => {
                //Arrange
                let expectedValue: string = 'Erro ao cadastrar o cliente!';
                let spyOnComponent = spyOn(component, 'errorMessage').and.callThrough();
                spyOnProperty(component, 'messageErro', 'get').and.returnValue(expectedValue);
                
                //Act
                component.errorMessage();
        
                //Assert
                expect(component.messageErro).toBe(expectedValue);
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
            });

            it('ErrorMessage => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'function';
        
                //Act
                let result = component.errorMessage;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });
        
            it('ErrorMessage', () => {
                //Arrange
                let messageErro: string = 'Erro ao cadastrar o cliente';
                let spyOnComponent = spyOn(component, 'errorMessage').and.callThrough();
                spyOnProperty(component, 'messageErro', 'get').and.returnValue(messageErro);
        
                //Act/
                let result = component.errorMessage;
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(0);
                expect(component.messageErro).toBe(messageErro);
            });

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
                let objFormOfPaymentModel: FormOfPaymentModel = new FormOfPaymentModel();
                objFormOfPaymentModel.formOfPaymentId = userIdLogin;
                let spyOnComponent = spyOn(component, 'authenticatedUser').and.callThrough();
                spyOnProperty(component, 'formOfPaymentModel', 'get').and.returnValue(objFormOfPaymentModel);
                
                //Act
                component.authenticatedUser();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
            });

            it('AuthenticatedUser => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'function';
        
                //Act
                let result = component.authenticatedUser;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });
        });

        describe('List', () => {
    
            it('List => Success', () => {
                //Arrange
                let spyOnComponent = spyOn(component, 'list').and.callThrough();

                //Act
                component.list();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.list).toHaveBeenCalled();
            });
        });

        describe('GetById', () => {

            it('GetByIb => Success', () => {
            
                //Arrange
                let objFormOfPaymentModel: FormOfPaymentModel = new FormOfPaymentModel()
                objFormOfPaymentModel.formOfPaymentId = faker.number.int();
                objFormOfPaymentModel.formOfPaymentName = faker.person.fullName();
                objFormOfPaymentModel.dateInsert = faker.date.anytime();
                objFormOfPaymentModel.dateUpdate = faker.date.anytime();
                objFormOfPaymentModel.userId = faker.number.int();
                objFormOfPaymentModel.userName = faker.person.fullName();
                let idFake : number = faker.number.int();
                let spyOnComponent = spyOn(component, 'getById').and.callThrough();
                spyOnProperty(component, 'formOfPaymentModel', 'get').and.returnValue(objFormOfPaymentModel);
                
                //Act
                component.getById(idFake);
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.formOfPaymentModel).toEqual(objFormOfPaymentModel);

            });
        });
    });  
    // #endregion
});