import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistTrackDescription } from '../SongsService';

@Component({
    selector: 'playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})
export class PlayListComponent {

  @Input() songs : PlaylistTrackDescription[];

  @Output() onSongDelete = new EventEmitter<number>();
  @Output() onSongChange = new EventEmitter<number>();

  playingSong: number;
   public togglePlay(song: PlaylistTrackDescription)
   {
      this.songs.forEach(element => {
        if(element.isActive)
        {
          element.isActive = false;
        }

        if(element.pos === song.pos)
        {
          element.isActive = true;

          this.playingSong = song.pos;
          this.onSongChange.emit(this.playingSong);
        }
      });
   }

   public songDelete(song: PlaylistTrackDescription)
   {
     for (let i = 0; i < this.songs.length; ++i)
     {
      if(this.songs[i].pos === song.pos)
      {
        if(this.songs[i].isActive)
        {
          this.songs[i].isActive = false;
          this.playingSong = -1;
          this.onSongChange.emit(this.playingSong);
        }

        this.onSongDelete.emit(i);
        break;
      }
     }
   }
}
