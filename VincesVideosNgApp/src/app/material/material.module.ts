import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class MaterialModule { }
