import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistTrackDescription, TrackDescription } from '../SongsService';

@Component({
    selector: 'songlist',
    templateUrl: './songlist.component.html',
    styleUrls: ['./songlist.component.css']
})
export class SonglistComponent {
    @Input() songs: TrackDescription[];
    @Output() onSongAddedToPlayList = new EventEmitter<TrackDescription>();

    currentCount = 0;

    public addToPlayList(song:TrackDescription)
    {
        //console.log(song);
        this.onSongAddedToPlayList.emit(song);
        this.currentCount++;
    }
}
