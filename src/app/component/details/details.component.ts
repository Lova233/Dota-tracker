import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../Services/player-request'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  playerData:any;
  playerWl:any

  constructor(
    private pService : PlayerService
  ) { }

  ngOnInit() {
  }

  onSubmit(param){
    this.pService.getPlayerData(param).subscribe(
      data =>{
        this.playerData = data
      }
    )
    this.pService.getWinLose(param).subscribe(
      data =>{
        this.playerWl = data
      }
    )
  }
}
