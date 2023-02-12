import { Component } from '@angular/core';
import { SideNavService } from './side-nav.service';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MatDialog } from '@angular/material/dialog';
import { DialobBoxComponent } from './dialob-box/dialob-box.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MatRegister';
  isLoggedIn: any;
  opened = false;
  constructor(public sideNavService: SideNavService, public router: Router, public bottomSheet: MatBottomSheet, public dialog: MatDialog) {
  }
  openSideNav() {
    this.sideNavService.showSideNav = !this.sideNavService.showSideNav;
  }
  ngOnInit() {
    localStorage.removeItem('isLoggedIn');
  }
  toHome() {
    this.router.navigate(['/home'])
    localStorage.removeItem('isLoggedIn');
    if (this.sideNavService.showSideNav = true) {
      this.sideNavService.showSideNav = false;
    }
    else {
      this.sideNavService.showSideNav = this.sideNavService.showSideNav
    }
  }
  openDialog() {
    // this.dialog.open(DialobBoxComponent, { width: '800px', height: '500px' });
  }

  today = new Date();
  isLoggedInCall() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
    return this.isLoggedIn;
  }
  openDashBoard() {
    // this.router.navigate(['/dashBoard'])
  }
  openBottomSheet() {
    // this.bottomSheet.open(BottomSheetComponent)
  }
  openExpanTable() {
    // this.router.navigate(['/expandTable'])
  }
  openPlacement() {
    this.router.navigate(['/display'])
  }
  openHigherEdu() {
    this.router.navigate(['/higherEdu'])
  }
}
