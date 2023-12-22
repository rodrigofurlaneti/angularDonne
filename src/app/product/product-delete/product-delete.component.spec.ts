import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes} from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDeleteComponent } from './product-delete.component';
import { faker } from '@faker-js/faker';
import { ProductModel } from 'src/interface/product.interface';
import { of } from 'rxjs';
import { ProductDeleteService } from './product-delete.service';

describe('ProductDeleteComponent', () => {
    let component: ProductDeleteComponent;
    let fixture: ComponentFixture<ProductDeleteComponent>;
    let service: ProductDeleteService;
    let router: Router;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'product-list', component: ProductListComponent},
        {path: '**', redirectTo: 'themen', pathMatch: 'full'}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductDeleteComponent],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(ProductDeleteComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        service = TestBed.inject(ProductDeleteService);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Create => Product delete component', () => {
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
                let objClickedRows: Set<ProductModel> = new Set<ProductModel>();

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
                    var objProductModel: ProductModel = new ProductModel()
                    objProductModel.categoryId = faker.number.int();
                    objProductModel.categoryName = faker.person.fullName();
                    objProductModel.costPrice = faker.phone.number().toString();
                    objProductModel.minimumStockQuantity = faker.number.int();
                    objProductModel.needToPrint = true;
                    objProductModel.productId = faker.number.int();
                    objProductModel.productName = faker.phone.number().toString();
                    objProductModel.quantityStock = faker.number.int();
                    objProductModel.quantityToBuy = faker.number.int();
                    objProductModel.dateInsert = faker.date.anytime();
                    objProductModel.dateUpdate = faker.date.anytime();
                    objProductModel.userId = faker.number.int();
                    objProductModel.userName = faker.person.fullName();
                    var spyOnComponent = spyOn(component, 'list').and.callThrough();
                    var getSpy = spyOn(service, 'list').and.returnValue(of(objProductModel));
                    service.list().subscribe((data) => {
                        expect(data).toEqual(objProductModel);
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
                    let userApiService = jasmine.createSpyObj('ProductDeleteComponent', ['delete']);
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
                    let ProductId : number = faker.number.int();
                    var objProductModel : ProductModel = new ProductModel()
                    objProductModel.categoryId = faker.number.int();
                    objProductModel.categoryName = faker.person.fullName();
                    objProductModel.costPrice = faker.phone.number().toString();
                    objProductModel.minimumStockQuantity = faker.number.int();
                    objProductModel.needToPrint = true;
                    objProductModel.productId = faker.number.int();
                    objProductModel.productName = faker.phone.number().toString();
                    objProductModel.quantityStock = faker.number.int();
                    objProductModel.quantityToBuy = faker.number.int();
                    objProductModel.dateInsert = faker.date.anytime();
                    objProductModel.dateUpdate = faker.date.anytime();
                    objProductModel.userId = faker.number.int();
                    objProductModel.userName = faker.person.fullName();
                    var spyOnComponent = spyOn(component, 'delete').and.callThrough();
                    var getSpy = spyOn(service, 'delete').and.returnValue(of(objProductModel));
                    service.delete(ProductId).subscribe((data) => {
                        expect(data).toEqual(objProductModel);
                    });
    
                    //Act
                    component.delete(ProductId);
            
                    //Assert
                    expect(spyOnComponent).toHaveBeenCalledTimes(1);
                    expect(component.delete).toHaveBeenCalled();
                });


            });
        });
    
        // #endregion
    });