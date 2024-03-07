import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { PaymentCreateComponent } from './payment-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { PaymentModel } from 'src/interface/payment.interface';
import { faker } from '@faker-js/faker';
import { PaymentListComponent } from '../payment-list/payment-list.component';
import { PaymentCreateService } from './payment-create.service';
import { PaymentCreateMockService } from 'test/payment-create-mock.service';
import { CommandListService } from 'src/app/command/command-list/command-list.service';
import { CommandListMockService } from 'test/command-list-mock.service';
import { FormOfPaymentListService } from 'src/app/formofpayment/formofpayment-list/formofpayment-list.service';
import { FormOfPaymentListMockService } from 'test/formOfPayment-list-mock.service';

describe('paymentCreateComponent', () => {
    let component: PaymentCreateComponent;
    let fixture: ComponentFixture<PaymentCreateComponent>;
    let router: Router;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'payment-list', component: PaymentListComponent}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PaymentCreateComponent],
            providers: [
                { provide: PaymentCreateService, useClass: PaymentCreateMockService },
                { provide: CommandListService, useClass: CommandListMockService },
                { provide: FormOfPaymentListService, useClass: FormOfPaymentListMockService }
            ],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(PaymentCreateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Create => payment create component', () => {
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

    it('MessageSuccess => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'string';

        //Act
        component.messageSuccess = expectedValueTypeOf;
        
        //Assert
        expect(typeof(component.messageSuccess)).toBe(expectedValueTypeOf);
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

    it('CommandSelected => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'string';

        //Act
        component.commandSelected = expectedValueTypeOf;
        
        //Assert
        expect(typeof(component.commandSelected)).toBe(expectedValueTypeOf);
        expect(component.commandSelected).toBe(expectedValueTypeOf);
    });

    it('CommandSelectedID => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'number';
        let expectedValue: number = faker.number.int();

        //Act
        component.commandSelectedID = expectedValue;
        
        //Assert
        expect(typeof(component.commandSelectedID)).toBe(expectedValueTypeOf);
        expect(component.commandSelectedID).toBe(expectedValue);
    });

    it('ProductSelected => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'string';

        //Act
        component.productSelected = expectedValueTypeOf;
        
        //Assert
        expect(typeof(component.productSelected)).toBe(expectedValueTypeOf);
        expect(component.productSelected).toBe(expectedValueTypeOf);
    });

    it('ProductSelectedID => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'number';
        let expectedValue: number = faker.number.int();

        //Act
        component.productSelectedID = expectedValue;
        
        //Assert
        expect(typeof(component.productSelectedID)).toBe(expectedValueTypeOf);
        expect(component.productSelectedID).toBe(expectedValue);
    });

    it('totalValue => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'number';
        let expectedValue: number = faker.number.int();

        //Act
        component.totalValue = expectedValue;
        
        //Assert
        expect(typeof(component.totalValue)).toBe(expectedValueTypeOf);
        expect(component.totalValue).toBe(expectedValue);
    });

    it('FormOfPaymentSelected => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'string';
        let expectedValue: string = faker.number.int().toString();
        
        //Act
        component.formOfPaymentSelected = expectedValue;
                
                //Assert
        expect(typeof(component.formOfPaymentSelected)).toBe(expectedValueTypeOf);
        expect(component.formOfPaymentSelected).toBe(expectedValue);
    });

    it('SelectedPaymentType => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'string';
        let expectedValue: string = faker.number.int().toString();
        
        //Act
        component.selectedPaymentType = expectedValue;
                
                //Assert
        expect(typeof(component.selectedPaymentType)).toBe(expectedValueTypeOf);
        expect(component.selectedPaymentType).toBe(expectedValue);
    });

    it('FormOfPaymentSelectedID => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'number';
        let expectedValue: number = faker.number.int();
        
        //Act
        component.formOfPaymentSelectedID = expectedValue;
                
                //Assert
        expect(typeof(component.formOfPaymentSelectedID)).toBe(expectedValueTypeOf);
        expect(component.formOfPaymentSelectedID).toBe(expectedValue);
    });

    it('paymentModel => TypeOf', () => {
        //Arrange
        let objPaymentModel: PaymentModel = new PaymentModel()
        objPaymentModel.paymentId = faker.number.int();
        objPaymentModel.commandId = faker.number.int();
        objPaymentModel.formOfPaymentId = faker.number.int();
        objPaymentModel.formOfPaymentName = faker.number.int().toString();
        objPaymentModel.paymentAmount = faker.number.int().toString();
        objPaymentModel.paymentType = faker.person.firstName();
        objPaymentModel.userId = faker.number.int();
        objPaymentModel.userName = faker.person.fullName();
        objPaymentModel.dateInsert = faker.date.anytime();
        objPaymentModel.dateUpdate = faker.date.anytime();
        let expectedValueTypeOf: string = 'object';

        //Act
        component.paymentModel = objPaymentModel;
        
        //Assert
        expect(typeof(component.paymentModel)).toBe(expectedValueTypeOf);
        expect(component.paymentModel).toBe(objPaymentModel);
    });

    //#endregion

    // #region [Methods]
    
    describe('Methods', () => {

        describe('Reply', () => {

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

        describe('ListFormOfPayment', () => {

            it('ListFormOfPayment => Success', fakeAsync(() => {
                //Arrange
                let spyOnComponent = spyOn(component, 'listFormOfPayment').and.callThrough();
        
                //Act
                component.listFormOfPayment();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
            }));
        });

        describe('ListCommand', () => {

            it('ListCommand => Success', fakeAsync(() => {
                //Arrange
                let spyOnComponent = spyOn(component, 'listCommand').and.callThrough();
        
                //Act
                component.listCommand();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
            }));
        });

        describe('paymentList', () => {

            it('paymentList => RouterString', fakeAsync(() => {
                //Arrange
                let expectedValue: string = 'payment-list';
                let spyOnComponent = spyOn(component, 'paymentList').and.callThrough();
                let spyOnRouter = spyOn(router, 'navigate').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(expectedValue);
                
                //Act
                component.paymentList();
        
                //Assert
                expect(component.routerString).toBe(expectedValue);
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(spyOnRouter).toHaveBeenCalledTimes(1);
            }));

            it('paymentList', fakeAsync(() => {
                //Arrange
                let routerString: string = 'payment-list';
                let spyOnComponent = spyOn(component, 'paymentList').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(routerString);
        
                //Act
                component.paymentList();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.routerString).toBe(routerString);
            }));

        });

        describe('AuthenticatedUser', () => {

            it('AuthenticatedUser => UserIdLogin', () => {
                //Arrange
                let userIdLogin: number = faker.number.int();
                let element = document.createElement('input');
                element.id = 'userIdLogin';
                element.name = 'userIdLogin';
                element.value = userIdLogin.toString();
                element.type="hidden";
                document.getElementById = jasmine.createSpy('userIdLogin').and.returnValue(element);
                let objPaymentModel: PaymentModel = new PaymentModel();
                objPaymentModel.userId = userIdLogin;
                let spyOnComponent = spyOn(component, 'authenticatedUser').and.callThrough();
                spyOnProperty(component, 'paymentModel', 'get').and.returnValue(objPaymentModel);
                
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
    
        describe('SuccessMessage', () => {

            it('SuccessMessage => MessageSuccess', () => {
                //Arrange
                let expectedValueTypeOf: string = 'undefined';
                let expectedValue: string = 'A categoria foi cadastrada com sucesso!';
                let spyOnComponent = spyOn(component, 'successMessage').and.callThrough();
                spyOnProperty(component, 'messageSuccess', 'get').and.returnValue(expectedValue);
                
                //Act
                let result = component.successMessage();
        
                //Assert
                expect(component.messageSuccess).toBe(expectedValue);
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });
        })
    
        describe('ErrorMessage', () => {

            it('ErrorMessage => MessageErro', () => {
                //Arrange
                let expectedValueTypeOf: string = 'undefined';
                let expectedValue: string = 'Erro ao cadastrar a categoria!';
                let spyOnComponent = spyOn(component, 'errorMessage').and.callThrough();
                spyOnProperty(component, 'messageErro', 'get').and.returnValue(expectedValue);
                
                //Act
                let result = component.errorMessage();
        
                //Assert
                expect(component.messageErro).toBe(expectedValue);
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });
        })

        describe('ChangeFormOfPayment', () => {

            it('ChangeFormOfPayment => Success', () => {
                //Arrange
                let spyOnComponent = spyOn(component, 'changeFormOfPayment').and.callThrough();
                const event = { target: { value: 'commandId' }};

                //Act
                component.changeFormOfPayment(event);

                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.changeFormOfPayment).toHaveBeenCalled();
            })
        })

        describe('ChangeCommand', () => {

            it('ChangeCommand => Success', () => {
                //Arrange
                let spyOnComponent = spyOn(component, 'changeCommand').and.callThrough();
                const event = { target: { value: 'commandId' }};

                //Act
                component.changeCommand(event);

                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.changeCommand).toHaveBeenCalled();
            })
        })
    });

    // #endregion
});