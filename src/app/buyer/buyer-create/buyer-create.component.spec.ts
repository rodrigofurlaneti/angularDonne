import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BuyerCreateComponent } from './buyer-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BuyerModel } from 'src/interface/buyer.interface';
import { faker } from '@faker-js/faker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {Router, Routes} from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { BuyerListComponent } from '../buyer-list/buyer-list.component';

describe('BuyerCreateComponent', () => {
    let component: BuyerCreateComponent;
    let fixture: ComponentFixture<BuyerCreateComponent>;
    let router: Router;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'buyer-list', component: BuyerListComponent},
        {path: '**', redirectTo: 'themen', pathMatch: 'full'}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BuyerCreateComponent],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(BuyerCreateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Create => Buyer create component', () => {
            expect(component).toBeTruthy();
        });

    });

    // #endregion

    //#region [Properties]

    describe('Property private', () => {

        it('BuyerModel => TypeOf', () => {
            //Arrange
            var objBuyerModel: BuyerModel = new BuyerModel()
            objBuyerModel.buyerAddress = faker.address.streetAddress();
            objBuyerModel.buyerId = faker.number.int().toString();
            objBuyerModel.buyerName = faker.person.fullName();
            objBuyerModel.buyerPhone = faker.phone.number().toString();
            objBuyerModel.dateInsert = faker.date.anytime();
            objBuyerModel.dateUpdate = faker.date.anytime();
            objBuyerModel.userId = faker.number.int();
            objBuyerModel.userName = faker.person.fullName();
    
            //Act
            component.buyerModel = objBuyerModel;
            
            //Assert
            expect(component.buyerModel.buyerAddress).toBe(objBuyerModel.buyerAddress);
            expect(component.buyerModel.buyerId).toBe(objBuyerModel.buyerId);
            expect(component.buyerModel.buyerName).toBe(objBuyerModel.buyerName);
            expect(component.buyerModel.buyerPhone).toBe(objBuyerModel.buyerPhone);
            expect(component.buyerModel.dateInsert).toBe(objBuyerModel.dateInsert);
            expect(component.buyerModel.dateUpdate).toBe(objBuyerModel.dateUpdate);
            expect(component.buyerModel.userId).toBe(objBuyerModel.userId);
            expect(component.buyerModel.userName).toBe(objBuyerModel.userName);
            expect(typeof(component.buyerModel.buyerAddress)).toBe('string');
            expect(typeof(component.buyerModel.buyerId)).toBe('string');
            expect(typeof(component.buyerModel.buyerName)).toBe('string');
            expect(typeof(component.buyerModel.buyerPhone)).toBe('string');
            expect(typeof(component.buyerModel.dateInsert)).toBe('object');
            expect(typeof(component.buyerModel.dateUpdate)).toBe('object');
            expect(typeof(component.buyerModel.userId)).toBe('number');
            expect(typeof(component.buyerModel.userName)).toBe('string');
        });

        it('MessageTime => TypeOf', () => {
            //Arrange
            let expectedValue: number = 3000;
            let expectedValueTypeOf: string = 'number';

            //Act
            component.messageTime = expectedValue;
            
            //Assert
            expect(component.messageTime).toBe(expectedValue);
            expect(typeof(component.messageTime)).toBe(expectedValueTypeOf);
        });

        it('MessageTime => Empty', () => {
            //Arrange
            let expectedValue: number = 3000;
    
            //Act
            //Assert
            expect(component.messageTime).toBe(expectedValue);
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

        it('MessageBuyerAddress => TypeOf', () => {
            //Arrange
            let expectedValueTypeOf: string = 'string';
    
            //Act
            component.messageBuyerAddress = expectedValueTypeOf;
            
            //Assert
            expect(typeof(component.messageBuyerAddress)).toBe(expectedValueTypeOf);
        });

        it('MessageBuyerName => TypeOf', () => {
            //Arrange
            let expectedValueTypeOf: string = 'string';
    
            //Act
            component.messageBuyerName = expectedValueTypeOf;
            
            //Assert
            expect(typeof(component.messageBuyerName)).toBe(expectedValueTypeOf);
        });
    
        it('MessageBuyerPhone => TypeOf', () => {
            //Arrange
            let expectedValueTypeOf: string = 'string';
    
            //Act
            component.messageBuyerPhone = expectedValueTypeOf;
            
            //Assert
            expect(typeof(component.messageBuyerPhone)).toBe(expectedValueTypeOf);
        });
    });

    //#endregion

    // #region [Methods]
    
    describe('Methods', () => {

        describe('Save', () => {

            it('Save => BuyerName => Empty', () => {
                //Arrange
                let messageBuyerName: string = 'Não está preenchido o campo nome do cliente!';
                var spyOnComponent = spyOn(component, 'save').and.callThrough();
                var objBuyerModel: BuyerModel = new BuyerModel()
                objBuyerModel.buyerName = '';
                spyOnProperty(component, 'buyerModel', 'get').and.returnValue(objBuyerModel);
                spyOnProperty(component, 'messageBuyerName', 'get').and.returnValue(messageBuyerName);
                
                //Act
                component.save();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.messageBuyerName).toBe(messageBuyerName);
            });
        
            it('Save => BuyerAddress => Empty', () => {
                //Arrange
                let messageBuyerAddress: string = 'Não está preenchido o campo endereço do cliente!'; 
                var spyOnComponent = spyOn(component, 'save').and.callThrough();
                var objBuyerModel: BuyerModel = new BuyerModel()
                objBuyerModel.buyerName = faker.person.fullName();
                objBuyerModel.buyerAddress = '';
                spyOnProperty(component, 'buyerModel', 'get').and.returnValue(objBuyerModel);
                spyOnProperty(component, 'messageBuyerAddress', 'get').and.returnValue(messageBuyerAddress);
                
                //Act
                component.save();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.messageBuyerAddress).toBe(messageBuyerAddress);
            });
        
            it('Save => BuyerPhone => Empty', () => {
                //Arrange
                let messageBuyerPhone: string = 'Não está preenchido o campo telefone do cliente!'; 
                var spyOnComponent = spyOn(component, 'save').and.callThrough();
                var objBuyerModel: BuyerModel = new BuyerModel()
                objBuyerModel.buyerName = faker.person.fullName();
                objBuyerModel.buyerAddress = faker.address.streetAddress();
                objBuyerModel.buyerPhone = '';
                spyOnProperty(component, 'buyerModel', 'get').and.returnValue(objBuyerModel);
                spyOnProperty(component, 'messageBuyerPhone', 'get').and.returnValue(messageBuyerPhone);
                
                //Act
                component.save();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.messageBuyerPhone).toBe(messageBuyerPhone);
            });
        
            it('Save => BuyerModel => Populate', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'save').and.callThrough();
                var objBuyerModel: BuyerModel = new BuyerModel()
                objBuyerModel.buyerName = faker.person.fullName();
                objBuyerModel.buyerAddress = faker.location.streetAddress();
                objBuyerModel.buyerPhone = faker.phone.number();
                spyOnProperty(component, 'buyerModel', 'get').and.returnValue(objBuyerModel);
                
                //Act
                component.save();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.buyerModel.buyerName).toBe(objBuyerModel.buyerName);
                expect(component.buyerModel.buyerAddress).toBe(objBuyerModel.buyerAddress);
                expect(component.buyerModel.buyerPhone).toBe(objBuyerModel.buyerPhone);
            });

            it('Save => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'function';
        
                //Act
                var result = component.save;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });

        });

        describe('BuyerList', () => {

            it('BuyerList => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'function';
        
                //Act
                var result = component.buyerList;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });

            it('BuyerList => RouterString', fakeAsync(() => {
                //Arrange
                let expectedValue: string = 'buyer-list';
                var spyOnComponent = spyOn(component, 'buyerList').and.callThrough();
                var spyOnRouter = spyOn(router, 'navigate').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(expectedValue);
                
                //Act
                component.buyerList();
        
                //Assert
                expect(component.routerString).toBe(expectedValue);
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(spyOnRouter).toHaveBeenCalledTimes(1);
            }));

            it('BuyerList', () => {
                //Arrange
                let routerString: string = 'buyer-list';
                var spyOnComponent = spyOn(component, 'buyerList').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(routerString);
        
                //Act
                var result = component.buyerList;
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(0);
                expect(component.routerString).toBe(routerString);
            });
                
        })

        describe('Reply', () => {

            it('Reply => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'function';
        
                //Act
                var result = component.reply;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });
        
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
    
        describe('SuccessMessage', () => {

            it('SuccessMessage => MessageSuccess', () => {
                //Arrange
                let expectedValue: string = 'O cliente foi cadastrado com sucesso!';
                var spyOnComponent = spyOn(component, 'successMessage').and.callThrough();
                spyOnProperty(component, 'messageSuccess', 'get').and.returnValue(expectedValue);
                
                //Act
                component.successMessage();
        
                //Assert
                expect(component.messageSuccess).toBe(expectedValue);
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
            });

            it('SuccessMessage => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'function';
        
                //Act
                var result = component.successMessage;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });

            it('SuccessMessage', () => {
                //Arrange
                let messageSuccess: string = 'O cliente foi cadastrado com sucesso!';
                var spyOnComponent = spyOn(component, 'successMessage').and.callThrough();
                spyOnProperty(component, 'messageSuccess', 'get').and.returnValue(messageSuccess);
        
                //Act
                var result = component.successMessage;
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(0);
                expect(component.messageSuccess).toBe(messageSuccess);
            });
        })
    
        describe('ErrorMessage', () => {

            it('ErrorMessage => MessageErro', () => {
                //Arrange
                let expectedValue: string = 'Erro ao cadastrar o cliente!';
                var spyOnComponent = spyOn(component, 'errorMessage').and.callThrough();
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
                var result = component.errorMessage;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });
        
            it('ErrorMessage', () => {
                //Arrange
                let messageErro: string = 'Erro ao cadastrar o cliente';
                var spyOnComponent = spyOn(component, 'errorMessage').and.callThrough();
                spyOnProperty(component, 'messageErro', 'get').and.returnValue(messageErro);
        
                //Act/
                var result = component.errorMessage;
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(0);
                expect(component.messageErro).toBe(messageErro);
            });

        })

        describe('AuthenticatedUser', () => {

            it('AuthenticatedUser => UserIdLogin', () => {
                //Arrange
                let userIdLogin: string = faker.number.int().toString();
                var element = document.createElement('input');
                element.id = 'userIdLogin';
                element.name = 'userIdLogin';
                element.value = userIdLogin;
                element.type="hidden";
                document.getElementById = jasmine.createSpy('userIdLogin').and.returnValue(element);
                var objBuyerModel: BuyerModel = new BuyerModel();
                objBuyerModel.buyerId = userIdLogin;
                var spyOnComponent = spyOn(component, 'authenticatedUser').and.callThrough();
                spyOnProperty(component, 'buyerModel', 'get').and.returnValue(objBuyerModel);
                
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
    });

    // #endregion
});