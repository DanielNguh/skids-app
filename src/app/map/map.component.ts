import { Component, OnInit } from '@angular/core';
import { AngularOpenlayersModule} from 'ngx-openlayers';
import 'ol/ol.css';
import { TrackService } from '../track.service';
import { Observable} from 'rxjs';
import { ITrack } from '../models/ITrack';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['../../../node_modules/ol/ol.css','./map.component.css']
})
export class MapComponent implements OnInit,AngularOpenlayersModule{
  public zoom = 15;
  public i:number = 0;
  public opacity = 1.0;
  public width = 5;
  satelliteView: boolean = false;
  buttonEl: string = 'Satellite';
  index: number = 0;
  titleZoomIn = 'Zoom in';
  titleZoomOut = 'Zoom out';
  public inpopupClosed?: boolean;
  public outpopupClosed?: boolean;
  tracks: ITrack[] = [];
  public refI: number = 0;


  increaseZoom() {
    this.zoom  = Math.min(this.zoom + 1, 20);
    // console.log('zoom: ', this.zoom);
  }

  decreaseZoom() {
    this.zoom  = Math.max(this.zoom - 1, 1);
    // console.log('zoom: ', this.zoom);
  }

  satelliteDisplay() {
      this.index += 1;
      if ((this.index % 2) === 0){
        this.satelliteView = false;
        this.buttonEl = 'Satellite';

      }
      else {
        this.satelliteView = true;
        this.buttonEl = 'Streets';

      }
  }
  closePopupIn() {
    this.inpopupClosed = true;
  }
  closePopupOut() {
    this.outpopupClosed = true;
  }

  refresh() {
    console.log('refreshed');

    this.ngOnInit();
  }

  live(){
    console.log('live mode');
     let times = 0;
     let interval = setInterval(()=>{
      times++;
      if(times === 200) {
        clearInterval(interval);
      }
      this.ngOnInit();
    },2000);

  }

  constructor(public trackService: TrackService) { }

  ngOnInit() {
    this.trackService.getTracks().subscribe((data) => {
      this.tracks = data;
      // console.log(data[0].latitude);
      // console.log(data[0].longitude);
      // console.log(data[0].checkBit);
      this.i= this.tracks.length -1 ;
      console.log(data[1]);
    });

  }



}
