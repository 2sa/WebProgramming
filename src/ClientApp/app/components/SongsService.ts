import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class SongsService
{
    constructor(private http: Http) {}

    private _songs : SongUrl[];

    public loadSongs()
    {
        this.http.get('/api/songs/allsongs').subscribe((res) => {this._songs = res.json();})
    }
}

export class SongUrl
{
    public trackUrl: string;
}

export class PlaylistTrackDescription {
    constructor(public pos: number, public track: TrackDescription, public isActive: boolean){}
}

export class TrackDescription {
    artist: string;
    song: string;
    trackUrl: string;
    songId: number;
}