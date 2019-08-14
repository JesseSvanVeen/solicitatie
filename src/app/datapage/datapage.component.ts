import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-datapage',
  templateUrl: './datapage.component.html',
  styleUrls: ['./datapage.component.scss']
})
export class DatapageComponent implements OnInit {
  display : number;
  constructor() {
    this.display = 0;
  }

  ngOnInit(){}

  switchView(view : number){
    this.display = view;
    console.log(this.display);
  }
}
