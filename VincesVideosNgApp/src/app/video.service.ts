import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs';

import videoData from './data/videos.json';

@Injectable({
  providedIn: 'root'
})

export class VideoService {

  private videoApiUrl = 'http://localhost:7080/api/videos';

  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getVideos(): Observable<any> {
    console.log('Getting Videos');
    return this.httpClient.get<any[]>(this.videoApiUrl).pipe(tap(_ => console.log('Video API GET Method Called.')))
    //return of(videoData);
    
  }
}
