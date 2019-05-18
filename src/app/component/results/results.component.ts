import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnChanges, OnDestroy{

  @Input() playerData:any;
  @Input() playerWl:any;
  @Input() playerMatches:any;
  @Output() closeDetails: EventEmitter<any> = new EventEmitter();


  damage:Array<number>=[]

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.playerMatches.map((x) => {
        this.damage.push(x.hero_damage)
      
      })
     console.log(this.damage,"s")
    }, 2000);
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(changes)
  }

  ngOnDestroy(): void {

    console.log("vai")
    }


  close(){
    this.closeDetails.emit()
  }
}
