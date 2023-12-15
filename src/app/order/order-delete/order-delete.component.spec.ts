import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes} from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { OrderListComponent } from '../order-list/order-list.component';
import { OrderDeleteComponent } from './order-delete.component';
import { faker } from '@faker-js/faker';
import { OrderModel } from 'src/interface/order.interface';
import { of, throwError } from 'rxjs';
import { OrderDeleteService } from './order-delete.service';

describe('OrderDeleteComponent', () => {
    let component: OrderDeleteComponent;
    let fixture: ComponentFixture<OrderDeleteComponent>;
    let service: OrderDeleteService;
    let router: Router;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'Order-list', component: OrderListComponent},
        {path: '**', redirectTo: 'themen', pathMatch: 'full'}
      ];

          // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderDeleteComponent],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(OrderDeleteComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        service = TestBed.inject(OrderDeleteService);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Create => Order delete component', () => {
            expect(component).toBeTruthy();
        });

    });

    // #endregion

        //#region [Properties]

        describe('Property private', () => {

            it('Status => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'string';
                let objStatus: string = faker.person.fullName();

                //Act
                component.status = objStatus;
                
                //Assert
                expect(typeof(component.status)).toBe(expectedValueTypeOf);
                expect(component.status).toEqual(objStatus);
            });

            it('Ids => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'number';
                let objIds: number = faker.number.int();

                //Act
                component.ids = objIds;
                
                //Assert
                expect(typeof(component.ids)).toBe(expectedValueTypeOf);
                expect(component.ids).toEqual(objIds);
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

            it('MessageTime => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'number';
                let expectedValue: number = 3000;

                //Act
                component.messageTime = expectedValue;
                
                //Assert
                expect(typeof(component.messageTime)).toBe(expectedValueTypeOf);
                expect(component.messageTime).toEqual(expectedValue);
            });
        });
        
        // #endregion

        // #region [Methods]
        describe('Methods', () => {

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
                    var spyOnComponent = spyOn(component, 'list').and.callThrough();
                    var getSpy = spyOn(service, 'list').and.returnValue(of(order));
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

            describe('Delete', () => {
    
                it('Delete => Success', () => {
                    //Arrange
                    let mockId: number = faker.number.int();
                    let expectedValueMessageSuccess: string = 'O cliente foi excluido com sucesso!';
                    let expectedValueStatus: string = 'Delete successful';
                    var spyOnComponent = spyOn(component, 'delete').and.callThrough();
                    spyOnProperty(component, 'messageSuccess', 'get').and.returnValue(expectedValueMessageSuccess);
                    spyOnProperty(component, 'status', 'get').and.returnValue(expectedValueStatus);
                    let usersMock = [
                        {status: 'Delete successful'}
                      ];
                    let userApiService = jasmine.createSpyObj('OrderDeleteComponent', ['delete']);
                    userApiService.delete.and.returnValue(of(usersMock));

                    //Act
                    component.delete(mockId);
            
                    //Assert
                    expect(component.messageSuccess).toBe(expectedValueMessageSuccess);
                    expect(component.status).toBe(expectedValueStatus);
                    expect(spyOnComponent).toHaveBeenCalledTimes(1);
                    expect(component.delete).toHaveBeenCalled();
                });

                it('Delete => Success => Subscribe', () => {
                    //Arrange
                    let OrderId : number = faker.number.int();
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
                    var spyOnComponent = spyOn(component, 'delete').and.callThrough();
                    var getSpy = spyOn(service, 'delete').and.returnValue(of(order));
                    service.delete(OrderId).subscribe((data) => {
                        expect(data).toEqual(order);
                    });
    
                    //Act
                    component.delete(OrderId);
            
                    //Assert
                    expect(spyOnComponent).toHaveBeenCalledTimes(1);
                    expect(component.delete).toHaveBeenCalled();
                });


            });
        });
    
        // #endregion
    });