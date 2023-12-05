import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyerCreateComponent } from './buyer-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BuyerModel } from 'src/interface/buyer.interface';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';

describe('BuyerCreateComponent', () => {
    let component: BuyerCreateComponent;
    let fixture: ComponentFixture<BuyerCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BuyerCreateComponent],
            imports: [
                HttpClientTestingModule, 
                MatDialogModule,
                MatSnackBarModule
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        fixture = TestBed.createComponent(BuyerCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('Should create => Buyer create component', () => {
        expect(component).toBeTruthy();
    });

    it('Property private => BuyerModel', () => {
        //Arrange
        var objBuyerModel: BuyerModel = new BuyerModel()
        objBuyerModel.buyerAddress = faker.address.streetAddress();
        objBuyerModel.buyerId = faker.number.int().toString();
        objBuyerModel.buyerName = faker.person.fullName();
        objBuyerModel.buyerPhone = faker.phone.number().toString();
        objBuyerModel.dateInsert = faker.date.anytime();
        objBuyerModel.dateUpdate = faker.date.anytime();
        objBuyerModel.userId = faker.number.int();
        objBuyerModel.userName = faker.person.fullName();

        //Act
        component.buyerModel = objBuyerModel;
        
        //Assert
        expect(component.buyerModel.buyerAddress).toBe(objBuyerModel.buyerAddress);
        expect(component.buyerModel.buyerId).toBe(objBuyerModel.buyerId);
        expect(component.buyerModel.buyerName).toBe(objBuyerModel.buyerName);
        expect(component.buyerModel.buyerPhone).toBe(objBuyerModel.buyerPhone);
        expect(component.buyerModel.dateInsert).toBe(objBuyerModel.dateInsert);
        expect(component.buyerModel.dateUpdate).toBe(objBuyerModel.dateUpdate);
        expect(component.buyerModel.userId).toBe(objBuyerModel.userId);
        expect(component.buyerModel.userName).toBe(objBuyerModel.userName);

    });

    it('Property private => BuyerModel => TypeOf', () => {
        //Arrange
        var objBuyerModel: BuyerModel = new BuyerModel()
        objBuyerModel.buyerAddress = faker.address.streetAddress();
        objBuyerModel.buyerId = faker.number.int().toString();
        objBuyerModel.buyerName = faker.person.fullName();
        objBuyerModel.buyerPhone = faker.phone.number().toString();
        objBuyerModel.dateInsert = faker.date.anytime();
        objBuyerModel.dateUpdate = faker.date.anytime();
        objBuyerModel.userId = faker.number.int();
        objBuyerModel.userName = faker.person.fullName();

        //Act
        component.buyerModel = objBuyerModel;
        
        //Assert
        expect(typeof(component.buyerModel.buyerAddress)).toBe('string');
        expect(typeof(component.buyerModel.buyerId)).toBe('string');
        expect(typeof(component.buyerModel.buyerName)).toBe('string');
        expect(typeof(component.buyerModel.buyerPhone)).toBe('string');
        expect(typeof(component.buyerModel.dateInsert)).toBe('object');
        expect(typeof(component.buyerModel.dateUpdate)).toBe('object');
        expect(typeof(component.buyerModel.userId)).toBe('number');
        expect(typeof(component.buyerModel.userName)).toBe('string');

    });

    it('Property private => MessageTime', () => {
        //Arrange
        let expectedValue: number = 3000;

        //Act
        component.messageTime = expectedValue;
        
        //Assert
        expect(component.messageTime).toBe(expectedValue);
    });

    it('Property private => MessageTime => Empty', () => {
        //Arrange
        let expectedValue: number = 3000;

        //Act
        //Assert
        expect(component.messageTime).toBe(expectedValue);
    });

    it('Property private => MessageTime => TypeOf', () => {
        //Arrange
        let expectedValue: number = 3000;
        let expectedValueTypeOf: string = 'number';

        //Act
        component.messageTime = expectedValue;
        
        //Assert
        expect(typeof(component.messageTime)).toBe(expectedValueTypeOf);
    });

    it('Method => BuyerList => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'function';

        //Act
        var result = component.buyerList;

        //Assert
        expect(typeof(result)).toBe(expectedValueTypeOf);
    });

    it('Method => Reply => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'function';

        //Act
        var result = component.reply;

        //Assert
        expect(typeof(result)).toBe(expectedValueTypeOf);
    });

    it('Method => Save => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'function';

        //Act
        var result = component.save;

        //Assert
        expect(typeof(result)).toBe(expectedValueTypeOf);
    });

    it('Method => SuccessMessage => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'function';

        //Act
        var result = component.successMessage;

        //Assert
        expect(typeof(result)).toBe(expectedValueTypeOf);
    });

    it('Method => AuthenticatedUser => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'function';

        //Act
        var result = component.authenticatedUser;

        //Assert
        expect(typeof(result)).toBe(expectedValueTypeOf);
    });

    it('Method => ErrorMessage => TypeOf', () => {
        //Arrange
        let expectedValueTypeOf: string = 'function';

        //Act
        var result = component.errorMessage;
        console.log(result)

        //Assert
        expect(typeof(result)).toBe(expectedValueTypeOf);
    });

    it('Method => ErrorMessage', () => {
        //Arrange
        let messageErro: string = 'Erro ao cadastrar o cliente';
        var spyOnComponent = spyOn(component, 'errorMessage').and.callThrough();
        spyOnProperty(component, 'messageErro', 'get').and.returnValue(messageErro);

        //Act
        var result = component.errorMessage;
        console.log(component.messageErro);

        //Assert
        expect(spyOnComponent).toHaveBeenCalledTimes(0);
        expect(component.messageErro).toBe(messageErro);
    });

    it('Method => SuccessMessage', () => {
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

    it('Method => Reply', () => {
        //Arrange
        let routerString: string = 'main';
        var spyOnComponent = spyOn(component, 'reply').and.callThrough();
        spyOnProperty(component, 'routerString', 'get').and.returnValue(routerString);

        //Act
        var result = component.reply;

        //Assert
        expect(spyOnComponent).toHaveBeenCalledTimes(0);
        expect(component.routerString).toBe(routerString);
    });

    it('Method => BuyerList', () => {
        //Arrange
        let routerString: string = 'buyer-list';
        var spyOnComponent = spyOn(component, 'buyerList').and.callThrough();
        spyOnProperty(component, 'routerString', 'get').and.returnValue(routerString);

        //Act
        var result = component.buyerList;

        //Assert
        expect(spyOnComponent).toHaveBeenCalledTimes(0);
        expect(component.routerString).toBe(routerString);
    });
});