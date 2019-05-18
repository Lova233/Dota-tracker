import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { PlayerService } from '../../Services/player-request'
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy, OnChanges {



  playerData$:Observable<any>;
  playerWl$:Observable<any>;
  playerMatches$:Observable<any>;
  param:string;
  error:string;
  isLoading:boolean = false;
  isShown:boolean = false;

  mySub1:Subscription;
  mySub2:Subscription;

  constructor(
    private pService : PlayerService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  console.log("vai")
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(changes)
  }


  clear(){
    this.param = ""
  }

  onClose(){
    this.isShown = false
    this.playerData$ = null
  }

  onSubmit(param){
    this.playerData$ = this.pService.getPlayerData(param)
    this.playerWl$ = this.pService.getWinLose(param)
    this.playerMatches$ = this.pService.getRecentMatches(param)
    this.isShown = true
    // if(param){
    // this.isShown = true 
    // this.isLoading = true 
    // }
    // setTimeout(() => {
    //   if(param){
    //     this.mySub1 = this.pService.getPlayerData(param).subscribe(
    //       data =>{
    //         this.playerData$ = data
    //       }
    //     )
    //     this.mySub2 = this.pService.getWinLose(param).subscribe(
    //        data =>{
  
    //         this.isLoading = false
    //       }
    //     )
    //   }else{
    //     return this.error = "insert valid player number"
    //   }
    // }, 2000);
   
  }
  proPlayer(param){
    this.onSubmit(param)
  }

}
