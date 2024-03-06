import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { CategoryCreateComponent } from './category-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { CategoryModel } from 'src/interface/category.interface';
import { faker } from '@faker-js/faker';
import { CategoryListComponent } from '../category-list/category-list.component';
import { CategoryCreateService } from './category-create.service';
import { CategoryCreateMockService } from 'test/category-create-mock.service';

describe('CategoryCreateComponent', () => {
    let component: CategoryCreateComponent;
    let fixture: ComponentFixture<CategoryCreateComponent>;
    let router: Router;
    let service: CategoryCreateService;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'category-list', component: CategoryListComponent}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryCreateComponent],
            providers: [{provide: CategoryCreateService, useClass: CategoryCreateMockService }],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(CategoryCreateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        service = TestBed.inject(CategoryCreateService);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Create => Category create component', () => {
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

    it('CategoryModel => TypeOf', () => {
        //Arrange
        var objCategoryModel: CategoryModel = new CategoryModel()
        objCategoryModel.categoryId = faker.number.int();
        objCategoryModel.categoryName = faker.person.fullName();
        objCategoryModel.userId = faker.number.int();
        objCategoryModel.userName = faker.person.fullName();
        objCategoryModel.dateInsert = faker.date.anytime();
        objCategoryModel.dateUpdate = faker.date.anytime();
        let expectedValueTypeOf: string = 'object';

        //Act
        component.categoryModel = objCategoryModel;
        
        //Assert
        expect(typeof(component.categoryModel)).toBe(expectedValueTypeOf);
        expect(component.categoryModel).toBe(objCategoryModel);
    });

    it('MessageCategoryName => TypeOf', () => {
        //Arrange
        let expectedValue: string = 'Não está preenchido o campo nome da categoria!';
        let expectedValueTypeOf: string = 'string';

        //Act
        component.messageCategoryName = expectedValue;
        
        //Assert
        expect(typeof(component.messageCategoryName)).toBe(expectedValueTypeOf);
        expect(component.messageCategoryName).toBe(expectedValue);
    });

    //#endregion

    // #region [Methods]
    
    describe('Methods', () => {

        describe('Save', () => {

            it('Save => CategoryName => Empty', () => {
                //Arrange
                let expectedValueTypeOf: string = 'undefined';
                let messageCategoryName: string = 'Não está preenchido o campo nome da categoria!';
                var spyOnComponent = spyOn(component, 'save').and.callThrough();
                var objCategoryModel: CategoryModel = new CategoryModel()
                objCategoryModel.categoryName = '';
                spyOnProperty(component, 'categoryModel', 'get').and.returnValue(objCategoryModel);
                spyOnProperty(component, 'messageCategoryName', 'get').and.returnValue(messageCategoryName);
                
                //Act
                var result = component.save();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.messageCategoryName).toBe(messageCategoryName);
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });

            it('Save => CategoryModel => Populate', () => {
                //Arrange
                var spyOnComponent = spyOn(component, 'save').and.callThrough();
                var objCategoryModel: CategoryModel = new CategoryModel()
                objCategoryModel.categoryName = faker.person.fullName();
                spyOnProperty(component, 'categoryModel', 'get').and.returnValue(objCategoryModel);
                
                //Act
                component.save();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.categoryModel.categoryName).toBe(objCategoryModel.categoryName);
            });

            it('Save => Success => Subscribe', () => {
                //Arrange
                var objCategoryModel: CategoryModel = new CategoryModel()
                objCategoryModel.userId = 1;
                objCategoryModel.userName = 'Administrador';
                objCategoryModel.categoryId = 1;
                objCategoryModel.categoryName = 'Administrador';
                objCategoryModel.dateUpdate = faker.date.anytime();
                objCategoryModel.dateInsert = faker.date.anytime();
                var spyOnComponent = spyOn(component, 'save').and.callThrough();

                const response = [
                    {
                        "categoryId": "1",
                        "categoryName": "Administrador",
                        "dateInsert": "",
                        "dateUpdate": "",
                        "userId": "1",
                        "userName": "Administrador"
                    }
                ];
                
                service.save(objCategoryModel).subscribe((data) => {
                    expect(data).toEqual(response);
                });

                //Act
                component.save();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.save).toHaveBeenCalled();
            });

        });

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

        describe('CategoryList', () => {

            it('CategoryList => RouterString', fakeAsync(() => {
                //Arrange
                let expectedValue: string = 'category-list';
                var spyOnComponent = spyOn(component, 'categoryList').and.callThrough();
                var spyOnRouter = spyOn(router, 'navigate').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(expectedValue);
                
                //Act
                component.categoryList();
        
                //Assert
                expect(component.routerString).toBe(expectedValue);
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(spyOnRouter).toHaveBeenCalledTimes(1);
            }));

            it('CategoryList', fakeAsync(() => {
                //Arrange
                let routerString: string = 'category-list';
                var spyOnComponent = spyOn(component, 'categoryList').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(routerString);
        
                //Act
                component.categoryList();
        
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
                var objCategoryModel: CategoryModel = new CategoryModel();
                objCategoryModel.userId = userIdLogin;
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

        })
        
       
        describe('CheckFields', () => {

            it('CheckFields => Success', () => {
                //Arrange
                var objCategoryModel: CategoryModel = new CategoryModel()
                objCategoryModel.categoryId = faker.number.int();
                objCategoryModel.categoryName = faker.person.fullName();
                objCategoryModel.userId = faker.number.int();
                objCategoryModel.userName = faker.person.fullName();
                objCategoryModel.dateInsert = faker.date.anytime();
                objCategoryModel.dateUpdate = faker.date.anytime();
                
                let expectedValueTypeOf: string = 'object';
        
                //Act
                var result = component.checkFields(objCategoryModel);
                        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            })

            it('CheckFields => CategoryName => Empty => Success', () => {
                //Arrange
                var expectedValue: string = 'Não está preenchido o campo nome da categoria!';
                var objCategoryModel: CategoryModel = new CategoryModel()
                objCategoryModel.categoryId = faker.number.int();
                objCategoryModel.categoryName = '';
                objCategoryModel.userId = faker.number.int();
                objCategoryModel.userName = faker.person.fullName();
                objCategoryModel.dateInsert = faker.date.anytime();
                objCategoryModel.dateUpdate = faker.date.anytime();
                
                let expectedValueTypeOf: string = 'object';
        
                //Act
                var result = component.checkFields(objCategoryModel);
                        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
                expect(component.messageCategoryName).toBe(expectedValue);
            })

        });

    
        describe('SuccessMessage', () => {

            it('FirstSuccessMessage => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'string';
        
                //Act
                component.firstSuccessMessage = expectedValueTypeOf;
                
                //Assert
                expect(typeof(component.firstSuccessMessage)).toBe(expectedValueTypeOf);
            });
    
            it('SecondSuccessMessage => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'string';
        
                //Act
                component.secondSuccessMessage = expectedValueTypeOf;
                
                //Assert
                expect(typeof(component.secondSuccessMessage)).toBe(expectedValueTypeOf);
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
    });

    // #endregion
});