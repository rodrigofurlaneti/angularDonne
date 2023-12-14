import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { OrderCreateComponent } from './order-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { OrderModel } from 'src/interface/order.interface';
import { faker } from '@faker-js/faker';
import { OrderListComponent } from '../order-list/order-list.component';
import { OrderCreateService } from './order-create.service';
import { OrderCreateMockService } from 'test/order-create-mock.service';
import { ProductListService } from 'src/app/product/product-list/product-list.service';
import { ProductModel } from 'src/interface/product.interface';
import { ProductListMockService } from 'test/product-list-mock.service';
import { CommandListService } from 'src/app/command/command-list/command-list.service';
import { CommandListMockService } from 'test/command-list-mock.service';
import { CommandModel } from 'src/interface/command.interface';
import { ProductUpdateService } from 'src/app/product/product-update/product-update.service';
import { ProductUpdateMockService } from 'test/product-update-mock.service';

describe('OrderCreateComponent', () => {
    let component: OrderCreateComponent;
    let fixture: ComponentFixture<OrderCreateComponent>;
    let router: Router;
    let service: OrderCreateService;
    let orderCreateService: OrderCreateService;
    let productListService: ProductListService;
    let commandListService: CommandListService;
    let productUpdateService: ProductUpdateService;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'order-list', component: OrderListComponent}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderCreateComponent],
            providers: [
                { provide: OrderCreateService, useClass: OrderCreateMockService },
                { provide: ProductListService, useClass: ProductListMockService },
                { provide: CommandListService, useClass: CommandListMockService },
                { provide: ProductUpdateService, useClass: ProductUpdateMockService }
            
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
        fixture = TestBed.createComponent(OrderCreateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        service = TestBed.inject(OrderCreateService);
        orderCreateService = TestBed.inject(OrderCreateService);
        productListService = TestBed.inject(ProductListService);
        productUpdateService = TestBed.inject(ProductUpdateService);
        commandListService = TestBed.inject(CommandListService);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Create => Order create component', () => {
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

    it('OrderModel => TypeOf', () => {
        //Arrange
        var objOrderModel: OrderModel = new OrderModel()
        objOrderModel.orderId = faker.number.int();
        objOrderModel.amount = faker.number.int();
        objOrderModel.buyerName = faker.person.firstName();
        objOrderModel.commandId = faker.number.int();
        objOrderModel.productId = faker.number.int();
        objOrderModel.productName = faker.person.firstName();
        objOrderModel.salePrice = faker.finance.amount().toString();
        objOrderModel.totalSalePrice = faker.finance.amount().toString();
        objOrderModel.userId = faker.number.int();
        objOrderModel.userName = faker.person.fullName();
        objOrderModel.dateInsert = faker.date.anytime();
        objOrderModel.dateUpdate = faker.date.anytime();
        let expectedValueTypeOf: string = 'object';

        //Act
        component.orderModel = objOrderModel;
        
        //Assert
        expect(typeof(component.orderModel)).toBe(expectedValueTypeOf);
        expect(component.orderModel).toBe(objOrderModel);
    });

    //#endregion

    // #region [Methods]
    
    describe('Methods', () => {

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

        describe('OrderList', () => {

            it('OrderList => RouterString', fakeAsync(() => {
                //Arrange
                let expectedValue: string = 'order-list';
                var spyOnComponent = spyOn(component, 'orderList').and.callThrough();
                var spyOnRouter = spyOn(router, 'navigate').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(expectedValue);
                
                //Act
                component.orderList();
        
                //Assert
                expect(component.routerString).toBe(expectedValue);
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(spyOnRouter).toHaveBeenCalledTimes(1);
            }));

            it('OrderList', fakeAsync(() => {
                //Arrange
                let routerString: string = 'order-list';
                var spyOnComponent = spyOn(component, 'orderList').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(routerString);
        
                //Act
                component.orderList();
        
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
                var objOrderModel: OrderModel = new OrderModel();
                objOrderModel.userId = userIdLogin;
                var spyOnComponent = spyOn(component, 'authenticatedUser').and.callThrough();
                spyOnProperty(component, 'orderModel', 'get').and.returnValue(objOrderModel);
                
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
    
        describe('SuccessMessage', () => {

            it('SuccessMessage => MessageSuccess', () => {
                //Arrange
                let expectedValueTypeOf: string = 'undefined';
                let expectedValue: string = 'A categoria foi cadastrada com sucesso!';
                var spyOnComponent = spyOn(component, 'successMessage').and.callThrough();
                spyOnProperty(component, 'messageSuccess', 'get').and.returnValue(expectedValue);
                
                //Act
                var result = component.successMessage();
        
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

        describe('Calculate', () => {

            it('Calculate => Success', () => {
                //Arrange
                let expectedValue : number = 0;
                let expectedValueOne : number = faker.number.int();
                let expectedValueTwo : number = faker.number.int();
                expectedValue = expectedValueOne * expectedValueTwo; 
                var spyOnComponent = spyOn(component, 'calculate').and.callThrough();
                spyOnProperty(component, 'totalValue', 'get').and.returnValue(expectedValue);
                
                //Act
                var result = component.calculate();
        
                //Assert
                expect(component.totalValue).toBe(expectedValue);
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
            });
        })

        describe('ListCommand', () => {

            it('ListCommand => Success => Subscribe', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'listCommand').and.callThrough();
                var com: CommandModel = new CommandModel(); 
                com.userName
                const response = [
                    {
                        "amount": "1",
                        "buyerId": "1",
                        "buyerName": "Product",
                        "userId": "1",
                        "userName": "Product",
                        "commandId": "1",
                        "salePrice": "29.90",
                        "dateInsert": "",
                        "dateUpdate": ""
                    }
                ];
                
                commandListService.list().subscribe((data) => {
                    expect(data).toEqual(response);
                });

                //Act
                component.listCommand();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.listCommand).toHaveBeenCalled();
            });
        })

        describe('ListProduct', () => {

            it('ListProduct => Success => Subscribe', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'listProducts').and.callThrough();
                const response = [
                    {
                        "categoryId": "1",
                        "categoryName": "Administrador",
                        "costPrice": "10.99",
                        "minimumStockQuantity": "20",
                        "needToPrint": "true",
                        "productId": "1",
                        "productName": "Produto",
                        "quantityStock": "10",
                        "quantityBuy": "10",
                        "salePrice": "",
                        "dateInsert": "",
                        "dateUpdate": ""
                    }
                ];
                
                productListService.list().subscribe((data) => {
                    expect(data).toEqual(response);
                });

                //Act
                component.listProducts();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.listProducts).toHaveBeenCalled();
            });
        })

        describe('ChangeCommand', () => {

            it('ChangeCommand => Success', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'changeCommand').and.callThrough();
                const event = { target: { value: 'commandId' }};

                //Act
                component.changeCommand(event);

                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.changeCommand).toHaveBeenCalled();
            })
        })

        describe('ChangeProduct', () => {

            it('ChangeProduct => Success => Subscribe', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'changeProduct').and.callThrough();
                const event = { target: { value: 'commandId' }};
                const response = [
                    {
                        "productId": 1,
                        "productName": "Produto",
                        "categoryId": "1",
                        "categoryName": "Categoria",
                        "costPrice": "10.00",
                        "salePrice": "20.00",
                        "quantityStock": 10,
                        "minimumStockQuantity": 5,
                        "totalValueCostOfInventory": "100.00",
                        "totalValueSaleStock": "200.00",
                        "dateInsert": "",
                        "dateUpdate": "",
                        "needToPrint": true,
                        "userId": 1,
                        "userName": "Administrador",
                        "status": true,
                        "quantityToBuy": 5,
                        "totalValueOfLastPurchase": "50.00"
                    }
                ];
                
                productUpdateService.getById(1).subscribe((data) => {
                    expect(data).toEqual(response);
                });

                //Act
                component.changeProduct(event);
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.changeProduct).toHaveBeenCalled();
            })
        })

        describe('Save', () => {

            it('Save => Success => Subscribe', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'save').and.callThrough();
                var order: OrderModel = new OrderModel();
                order.amount = 1;
                order.buyerName = 'Administrador';
                order.commandId = 1;
                order.orderId = 1;
                order.productId = 1;
                order.productName = "Produto";
                order.salePrice = "20.00";
                order.totalSalePrice = "20.00";
                order.userId = 1;
                order.userName = "Administrador";
                const response = [
                    {
                        "amount": 1,
                        "buyerName": "Produto",
                        "commandId": 1,
                        "orderId": 1,
                        "productId": 1,
                        "productName": "Produto",
                        "salePrice": "20.00",
                        "totalSalePrice":  "20.00",
                        "userId": 1,
                        "userName": "Administrador"
                    }
                ];
                
                orderCreateService.save(order).subscribe((data) => {
                    expect(data).toEqual(response);
                });

                //Act
                component.save();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.save).toHaveBeenCalled();
            })
        })

        
    });

    // #endregion
});