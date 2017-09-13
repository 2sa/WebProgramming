import { Component } from '@angular/core';
import { PlaylistTrackDescription, TrackDescription } from '../SongsService';

@Component({
    selector: 'music-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent {

    public playListSongs : PlaylistTrackDescription[] = new Array<PlaylistTrackDescription>();

    public playlistSongId = 0;
    public inPlay: number = 0;
    public isActive:boolean = false;

    public songForPlay : PlaylistTrackDescription;

    public allSongs: TrackDescription[] = [
        {
            artist: "213", song: "wqeqwe", trackUrl:"http://www.w3schools.com/html/horse.mp3", songId: 1
        },
        {
            artist: "213a2a", song: "wqeqwe2", trackUrl:"http://www.lost-letters.com/wp-content/uploads/2013/02/cusb-cyl2985d.mp3", songId: 2
        },
        {
            artist: "aaa2132", song: "aawqeqaaawe2", trackUrl:"http://www.w3schools.com/html/horse.mp3", songId: 3
        }
    ];

    public songAdded(song: PlaylistTrackDescription)
    {
        this.playListSongs.push(song);
    }

    public songDeleted(idx: number)
    {
        this.deleteSongFromPlayList(idx);
    }

    public playlistAddSong(song: TrackDescription)
    {
        this.playListSongs.push({track: song, pos: ++this.playlistSongId, isActive:false});
    }

    public updatePlayer(idx:number)
    {
        if(idx === -1)
        {
            this.isActive = false;
            this.inPlay = idx;
        }

        this.playListSongs.forEach(element => {
            if(element.pos === idx)
            {
                this.inPlay = idx;
                this.isActive = true;
                this.songForPlay = element;
                this.songForPlay.isActive = true;
            }
        });
    }

    private deleteSongFromPlayList(idx: number)
    {
        this.playListSongs.splice(idx, 1);
    }

    public onPlayEnded()
    {
        console.log(this.playListSongs);

        this.songForPlay.isActive = false;

        var nextSongPos = 1;

        if(this.songForPlay.pos != this.playListSongs.length)
        {
            nextSongPos = this.songForPlay.pos + 1;
        }
        else
        {
            nextSongPos = 1;
        }

        console.log(nextSongPos);

        this.songForPlay = this.playListSongs[nextSongPos - 1];

        this.songForPlay.isActive = true;

        var player:any = document.getElementById('audioPlayer');
        player.currentTime = 0.0;
        player.play();
    }
}
