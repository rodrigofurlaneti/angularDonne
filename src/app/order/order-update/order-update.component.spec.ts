import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { OrderUpdateComponent } from './order-update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OrderModel } from 'src/interface/order.interface';
import { faker } from '@faker-js/faker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { of } from 'rxjs';
import { OrderUpdateService } from './order-update.service';
import { OrderUpdateMockService } from 'test/order-update-mock.service';
import { BuyerModel } from 'src/interface/buyer.interface';
import { BuyerListService } from 'src/app/buyer/buyer-list/buyer-list.service';
import { BuyerListMockService } from 'test/buyer-list-mock.service';
import { ProductModel } from 'src/interface/product.interface';
import { ProductListService } from 'src/app/product/product-list/product-list.service';
import { ProductListMockService } from 'test/product-list-mock.service';

describe('OrderUpdateComponent', () => {
    let component: OrderUpdateComponent;
    let fixture: ComponentFixture<OrderUpdateComponent>;
    let router: Router;
    let service: OrderUpdateService;
    let orderUpdateService: OrderUpdateService;
    let buyerListService: BuyerListService;
    let productListService: ProductListService;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'order-update', component: OrderUpdateComponent}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderUpdateComponent],
            providers: [
                { provide: OrderUpdateService, useClass: OrderUpdateMockService },
                { provide: BuyerListService, useClass: BuyerListMockService },
                { provide: ProductListService, useClass: ProductListMockService }
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
        fixture = TestBed.createComponent(OrderUpdateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        service = TestBed.inject(OrderUpdateService);
        orderUpdateService = TestBed.inject(OrderUpdateService);
        buyerListService = TestBed.inject(BuyerListService);
        productListService = TestBed.inject(ProductListService);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Update => Order Update component', () => {
            expect(component).toBeTruthy();
        });

    });

    // #endregion

           //#region [Properties]

           describe('Property private', () => {

            it('OrderModel => TypeOf', () => {
                //Arrange
                let order: OrderModel = new OrderModel();
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
        
                //Act
                component.orderModel = order;
                
                //Assert
                expect(component.orderModel.orderId).toBe(order.orderId);
                expect(component.orderModel.commandId).toBe(order.commandId);
                expect(component.orderModel.buyerName).toBe(order.buyerName);
                expect(component.orderModel.amount).toBe(order.amount);
                expect(component.orderModel.dateInsert).toBe(order.dateInsert);
                expect(component.orderModel.dateUpdate).toBe(order.dateUpdate);
                expect(component.orderModel.userId).toBe(order.userId);
                expect(component.orderModel.userName).toBe(order.userName);
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
                let objClickedRows: Set<OrderModel> = new Set<OrderModel>();

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
                let expectedValue: OrderModel[] = [];
        
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
                let order: OrderModel = new OrderModel()
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
                let spyOnComponent = spyOn(component, 'list').and.callThrough();
                let getSpy = spyOn(service, 'list').and.returnValue(of(order));
                service.list().subscribe((data) => {
                    expect(data).toEqual(order);
                });

                //Act
                component.list();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.list).toHaveBeenCalled();
            });

            
        });        

        describe('ListBuyer', () => {
    
            it('ListBuyer => Success', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'listBuyer').and.callThrough();

                //Act
                component.listBuyer();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.listBuyer).toHaveBeenCalled();
            });

            it('ListBuyer => Success => Subscribe', () => {
                //Arrange
                let buyer: BuyerModel = new BuyerModel()
                buyer.buyerAddress = 'Rua Teste, 12345';
                buyer.buyerId = '1';
                buyer.buyerName = 'Administrador';
                buyer.buyerPhone = '11995882409';
                buyer.userId = 1;
                buyer.userName = "Administrador";
                let spyOnComponent = spyOn(component, 'listBuyer').and.callThrough();
                let getSpy = spyOn(buyerListService, 'list').and.returnValue(of(buyer));
                service.list().subscribe((data) => {
                    expect(data).toEqual(buyer);
                });

                //Act
                component.listBuyer();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.listBuyer).toHaveBeenCalled();
            });

            
        });     

        describe('ListProducts', () => {
    
            it('ListProducts => Success', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'listProducts').and.callThrough();

                //Act
                component.listProducts();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.listProducts).toHaveBeenCalled();
            });

            it('ListProducts => Success => Subscribe', () => {
                //Arrange
                let product: ProductModel = new ProductModel()
                product.categoryId = 1;
                product.categoryName = 'Categoria'
                product.userId = 1;
                product.userName = 'Administrador';
                product.costPrice = '10.00';
                product.minimumStockQuantity = 10;
                product.needToPrint = true;
                product.productId = 1;
                product.productName = 'Produto';
                product.quantityStock = 50;
                product.quantityToBuy = 0;
                product.salePrice = '20.00';
                product.status = true;
                product.totalValueCostOfInventory = '500.00';
                product.totalValueOfLastPurchase = '10.00';
                product.totalValueSaleStock = '1000.00';
                let spyOnComponent = spyOn(component, 'listProducts').and.callThrough();
                let getSpy = spyOn(productListService, 'list').and.returnValue(of(product));
                service.list().subscribe((data) => {
                    expect(data).toEqual(product);
                });

                //Act
                component.listProducts();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.listProducts).toHaveBeenCalled();
            });

            
        });  
        
        describe('ShowUpdateButton', () => {
    
            it('ShowUpdateButton => Success', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'showUpdateButton').and.callThrough();

                //Act
                component.showUpdateButton();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.showUpdateButton).toHaveBeenCalled();
            });
            
        });  

        describe('Change', () => {
    
            it('Change => Success', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'change').and.callThrough();
                const event = { target: { value: 42 }};

                //Act
                component.change(event);
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.change).toHaveBeenCalled();
            });
            
        }); 
        
        describe('ChangeProduct', () => {
    
            it('ChangeProduct => Success', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'changeProduct').and.callThrough();
                const event = { target: { value: 42 }};

                //Act
                component.changeProduct(event);
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.changeProduct).toHaveBeenCalled();
            });
            
        }); 

        describe('GetById', () => {
    
            it('GetById => Success', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'getById').and.callThrough();
                const event = { target: { value: 42 }};

                //Act
                component.getById(42);
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.getById).toHaveBeenCalled();
            });
            
        }); 
    });  
    // #endregion
});