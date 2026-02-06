/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IxModule } from '@siemens/ix-angular';
import { AgGridModule } from 'ag-grid-angular';
import { NgxEchartsModule } from 'ngx-echarts';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as echarts from 'echarts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IxModule.forRoot(),
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
