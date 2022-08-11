import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: any;

  constructor(private videoService:VideoService) { }

  ngOnInit(): void {
    console.log('Accessing video service.');
    this.videoService.getVideos().subscribe(videos => this.videos = videos);
  }

}
