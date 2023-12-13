import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ProfileUpdateComponent } from './profile-update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProfileModel } from 'src/interface/profile.interface';
import { faker } from '@faker-js/faker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { of } from 'rxjs';
import { ProfileUpdateService } from './profile-update.service';

describe('ProfileUpdateComponent', () => {
    let component: ProfileUpdateComponent;
    let fixture: ComponentFixture<ProfileUpdateComponent>;
    let router: Router;
    let service: ProfileUpdateService;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'Profile-update', component: ProfileUpdateComponent}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileUpdateComponent],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(ProfileUpdateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        service = TestBed.inject(ProfileUpdateService);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Update => Profile Update component', () => {
            expect(component).toBeTruthy();
        });

    });

    // #endregion

           //#region [Properties]

           describe('Property private', () => {

            it('ProfileModel => TypeOf', () => {
                //Arrange
                var objProfileModel: ProfileModel = new ProfileModel()
                objProfileModel.profileId = faker.number.int();
                objProfileModel.profileName = faker.person.fullName();
                objProfileModel.dateInsert = faker.date.anytime();
                objProfileModel.dateUpdate = faker.date.anytime();
                objProfileModel.userId = faker.number.int();
                objProfileModel.userName = faker.person.fullName();
        
                //Act
                component.profileModel = objProfileModel;
                
                //Assert
                expect(component.profileModel.profileId).toBe(objProfileModel.profileId);
                expect(component.profileModel.profileName).toBe(objProfileModel.profileName);
                expect(component.profileModel.dateInsert).toBe(objProfileModel.dateInsert);
                expect(component.profileModel.dateUpdate).toBe(objProfileModel.dateUpdate);
                expect(component.profileModel.userId).toBe(objProfileModel.userId);
                expect(component.profileModel.userName).toBe(objProfileModel.userName);
                expect(typeof(component.profileModel.profileId)).toBe('number');
                expect(typeof(component.profileModel.profileName)).toBe('string');
                expect(typeof(component.profileModel.dateInsert)).toBe('object');
                expect(typeof(component.profileModel.dateUpdate)).toBe('object');
                expect(typeof(component.profileModel.userId)).toBe('number');
                expect(typeof(component.profileModel.userName)).toBe('string');
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
                let objClickedRows: Set<ProfileModel> = new Set<ProfileModel>();

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
                let expectedValue: ProfileModel[] = [];
        
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

            it('Update => Success => Subscribe', () => {
                //Arrange
                var objProfileModel: ProfileModel = new ProfileModel()
                objProfileModel.profileId = faker.number.int();
                objProfileModel.profileName = faker.person.fullName();
                objProfileModel.dateInsert = faker.date.anytime();
                objProfileModel.dateUpdate = faker.date.anytime();
                objProfileModel.userId = faker.number.int();
                objProfileModel.userName = faker.person.fullName();
                var spyOnComponent = spyOn(component, 'update').and.callThrough();
                var getSpy = spyOn(service, 'update').and.returnValue(of(objProfileModel));
                spyOnProperty(component, 'profileModel').and.returnValue(objProfileModel);
                service.update(objProfileModel).subscribe((data) => {
                    expect(data).toEqual(objProfileModel);
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
                var objProfileModel: ProfileModel = new ProfileModel()
                objProfileModel.profileId = faker.number.int();
                objProfileModel.profileName = faker.person.fullName();
                objProfileModel.dateInsert = faker.date.anytime();
                objProfileModel.dateUpdate = faker.date.anytime();
                objProfileModel.userId = faker.number.int();
                objProfileModel.userName = faker.person.fullName();
        
                let expectedValueTypeOf: string = 'object';
        
                //Act
                var result = component.checkFields(objProfileModel);
                        
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
                let userIdLogin: number = faker.number.int();
                var element = document.createElement('input');
                element.id = 'userIdLogin';
                element.name = 'userIdLogin';
                element.value = userIdLogin.toString();
                element.type="hidden";
                document.getElementById = jasmine.createSpy('userIdLogin').and.returnValue(element);
                var objProfileModel: ProfileModel = new ProfileModel();
                objProfileModel.profileId = userIdLogin;
                var spyOnComponent = spyOn(component, 'authenticatedUser').and.callThrough();
                spyOnProperty(component, 'profileModel', 'get').and.returnValue(objProfileModel);
                
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
                var objProfileModel: ProfileModel = new ProfileModel()
                objProfileModel.profileId = faker.number.int();
                objProfileModel.profileName = faker.person.fullName();
                objProfileModel.dateInsert = faker.date.anytime();
                objProfileModel.dateUpdate = faker.date.anytime();
                objProfileModel.userId = faker.number.int();
                objProfileModel.userName = faker.person.fullName();
                var spyOnComponent = spyOn(component, 'list').and.callThrough();
                var getSpy = spyOn(service, 'list').and.returnValue(of(objProfileModel));
                service.list().subscribe((data) => {
                    expect(data).toEqual(objProfileModel);
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
                var objProfileModel: ProfileModel = new ProfileModel()
                objProfileModel.profileId = faker.number.int();
                objProfileModel.profileName = faker.person.fullName();
                objProfileModel.dateInsert = faker.date.anytime();
                objProfileModel.dateUpdate = faker.date.anytime();
                objProfileModel.userId = faker.number.int();
                objProfileModel.userName = faker.person.fullName();
                let idFake : number = faker.number.int();
                var spyOnComponent = spyOn(component, 'getById').and.callThrough();
                spyOnProperty(component, 'profileModel', 'get').and.returnValue(objProfileModel);
                
                //Act
                component.getById(idFake);
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.profileModel).toEqual(objProfileModel);

            });

            it('GetByIb => Success => Subscribe', () => {
            
                //Arrange
                var objProfileModel: ProfileModel = new ProfileModel()
                objProfileModel.profileId = faker.number.int();
                objProfileModel.profileName = faker.person.fullName();
                objProfileModel.dateInsert = faker.date.anytime();
                objProfileModel.dateUpdate = faker.date.anytime();
                objProfileModel.userId = faker.number.int();
                objProfileModel.userName = faker.person.fullName();
                let idFake : number = faker.number.int();
                var spyOnComponent = spyOn(component, 'getById').and.callThrough();
                spyOnProperty(component, 'profileModel', 'get').and.returnValue(objProfileModel);
                var getSpy = spyOn(service, 'getById').and.returnValue(of(objProfileModel));
                
                //Act
                component.getById(idFake);
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.profileModel).toEqual(objProfileModel);
                service.getById(idFake).subscribe((data) => {
                    expect(data).toEqual(objProfileModel);
                });
               expect(component.getById).toHaveBeenCalled();
            });
        });
    });  
    // #endregion
});