import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit{

  isFoo = true;

  title = 'Donne';
  hide = true;
  userId = 0;
  userName = "";

  DoNotAuthenticateAccess: boolean = true;

  expandedIndex = 0;

  constructor(private router: Router) {  }
   
  ngOnInit(): void {
  }

  public activeCategoryCreate() {
    this.router.navigate(['category-create']);
  }

  public activeCategoryDelete() {
    this.router.navigate(['category-delete']);
  }

  public activeCategoryList() {
    this.router.navigate(['category-list']);
  }

  public activeCategoryUpdate() {
    this.router.navigate(['category-update']);
  }

  public activeStoreCreate() {
    this.router.navigate(['store-create']);
  }

  public activeStoreDelete() {
    this.router.navigate(['store-delete']);
  }

  public activeStoreList() {
    this.router.navigate(['store-list']);
  }

  public activeStoreUpdate() {
    this.router.navigate(['store-update']);
  }

  public activeProfileCreate() {
    this.router.navigate(['profile-create']);
  }

  public activeProfileDelete() {
    this.router.navigate(['profile-delete']);
  }

  public activeProfileList() {
    this.router.navigate(['profile-list']);
  }

  public activeProfileUpdate() {
    this.router.navigate(['profile-update']);
  }

  public activeUserCreate() {
    this.router.navigate(['user-create']);
  }

  public activeUserUpdate() {
    this.router.navigate(['user-update']);
  }

  public activeUserDelete() {
    this.router.navigate(['user-delete']);
  }

  public activeUserList() {
    this.router.navigate(['user-list']);
  }  
  public activeBuyerCreate() {
    this.router.navigate(['buyer-create']);
  }

  public activeBuyerDelete() {
    this.router.navigate(['buyer-delete']);
  }

  public activeBuyerList() {
    this.router.navigate(['buyer-list']);
  }

  public activeBuyerUpdate() {
    this.router.navigate(['buyer-update']);
  }

  public activeOrderCreate() {
    this.router.navigate(['order-create']);
  }

  public activeOrderList() {
    this.router.navigate(['order-list']);
  }

  public activeOrderDelete() {
    this.router.navigate(['order-delete']);
  }

  public activeOrderUpdate() {
    this.router.navigate(['order-update']);
  }


  public activeProductCreate() {
    this.router.navigate(['product-create']);
  }

  public activeProductList() {
    this.router.navigate(['product-list']);
  }
  public activeProductDelete() {
    this.router.navigate(['product-delete']);
  }

  public activeProductUpdate() {
    this.router.navigate(['product-update']);
  }

  public activeFormofpaymentCreate() {
    this.router.navigate(['formofpayment-create']);
  }

  public activeFormofpaymentList() {
    this.router.navigate(['formofpayment-list']);
  }
}