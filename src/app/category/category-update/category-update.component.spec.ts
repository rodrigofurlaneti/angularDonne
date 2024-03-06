import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { CategoryUpdateComponent } from './category-update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CategoryModel } from 'src/interface/category.interface';
import { faker } from '@faker-js/faker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CategoryUpdateService } from './category-update.service';

describe('CategoryUpdateComponent', () => {
    let component: CategoryUpdateComponent;
    let fixture: ComponentFixture<CategoryUpdateComponent>;
    let router: Router;
    let service: CategoryUpdateService;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'category-update', component: CategoryUpdateComponent}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryUpdateComponent],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(CategoryUpdateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        service = TestBed.inject(CategoryUpdateService);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Update => Category Update component', () => {
            expect(component).toBeTruthy();
        });

    });

    // #endregion

           //#region [Properties]

           describe('Property private', () => {

            it('CategoryModel => TypeOf', () => {
                //Arrange
                var objCategoryModel: CategoryModel = new CategoryModel()
                objCategoryModel.categoryId = faker.number.int();
                objCategoryModel.categoryName = faker.person.fullName();
                objCategoryModel.dateInsert = faker.date.anytime();
                objCategoryModel.dateUpdate = faker.date.anytime();
                objCategoryModel.userId = faker.number.int();
                objCategoryModel.userName = faker.person.fullName();
        
                //Act
                component.categoryModel = objCategoryModel;
                
                //Assert
                expect(component.categoryModel.categoryId).toBe(objCategoryModel.categoryId);
                expect(component.categoryModel.categoryName).toBe(objCategoryModel.categoryName);
                expect(component.categoryModel.dateInsert).toBe(objCategoryModel.dateInsert);
                expect(component.categoryModel.dateUpdate).toBe(objCategoryModel.dateUpdate);
                expect(component.categoryModel.userId).toBe(objCategoryModel.userId);
                expect(component.categoryModel.userName).toBe(objCategoryModel.userName);
                expect(typeof(component.categoryModel.categoryId)).toBe('number');
                expect(typeof(component.categoryModel.categoryName)).toBe('string');
                expect(typeof(component.categoryModel.dateInsert)).toBe('object');
                expect(typeof(component.categoryModel.dateUpdate)).toBe('object');
                expect(typeof(component.categoryModel.userId)).toBe('number');
                expect(typeof(component.categoryModel.userName)).toBe('string');
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
                let objClickedRows: Set<CategoryModel> = new Set<CategoryModel>();

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
                let expectedValue: CategoryModel[] = [];
        
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
                var spyOnComponent = spyOn(component, 'update').and.callThrough();

                //Act
                component.update();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.update).toHaveBeenCalled();
            });

            it('Update => Success => Subscribe', () => {
                //Arrange
                var objCategoryModel: CategoryModel = new CategoryModel()
                objCategoryModel.categoryId = faker.number.int();
                objCategoryModel.categoryName = faker.person.fullName();
                objCategoryModel.dateInsert = faker.date.anytime();
                objCategoryModel.dateUpdate = faker.date.anytime();
                objCategoryModel.userId = faker.number.int();
                objCategoryModel.userName = faker.person.fullName();
                var spyOnComponent = spyOn(component, 'update').and.callThrough();
                var getSpy = spyOn(service, 'update').and.returnValue(of(objCategoryModel));
                spyOnProperty(component, 'categoryModel').and.returnValue(objCategoryModel);
                service.update(objCategoryModel).subscribe((data) => {
                    expect(data).toEqual(objCategoryModel);
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
                var objCategoryModel: CategoryModel = new CategoryModel()
                objCategoryModel.categoryId = faker.number.int();
                objCategoryModel.categoryName = faker.person.fullName();
                objCategoryModel.dateInsert = faker.date.anytime();
                objCategoryModel.dateUpdate = faker.date.anytime();
                objCategoryModel.userId = faker.number.int();
                objCategoryModel.userName = faker.person.fullName();
        
                let expectedValueTypeOf: string = 'object';
        
                //Act
                var result = component.checkFields(objCategoryModel);
                        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            })

        });

        describe('SuccessMessage', () => {

            it('SuccessMessage => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'function';
        
                //Act
                var result = component.successMessage;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
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
                let userIdLogin: number = faker.number.int();
                var element = document.createElement('input');
                element.id = 'userIdLogin';
                element.name = 'userIdLogin';
                element.value = userIdLogin.toString();
                element.type="hidden";
                document.getElementById = jasmine.createSpy('userIdLogin').and.returnValue(element);
                var objCategoryModel: CategoryModel = new CategoryModel();
                objCategoryModel.categoryId = userIdLogin;
                var spyOnComponent = spyOn(component, 'authenticatedUser').and.callThrough();
                spyOnProperty(component, 'categoryModel', 'get').and.returnValue(objCategoryModel);
                
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
                var objCategoryModel: CategoryModel = new CategoryModel()
                objCategoryModel.categoryId = faker.number.int();
                objCategoryModel.categoryName = faker.person.fullName();
                objCategoryModel.dateInsert = faker.date.anytime();
                objCategoryModel.dateUpdate = faker.date.anytime();
                objCategoryModel.userId = faker.number.int();
                objCategoryModel.userName = faker.person.fullName();
                var spyOnComponent = spyOn(component, 'list').and.callThrough();
                var getSpy = spyOn(service, 'list').and.returnValue(of(objCategoryModel));
                service.list().subscribe((data) => {
                    expect(data).toEqual(objCategoryModel);
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
                var objCategoryModel: CategoryModel = new CategoryModel()
                objCategoryModel.categoryId = faker.number.int();
                objCategoryModel.categoryName = faker.person.fullName();
                objCategoryModel.dateInsert = faker.date.anytime();
                objCategoryModel.dateUpdate = faker.date.anytime();
                objCategoryModel.userId = faker.number.int();
                objCategoryModel.userName = faker.person.fullName();
                let idFake : number = faker.number.int();
                var spyOnComponent = spyOn(component, 'getById').and.callThrough();
                spyOnProperty(component, 'categoryModel', 'get').and.returnValue(objCategoryModel);
                
                //Act
                component.getById(idFake);
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.categoryModel).toEqual(objCategoryModel);

            });

            it('GetByIb => Success => Subscribe', () => {
            
                //Arrange
                var objCategoryModel: CategoryModel = new CategoryModel()
                objCategoryModel.categoryId = faker.number.int();
                objCategoryModel.categoryName = faker.person.fullName();
                objCategoryModel.dateInsert = faker.date.anytime();
                objCategoryModel.dateUpdate = faker.date.anytime();
                objCategoryModel.userId = faker.number.int();
                objCategoryModel.userName = faker.person.fullName();
                let idFake : number = faker.number.int();
                var spyOnComponent = spyOn(component, 'getById').and.callThrough();
                spyOnProperty(component, 'categoryModel', 'get').and.returnValue(objCategoryModel);
                var getSpy = spyOn(service, 'getById').and.returnValue(of(objCategoryModel));
                
                //Act
                component.getById(idFake);
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.categoryModel).toEqual(objCategoryModel);
                service.getById(idFake).subscribe((data) => {
                    expect(data).toEqual(objCategoryModel);
                });
               expect(component.getById).toHaveBeenCalled();
            });
        });
    });  
    // #endregion
});