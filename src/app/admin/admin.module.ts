import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';


import {DragDropModule} from 'primeng/dragdrop';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
export const mainRoutes: Routes = [

  {
    path: '',
    component: AdminComponent,
    children: [
        {
            path: 'home',
            component:HomeComponent
          },
          {
            path: 'sanxuat',
            component:HomeComponent
          },
    ],
    //
  },
];

@NgModule({
  declarations: [
  
  HomeComponent,
  AdminComponent,


  ],
  imports: [   
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    ToastModule,
    TableModule,
    RouterModule.forChild(mainRoutes)
  ],
  exports: [RouterModule],
})
export class AdminModule { }
