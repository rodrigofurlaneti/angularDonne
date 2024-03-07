import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes} from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { ProfileListComponent } from '../profile-list/profile-list.component';
import { ProfileDeleteComponent } from './profile-delete.component';
import { faker } from '@faker-js/faker';
import { ProfileModel } from 'src/interface/profile.interface';
import { of } from 'rxjs';

describe('ProfileDeleteComponent', () => {
    let component: ProfileDeleteComponent;
    let fixture: ComponentFixture<ProfileDeleteComponent>;
    let router: Router;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'profile-list', component: ProfileListComponent}
      ];

          // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileDeleteComponent],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(ProfileDeleteComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('Create => Profile delete component', () => {
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
                let objClickedRows: Set<ProfileModel> = new Set<ProfileModel>();

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
                    let spyOnComponent = spyOn(component, 'list').and.callThrough();

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
                    let spyOnComponent = spyOn(component, 'delete').and.callThrough();
                    spyOnProperty(component, 'messageSuccess', 'get').and.returnValue(expectedValueMessageSuccess);
                    spyOnProperty(component, 'status', 'get').and.returnValue(expectedValueStatus);
                    let usersMock = [
                        {status: 'Delete successful'}
                      ];
                    let userApiService = jasmine.createSpyObj('ProfileDeleteComponent', ['delete']);
                    userApiService.delete.and.returnValue(of(usersMock));

                    //Act
                    component.delete(mockId);
            
                    //Assert
                    expect(component.messageSuccess).toBe(expectedValueMessageSuccess);
                    expect(component.status).toBe(expectedValueStatus);
                    expect(spyOnComponent).toHaveBeenCalledTimes(1);
                    expect(component.delete).toHaveBeenCalled();
                });
            });

            describe('Reply', () => {

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
        });
        // #endregion
    });