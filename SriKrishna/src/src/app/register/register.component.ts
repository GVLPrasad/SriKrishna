import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Gender = ['Male', 'Female', 'Other']
  obj: LoginObj = new LoginObj;
  today = new Date()
  n=Math.random()
  useremail: string | undefined;
  userPwd: string | undefined;
  selectedIndex: number = 0;
  hideLogintab=true
  // tabChanged(tabChangeEvent: MatTabChangeEvent) { }
  ldata = JSON.parse(localStorage.getItem('data')!);
  registerdData = new Array<LoginObj>();

  constructor(public router: Router, private _snackBar: MatSnackBar) { }
  storeData(formvalue: LoginObj, register: any) {
    // if (this.ldata) {
    //   this.registerdData = this.ldata;
    // }
    this.registerdData.push(formvalue)
    localStorage.setItem('data', JSON.stringify(this.registerdData));
    this._snackBar.open('Registered Successfully!, Thank You!', 'Dismiss', { duration: 5000 });
    register.form.reset();
    this.selectedIndex = this.selectedIndex + 1;

  }
  toLoginTab() {
    this.selectedIndex = 1;

  }
  loginCall() {
   this.hideLogintab=false
    // let formData = JSON.parse(localStorage.getItem('data')!);
    // let checkUser=false;
    // if (formData?.length > 0) {
    //   formData.forEach((element: any) => {
    //     if (element.email === this.useremail && element.password === this.userPwd) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('hideSudeNave','true')
          // this.router.navigate(['/display']);
    //       this._snackBar.open('Successfully Logged In ', 'Dismiss', { duration: 3000 });
    //       checkUser=true;
    //     }
        
    //   });
    // }
    // if(!checkUser) {
    //   this._snackBar.open('Invalid Credidentials', 'Dismiss', { duration: 3000 })
    // }


  }
  ngOnInit(): void { }
  myTabSelectedIndexChange(index: number) {
    console.log('Selected index: ' + index);
    console.log(this.n);
  }

}
export class LoginObj {
  name: string | undefined
  email: string | undefined;
  password: string | undefined
  mobile: number | undefined
  gender: string | undefined
  dOB: number | undefined
}


function openSnackBar(message: any, string: any, action: any, arg3: number) {
  throw new Error('Function not implemented.');
}

function action(message: any, string: any, action: any, arg3: number) {
  throw new Error('Function not implemented.');
}

