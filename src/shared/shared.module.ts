import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LateralMenuComponent
  ],
  exports: [
    LateralMenuComponent,
  ]
})
export class SharedModule { }
