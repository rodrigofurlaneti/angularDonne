import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { UserCreateComponent } from './user-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {Router, Routes} from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { UserListComponent } from '../user-list/user-list.component';
import { UserCreateService } from './user-create.service';
import { UserCreateMockService } from 'test/user-create-mock.service';
import { ProfileListService } from 'src/app/profile/profile-list/profile-list.service';
import { ProfileListMockService } from 'test/profile-list-mock.service';
import { UserModel } from 'src/interface/user.interface';
import { faker } from '@faker-js/faker';
import { FormControl } from '@angular/forms';
import { ProfileModel } from 'src/interface/profile.interface';

describe('UserCreateComponent', () => {
    let component: UserCreateComponent;
    let fixture: ComponentFixture<UserCreateComponent>;
    let service: UserCreateService;
    let router: Router;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'user-list', component: UserListComponent}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserCreateComponent],
            providers: [
                { provide: UserCreateService, useClass: UserCreateMockService },
                { provide: ProfileListService, useClass: ProfileListMockService }
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
        fixture = TestBed.createComponent(UserCreateComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        service = TestBed.inject(UserCreateService);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Create => user create component', () => {
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

        it('MessageUserName => TypeOf', () => {
            //Arrange
            let expectedValueTypeOf: string = 'string';
    
            //Act
            component.messageUserName = expectedValueTypeOf;
            
            //Assert
            expect(typeof(component.messageUserName)).toBe(expectedValueTypeOf);
        });

        it('MessageUserPassword => TypeOf', () => {
            //Arrange
            let expectedValueTypeOf: string = 'string';
    
            //Act
            component.messageUserPassword = expectedValueTypeOf;
            
            //Assert
            expect(typeof(component.messageUserPassword)).toBe(expectedValueTypeOf);
        });

        it('ShowPassword => TypeOf', () => {
            //Arrange
            let expectedValueTypeOf: string = 'boolean';
            let expectedTypeOf: boolean = false;

            //Act
            component.showPassword = expectedTypeOf;
            var displayedColumnsMock: string[] = ['name'];
            console.log('displayedColumnsMock : '+typeof(displayedColumnsMock));

            //Assert
            expect(typeof(component.showPassword)).toBe(expectedValueTypeOf);
            expect(component.showPassword).toBe(expectedTypeOf);
        });

        it('DisplayedColumns => TypeOf', () => {
            //Arrange
            let expectedValueTypeOf: string = 'object';
            var expectedTypeOf: string[] = ['name'];

            //Act
            component.displayedColumns = expectedTypeOf;

            //Assert
            expect(typeof(component.displayedColumns)).toBe(expectedValueTypeOf);
            expect(component.displayedColumns).toBe(expectedTypeOf);
        });

        it('DisableSelect => TypeOf', () => {
            //Arrange
            let expectedValueTypeOf: string = 'object';
            var expectedTypeOf = new FormControl(false);

            //Act
            component.disableSelect = expectedTypeOf;

            //Assert
            expect(typeof(component.disableSelect)).toBe(expectedValueTypeOf);
            expect(component.disableSelect).toBe(expectedTypeOf);
        });

        it('SelectedProfile => TypeOf', () => {
            //Arrange
            let expectedValueTypeOf: string = 'object';
            var expectedTypeOf : ProfileModel = new ProfileModel();

            //Act
            component.selectedProfile = expectedTypeOf;

            //Assert
            expect(typeof(component.selectedProfile)).toBe(expectedValueTypeOf);
            expect(component.selectedProfile).toBe(expectedTypeOf);
        });

        it('ClickedRows => TypeOf', () => {
            //Arrange
            let expectedValueTypeOf: string = 'object';
            var expectedTypeOf : Set<ProfileModel> = new Set<ProfileModel>();

            //Act
            component.clickedRows = expectedTypeOf;

            //Assert
            expect(typeof(component.clickedRows)).toBe(expectedValueTypeOf);
            expect(component.clickedRows).toBe(expectedTypeOf);
        });
   
        it('RouterString => TypeOf', () => {
            //Arrange
            let expectedValueTypeOf: string = 'string';
    
            //Act
            component.routerString = expectedValueTypeOf;
            
            //Assert
            expect(typeof(component.routerString)).toBe(expectedValueTypeOf);
        });
    
        it('UserModel => TypeOf', () => {
            //Arrange
            var objUserModel: UserModel = new UserModel()
            objUserModel.userId = faker.number.int();
            objUserModel.userName = faker.person.fullName();
            objUserModel.profileId = faker.number.int();
            objUserModel.profileName = faker.person.fullName();
            objUserModel.userPassword = faker.number.int().toString();
            objUserModel.status = true;
            let expectedValueTypeOf: string = 'object';
    
            //Act
            component.userModel = objUserModel;
            
            //Assert
            expect(typeof(component.userModel)).toBe(expectedValueTypeOf);
            expect(component.userModel).toBe(objUserModel);
        });

        //#endregion

        //#region [Methods]

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

        describe('CheckFields', () => {

            it('CheckFields => Success', () => {
                //Arrange
                var objUserModel: UserModel = new UserModel()
                objUserModel.userId = faker.number.int();
                objUserModel.userName = faker.person.fullName();
                objUserModel.userPassword = faker.number.int().toString();
                objUserModel.profileId = faker.number.int();
                objUserModel.profileName = faker.person.fullName();
                
                let expectedValueTypeOf: string = 'object';
        
                //Act
                var result = component.checkFields(objUserModel);
                        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
            })

            it('CheckFields => UserName => Empty => Success', () => {
                //Arrange
                var expectedValue: string = 'Não está preenchido o campo nome do usuário!';
                var objUserModel: UserModel = new UserModel()
                objUserModel.userId = faker.number.int();
                objUserModel.userName = '';
                objUserModel.userPassword = faker.number.int().toString();
                objUserModel.profileId = faker.number.int();
                objUserModel.profileName = faker.person.fullName();
                
                let expectedValueTypeOf: string = 'object';
        
                //Act
                var result = component.checkFields(objUserModel);
                        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
                expect(component.messageUserName).toBe(expectedValue);
            })

            it('CheckFields => UserPassword => Empty => Success', () => {
                //Arrange
                var expectedValue: string = 'Não está preenchido o campo senha do usuario!';
                var objUserModel: UserModel = new UserModel()
                objUserModel.userId = faker.number.int();
                objUserModel.userName = faker.person.fullName();;
                objUserModel.userPassword = '';
                objUserModel.profileId = faker.number.int();
                objUserModel.profileName = faker.person.fullName();
                
                let expectedValueTypeOf: string = 'object';
        
                //Act
                var result = component.checkFields(objUserModel);
                        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
                expect(component.messageUserPassword).toBe(expectedValue);
            })

            it('CheckFields => UserPassword and UserPassword => Empty => Success', () => {
                //Arrange
                var expectedValue = 'Não está preenchido o campo nome'; 
                var objUserModel: UserModel = new UserModel()
                objUserModel.userId = faker.number.int();
                objUserModel.userName = '';
                objUserModel.userPassword = '';
                objUserModel.profileId = faker.number.int();
                objUserModel.profileName = faker.person.fullName();
                
                let expectedValueTypeOf: string = 'object';
        
                //Act
                var result = component.checkFields(objUserModel);
                        
                //Assert
                expect(typeof(result)).toBe(expectedValueTypeOf);
                expect(component.messageUserName).toBe(expectedValue);
            })

        });


        //endregion
});