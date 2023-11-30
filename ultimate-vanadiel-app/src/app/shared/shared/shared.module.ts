import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio'




@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, 
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule, 
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule
  ],
})
export class SharedModule { }
