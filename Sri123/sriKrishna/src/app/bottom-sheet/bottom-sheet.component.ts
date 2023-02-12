import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {
  formData = JSON.parse(localStorage.getItem('data')!);
  
 
  constructor() { }

  ngOnInit(): void {
  }

}
