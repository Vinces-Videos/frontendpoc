import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import videoData from './data/videos.json';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }

  getVideos(): Observable<any> {
    return of(videoData);
  }
}
