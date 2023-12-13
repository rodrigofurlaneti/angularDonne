import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ProfileListComponent } from './profile-list.component';
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
import { ProfileListService } from './profile-list.service';
import { ProfileListMockService } from '../../../../test/profile-list-mock.service'; 

describe('ProfileListComponent', () => {
    let component: ProfileListComponent;
    let fixture: ComponentFixture<ProfileListComponent>;
    let router: Router;
    let service: ProfileListService;
    const routes: Routes = [
        {path: 'main', component: MainComponent},
        {path: 'profile-list', component: ProfileListComponent}
      ];

    // #region [BeforeEach]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileListComponent],
            providers: [{provide: ProfileListService, useClass: ProfileListMockService }],
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(ProfileListComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        service = TestBed.inject(ProfileListService);
        fixture.detectChanges();
    }));

    // #endregion

    // #region [Should]

    describe('Should', () => {

        it('list => Profile list component', () => {
            expect(component).toBeTruthy();
        });

    });

    // #endregion

           //#region [Properties]

           describe('Property private', () => {

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
     });

    // #endregion
});