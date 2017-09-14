import {FormBuilder, Validators,  FormGroup} from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistTrackDescription, TrackDescription } from '../SongsService';

@Component({
    selector: 'songlist',
    templateUrl: './songlist.component.html',
    styleUrls: ['./songlist.component.css']
})
export class SonglistComponent {
    constructor(private readonly formBuilder: FormBuilder){
        this.searchForm = this.formBuilder.group(
			{
				searchString: ['', Validators.required]
			});
    }

    @Input() songs: TrackDescription[];
    @Output() onSongAddedToPlayList = new EventEmitter<TrackDescription>();

    currentCount = 0;
    

    public searchForm:FormGroup;

    public addToPlayList(song:TrackDescription)
    {
        //console.log(song);
        this.onSongAddedToPlayList.emit(song);
        this.currentCount++;
    }

    public sortBySongName()
    {
        this.songs.sort(this.compareBySongName);
    }

    public compareBySongName(first:TrackDescription, second:TrackDescription)
    {
        if (first.song == second.song)
            return 0;
        if (first.song < second.song)
            return -1;
        else
            return 1; 
    }

     public sortByArtistName()
    {
        this.songs.sort(this.compareByArtistName);
    }

    public compareByArtistName(first:TrackDescription, second:TrackDescription)
    {
        if (first.artist == second.artist)
            return 0;
        if (first.artist < second.artist)
            return -1;
        else
            return 1; 
    }
}
