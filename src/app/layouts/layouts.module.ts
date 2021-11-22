import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModulesRoutingModule } from '../modules/modules-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MasterPageComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class LayoutsModule {}
