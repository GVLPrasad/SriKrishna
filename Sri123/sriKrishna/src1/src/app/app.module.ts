import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { DisplayComponent } from './display/display.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialobBoxComponent } from './dialob-box/dialob-box.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ExpansionTableComponent } from './expansion-table/expansion-table.component';
import { PasswordMaskPipe } from './password-mask.pipe';
import { MobileMaskPipe } from './mobile-mask.pipe';
import { EmailMaskPipe } from './email-mask.pipe';
import { Demo123Component } from './demo123/demo123.component';
import { BackGroundComponent } from './back-ground/back-ground.component';
import { HEComponent } from './he/he.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DisplayComponent,
    HeaderComponent,
    DashBoardComponent,
    BottomSheetComponent,
    DialobBoxComponent,
    Dialog1Component,
    ExpansionTableComponent,
    PasswordMaskPipe,
    MobileMaskPipe,
    EmailMaskPipe,
    Demo123Component,
    BackGroundComponent,
    HEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
