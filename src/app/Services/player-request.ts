import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { JsonPipe } from '@angular/common';



@Injectable({
  providedIn: 'root',
})

export class PlayerService {
  

  constructor(
    private http: HttpClient
  ) { }


  getPlayerData(param):any{
    return this.http.get("https://api.opendota.com/api/players/"+ param)
  }

  getWinLose(param):any{
    return this.http.get("https://api.opendota.com/api/players/"+ param + "/wl")
  }
}