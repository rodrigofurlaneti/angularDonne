import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCreateComponent } from '../category/category-create/category-create.component';
import { CategoryDeleteComponent } from '../category/category-delete/category-delete.component';
import { CategoryListComponent } from '../category/category-list/category-list.component';
import { CategoryUpdateComponent } from '../category/category-update/category-update.component';

import { MatTooltipModule } from '@angular/material/tooltip'
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'src/material.module';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryListComponent,
    CategoryUpdateComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
  ]
})

export class MainModule { }
