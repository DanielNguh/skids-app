import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, tap ,throwError,map} from 'rxjs';
import { catchError, retry } from 'rxjs';
import { ITrack } from './models/ITrack';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http: HttpClient) { };

  getTracks(){
     return this.http
    .get<{[id: string]: ITrack}>('https://angular-9172e-default-rtdb.firebaseio.com/test/users.json')//replace with initial value
    .pipe(map(tracks => {
      let trackData: ITrack[] =[];
      for (let id in tracks) {
        trackData.push({...tracks[id], id})
      }
      return trackData;

    }));

  }

  updateTrack(){

  }


}
