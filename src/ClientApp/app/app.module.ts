import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { SongsService } from './components/SongsService';
import { PlayerComponent } from './components/player/player.component';
import { PlayListComponent } from './components/playlist/playlist.component';
import { SonglistComponent } from './components/songlist/songlist.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        PlayListComponent,
        SonglistComponent,
        PlayerComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: PlayerComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers:
    [
        {provide: APP_BASE_HREF, useValue : '/' },
        SongsService
    ]
})
export class AppModule {
}
