import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BuyerUpdateComponent } from './buyer-update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BuyerModel } from 'src/interface/buyer.interface';
import { faker } from '@faker-js/faker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BuyerUpdateService } from './buyer-update.service';

describe('BuyerUpdateComponent', () => {
    let component: BuyerUpdateComponent;
    let fixture: ComponentFixture<BuyerUpdateComponent>;
    let router: Router;
    let service: BuyerUpdateService;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'buyer-update', component: BuyerUpdateComponent}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BuyerUpdateComponent],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(BuyerUpdateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        service = TestBed.inject(BuyerUpdateService);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Update => Buyer Update component', () => {
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
                let objClickedRows: Set<BuyerModel> = new Set<BuyerModel>();

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
                let expectedValue: BuyerModel[] = [];
        
                //Act
                component.dataSource = expectedValue;
                
                //Assert
                expect(typeof(component.dataSource)).toBe(expectedValueTypeOf);
                expect(component.dataSource).toEqual(expectedValue);
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
                var spyOnComponent = spyOn(component, 'update').and.callThrough();

                //Act
                component.update();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.update).toHaveBeenCalled();
            });

            it('Update => Success => Subscribe', () => {
                //Arrange
                var objBuyerModel: BuyerModel = new BuyerModel()
                objBuyerModel.buyerAddress = faker.location.streetAddress();
                objBuyerModel.buyerName = faker.person.fullName();
                objBuyerModel.buyerPhone = faker.phone.number().toString();
                objBuyerModel.dateInsert = faker.date.anytime();
                objBuyerModel.dateUpdate = faker.date.anytime();
                objBuyerModel.userId = faker.number.int();
                objBuyerModel.userName = faker.person.fullName();
                var spyOnComponent = spyOn(component, 'update').and.callThrough();
                var getSpy = spyOn(service, 'update').and.returnValue(of(objBuyerModel));
                spyOnProperty(component, 'buyerModel').and.returnValue(objBuyerModel);
                service.update(objBuyerModel).subscribe((data) => {
                    expect(data).toEqual(objBuyerModel);
                });

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

        describe('CheckFields', () => {

            it('CheckFields => Success', () => {
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
        
                let expectedValueTypeOf: string = 'object';
        
                //Act
                var result = component.checkFields(objBuyerModel);
                        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            })

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
        });
    
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

        });

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
        });

        describe('List', () => {
    
            it('List => Success', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'list').and.callThrough();

                //Act
                component.list();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.list).toHaveBeenCalled();
            });

            it('List => Success => Subscribe', () => {
                //Arrange
                var objBuyerModel: BuyerModel = new BuyerModel()
                objBuyerModel.buyerAddress = faker.location.streetAddress();
                objBuyerModel.buyerName = faker.person.fullName();
                objBuyerModel.buyerPhone = faker.phone.number().toString();
                objBuyerModel.dateInsert = faker.date.anytime();
                objBuyerModel.dateUpdate = faker.date.anytime();
                objBuyerModel.userId = faker.number.int();
                objBuyerModel.userName = faker.person.fullName();
                var spyOnComponent = spyOn(component, 'list').and.callThrough();
                var getSpy = spyOn(service, 'list').and.returnValue(of(objBuyerModel));
                service.list().subscribe((data) => {
                    expect(data).toEqual(objBuyerModel);
                });

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
                var objBuyerModel: BuyerModel = new BuyerModel()
                objBuyerModel.buyerAddress = faker.address.streetAddress();
                objBuyerModel.buyerId = faker.number.int().toString();
                objBuyerModel.buyerName = faker.person.fullName();
                objBuyerModel.buyerPhone = faker.phone.number().toString();
                objBuyerModel.dateInsert = faker.date.anytime();
                objBuyerModel.dateUpdate = faker.date.anytime();
                objBuyerModel.userId = faker.number.int();
                objBuyerModel.userName = faker.person.fullName();
                let idFake : number = faker.number.int();
                var spyOnComponent = spyOn(component, 'getById').and.callThrough();
                spyOnProperty(component, 'buyerModel', 'get').and.returnValue(objBuyerModel);
                
                //Act
                component.getById(idFake);
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.buyerModel).toEqual(objBuyerModel);

            });

            it('GetByIb => Success => Subscribe', () => {
            
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
                let idFake : number = faker.number.int();
                var spyOnComponent = spyOn(component, 'getById').and.callThrough();
                spyOnProperty(component, 'buyerModel', 'get').and.returnValue(objBuyerModel);
                var getSpy = spyOn(service, 'getById').and.returnValue(of(objBuyerModel));
                
                //Act
                component.getById(idFake);
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.buyerModel).toEqual(objBuyerModel);
                service.getById(idFake).subscribe((data) => {
                    expect(data).toEqual(objBuyerModel);
                });
               expect(component.getById).toHaveBeenCalled();
            });
        });
    });  
    // #endregion
});