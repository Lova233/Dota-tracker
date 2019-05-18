import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() playerData:any;
  @Input() playerWl:any;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.playerData,this.playerWl)
    }, 3000);
  }

}
