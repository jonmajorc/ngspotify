import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
})
export class ArtistComponent implements OnInit, OnDestroy{ 
    id:string;
    artist:Artist[];
    albums:Album[];
    paramsSub:any;
    
    constructor(
        private _spotifyService:SpotifyService,
        private _activatedRoute:ActivatedRoute
        ){}

    ngOnInit(){
        this.paramsSub = this._activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            this._spotifyService.getArtist(this.id).subscribe(artist => {
                this.artist = artist;
                console.log(artist);
            });
        })
        console.log('ARTIST COMPONENT INIT')
    }
    ngOnDestroy(){
        this.paramsSub.unsubscribe();
        console.log('ARTIST COMPONENT DESTROYED')
    }

    
}