import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ProductUpdateComponent } from './product-update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductModel } from 'src/interface/product.interface';
import { faker } from '@faker-js/faker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { of } from 'rxjs';
import { ProductUpdateService } from './product-update.service';

describe('ProductUpdateComponent', () => {
    let component: ProductUpdateComponent;
    let fixture: ComponentFixture<ProductUpdateComponent>;
    let router: Router;
    let service: ProductUpdateService;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'Product-update', component: ProductUpdateComponent}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductUpdateComponent],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(ProductUpdateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        service = TestBed.inject(ProductUpdateService);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Update => Product Update component', () => {
            expect(component).toBeTruthy();
        });

    });

    // #endregion

           //#region [Properties]

           describe('Property private', () => {

            it('ProductModel => TypeOf', () => {
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

                //Act
                component.productModel = objProductModel;
                
                //Assert
                expect(component.productModel.categoryId).toBe(objProductModel.categoryId);
                expect(component.productModel.categoryName).toBe(objProductModel.categoryName);
                expect(component.productModel.costPrice).toBe(objProductModel.costPrice);
                expect(component.productModel.minimumStockQuantity).toBe(objProductModel.minimumStockQuantity);
                expect(component.productModel.needToPrint).toBe(objProductModel.needToPrint);
                expect(component.productModel.productId).toBe(objProductModel.productId);
                expect(component.productModel.productName).toBe(objProductModel.productName);
                expect(component.productModel.quantityStock).toBe(objProductModel.quantityStock);
                expect(component.productModel.quantityToBuy).toBe(objProductModel.quantityToBuy);
                expect(component.productModel.dateInsert).toBe(objProductModel.dateInsert);
                expect(component.productModel.dateUpdate).toBe(objProductModel.dateUpdate);
                expect(component.productModel.userId).toBe(objProductModel.userId);
                expect(component.productModel.userName).toBe(objProductModel.userName);
                expect(typeof(component.productModel.categoryId)).toBe('number');
                expect(typeof(component.productModel.categoryName)).toBe('string');
                expect(typeof(component.productModel.productId)).toBe('number');
                expect(typeof(component.productModel.productName)).toBe('string');
                expect(typeof(component.productModel.costPrice)).toBe('string');
                expect(typeof(component.productModel.salePrice)).toBe('string');
                expect(typeof(component.productModel.quantityToBuy)).toBe('number');
                expect(typeof(component.productModel.quantityStock)).toBe('number');
                expect(typeof(component.productModel.minimumStockQuantity)).toBe('number');
                expect(typeof(component.productModel.dateInsert)).toBe('object');
                expect(typeof(component.productModel.dateUpdate)).toBe('object');
                expect(typeof(component.productModel.userId)).toBe('number');
                expect(typeof(component.productModel.userName)).toBe('string');
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
                var spyOnComponent = spyOn(component, 'update').and.callThrough();
                var getSpy = spyOn(service, 'update').and.returnValue(of(objProductModel));
                spyOnProperty(component, 'productModel').and.returnValue(objProductModel);
                service.update(objProductModel).subscribe((data) => {
                    expect(data).toEqual(objProductModel);
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

        describe('GetById', () => {

            it('GetByIb => Success', () => {
            
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
                let idFake : number = faker.number.int();
                var spyOnComponent = spyOn(component, 'getById').and.callThrough();
                spyOnProperty(component, 'productModel', 'get').and.returnValue(objProductModel);
                
                //Act
                component.getById(idFake);
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.productModel).toEqual(objProductModel);

            });

            it('GetByIb => Success => Subscribe', () => {
            
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
                let idFake : number = faker.number.int();
                var spyOnComponent = spyOn(component, 'getById').and.callThrough();
                spyOnProperty(component, 'productModel', 'get').and.returnValue(objProductModel);
                var getSpy = spyOn(service, 'getById').and.returnValue(of(objProductModel));
                
                //Act
                component.getById(idFake);
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.productModel).toEqual(objProductModel);
                service.getById(idFake).subscribe((data) => {
                    expect(data).toEqual(objProductModel);
                });
               expect(component.getById).toHaveBeenCalled();
            });
        });
    });  
    // #endregion
});