import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyerCreateComponent } from '../buyer-create/buyer-create.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import 'jest-preset-angular/setup-jest.js';
import 'zone.js';
import 'zone.js/testing';

describe('BuyerCreateComponent', () => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    let component: BuyerCreateComponent;
    let fixture: ComponentFixture<BuyerCreateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [BuyerCreateComponent],
        }).compileComponents();
      });

    beforeEach(() => {
        fixture = TestBed.createComponent(BuyerCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

    it(`MessageTime'`, () => {
        console.log(component);
        expect(component.messageTime).toEqual(3000);
    });

});