import { IMAGE_LOADER } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as uniqid from 'uniqid';
// import * as Sortable from 'sortablejs';
// // import { SortableEvent } from 'sortablejs';
import * as uuid from 'uuid';

const myId = uuid.v4();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  IDS:any
  color:any
  cPieces: any = [
    ['../../assets/Belephant.png','../../assets/BCamel.png',  '../../assets/Bhorse.png', '../../assets/Bqueen.png', '../../assets/Bking.png', '../../assets/Bhorse.png', '../../assets/BCamel.png', '../../assets/Belephant.png'],
    ['../../assets/Bpawn.png', '../../assets/Bpawn.png', '../../assets/Bpawn.png', '../../assets/Bpawn.png','../../assets/Bpawn.png','../../assets/Bpawn.png', '../../assets/Bpawn.png','../../assets/Bpawn.png'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],   // =>  Entire Chess board 2DArray
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['../../assets/Wpawn.png', '../../assets/Wpawn.png', '../../assets/Wpawn.png', '../../assets/Wpawn.png','../../assets/Wpawn.png','../../assets/Wpawn.png', '../../assets/Wpawn.png','../../assets/Wpawn.png'],
    ['../../assets/WElemphant.png','../../assets/WCamel.png',  '../../assets/Whorse.png', '../../assets/Wqueen.png', '../../assets/Wkink.png', '../../assets/Whorse.png', '../../assets/WCamel.png', '../../assets/WElemphant.png']
  ];

  constructor() { }
  ngOnInit(): void {


    // for(let i=0;i<=7;i++){
    //   this.cPieces[6][i] = 'pawn'
    // }
    // let IDS  = document.getElementById()

    // document.getElementById(RI+','+CI)

    // let row=0,column=0


    //     this.cPieces[row][column]
  }

  ngAfterViewInit(): void {

    for (let i = 0; i <= 7; i++) {
      for (let j = 0; j <= 7; j++) {
         this.IDS = document.getElementById(i + ',' + j)
        //  console.log(i+','+j);


     let iMod = i%2;
       let jMod = j%2;

        if (iMod == 0 && jMod == 0) {
          this.IDS!.style.backgroundColor = "white";
          this.IDS.children[0].dataset.cp="white"
        }
        else if (iMod != 0 && jMod != 0) {
          this.IDS!.style.backgroundColor = "white"
          this.IDS.children[0].dataset.cp="white"
        } else{
          this.IDS!.style.backgroundColor = "#db7202"
          this.IDS.children[0].dataset.cp="#db7202"
        }
      }
    }


  }

  move(row: any, column: any,elemColor:any) {
    // console.log(row, column);
    console.log(elemColor);

    this.color  = elemColor.target.style.backgroundColor
    console.log(this.color);
    }
}
