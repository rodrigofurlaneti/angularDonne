import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ProfileCreateComponent } from './profile-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProfileModel } from 'src/interface/profile.interface';
import { faker } from '@faker-js/faker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {Router, Routes} from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { ProfileListComponent } from '../profile-list/profile-list.component';
import { ProfileCreateService } from './profile-create.service';
import { ProfileCreateMockService } from '../../../../test/profile-create-mock.service'; 

describe('ProfileCreateComponent', () => {
    let component: ProfileCreateComponent;
    let fixture: ComponentFixture<ProfileCreateComponent>;
    let router: Router;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'profile-list', component: ProfileListComponent}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileCreateComponent],
            providers: [{provide: ProfileCreateService, useClass: ProfileCreateMockService }],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(ProfileCreateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Create => Profile create component', () => {
            expect(component).toBeTruthy();
        });

    });

    // #endregion

    //#region [Properties]

    describe('Property private', () => {

        it('ProfileModel => TypeOf', () => {
            //Arrange
            let objProfileModel: ProfileModel = new ProfileModel()
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
            expect(typeof(component.profileModel.userId)).toBe('number');
            expect(typeof(component.profileModel.profileName)).toBe('string');
            expect(typeof(component.profileModel.dateInsert)).toBe('object');
            expect(typeof(component.profileModel.dateUpdate)).toBe('object');
            expect(typeof(component.profileModel.userId)).toBe('number');
            expect(typeof(component.profileModel.userName)).toBe('string');
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

        it('MessageProfileName => TypeOf', () => {
            //Arrange
            let expectedValueTypeOf: string = 'string';
            let expectedValue: string = 'Não está preenchido o campo nome do perfil!';

            //Act
            component.messageProfileName = expectedValue;
            
            //Assert
            expect(typeof(component.messageProfileName)).toBe(expectedValueTypeOf);
            expect(component.messageProfileName).toBe(expectedValue);
        });
    });

    //#endregion

    // #region [Methods]
    
    describe('Methods', () => {

        describe('Save', () => {

            it('Save => ProfileName => Empty', () => {
                //Arrange
                let messageProfileName: string = 'Não está preenchido o campo nome do perfil!';
                let spyOnComponent = spyOn(component, 'save').and.callThrough();
                let objProfileModel: ProfileModel = new ProfileModel()
                objProfileModel.profileName = '';
                spyOnProperty(component, 'profileModel', 'get').and.returnValue(objProfileModel);
                spyOnProperty(component, 'messageProfileName', 'get').and.returnValue(messageProfileName);
                
                //Act
                component.save();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.messageProfileName).toBe(messageProfileName);
            });

            it('Save => ProfileName => Populate', () => {
                //Arrange
                let messageProfileName: string = 'Não está preenchido o campo nome do perfil!';
                let spyOnComponent = spyOn(component, 'save').and.callThrough();
                let objProfileModel: ProfileModel = new ProfileModel()
                objProfileModel.profileName = faker.person.fullName();
                spyOnProperty(component, 'profileModel', 'get').and.returnValue(objProfileModel);
                spyOnProperty(component, 'messageProfileName', 'get').and.returnValue(messageProfileName);
                
                //Act
                component.save();
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(component.messageProfileName).toBe(messageProfileName);
            });

            it('Save => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'function';
        
                //Act
                let result = component.save;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });

        });

        describe('ProfileList', () => {

            it('ProfileList => TypeOf', () => {
                //Arrange
                let expectedValueTypeOf: string = 'function';
        
                //Act
                let result = component.profileList;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });

            it('ProfileList => RouterString', fakeAsync(() => {
                //Arrange
                let expectedValue: string = 'profile-list';
                let spyOnComponent = spyOn(component, 'profileList').and.callThrough();
                let spyOnRouter = spyOn(router, 'navigate').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(expectedValue);
                
                //Act
                component.profileList();
        
                //Assert
                expect(component.routerString).toBe(expectedValue);
                expect(spyOnComponent).toHaveBeenCalledTimes(1);
                expect(spyOnRouter).toHaveBeenCalledTimes(1);
            }));

            it('ProfileList', () => {
                //Arrange
                let routerString: string = 'profile-list';
                let spyOnComponent = spyOn(component, 'profileList').and.callThrough();
                spyOnProperty(component, 'routerString', 'get').and.returnValue(routerString);
        
                //Act
        
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
                let result = component.reply;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });
        
            it('Reply => RouterString', fakeAsync(() => {
                //Arrange
                let expectedValue: string = 'main';
                let spyOnComponent = spyOn(component, 'reply').and.callThrough();
                let spyOnRouter = spyOn(router, 'navigate').and.callThrough();
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
                let spyOnComponent = spyOn(component, 'reply').and.callThrough();
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
                let spyOnComponent = spyOn(component, 'successMessage').and.callThrough();
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
                let result = component.successMessage;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });

            it('SuccessMessage', () => {
                //Arrange
                let messageSuccess: string = 'O cliente foi cadastrado com sucesso!';
                let spyOnComponent = spyOn(component, 'successMessage').and.callThrough();
                spyOnProperty(component, 'messageSuccess', 'get').and.returnValue(messageSuccess);
        
                //Act
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(0);
                expect(component.messageSuccess).toBe(messageSuccess);
            });
        })
    
        describe('ErrorMessage', () => {

            it('ErrorMessage => MessageErro', () => {
                //Arrange
                let expectedValue: string = 'Erro ao cadastrar o cliente!';
                let spyOnComponent = spyOn(component, 'errorMessage').and.callThrough();
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
                let result = component.errorMessage;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });
        
            it('ErrorMessage', () => {
                //Arrange
                let messageErro: string = 'Erro ao cadastrar o cliente';
                let spyOnComponent = spyOn(component, 'errorMessage').and.callThrough();
                spyOnProperty(component, 'messageErro', 'get').and.returnValue(messageErro);
        
                //Act
        
                //Assert
                expect(spyOnComponent).toHaveBeenCalledTimes(0);
                expect(component.messageErro).toBe(messageErro);
            });

        })

        describe('AuthenticatedUser', () => {

            it('AuthenticatedUser => UserIdLogin', () => {
                //Arrange
                let userIdLogin: number = faker.number.int();
                let element = document.createElement('input');
                element.id = 'userIdLogin';
                element.name = 'userIdLogin';
                element.value = userIdLogin.toString();
                element.type="hidden";
                document.getElementById = jasmine.createSpy('userIdLogin').and.returnValue(element);
                let objProfileModel: ProfileModel = new ProfileModel();
                objProfileModel.userId = userIdLogin;
                let spyOnComponent = spyOn(component, 'authenticatedUser').and.callThrough();
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
                let result = component.authenticatedUser;
        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            });

        })
    });

    // #endregion
});