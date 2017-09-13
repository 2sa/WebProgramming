import { Injectable } from '@angular/core';

declare var ID3: any;

@Injectable()
export class SongsService
{
    constructor()
    {
        ID3.loadTags("filename.mp3", function() {
            var tags = ID3.getAllTags("filename.mp3");
            alert(tags.artist + " - " + tags.title + ", " + tags.album);
        });
    }
}