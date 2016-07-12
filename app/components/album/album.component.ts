import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
})
export class AlbumComponent implements OnInit, OnDestroy{ 
    id:string;
    album:Album[];
    tracks:any;
    artist:any;
    paramsSub:any;
    
    constructor(
        private _spotifyService:SpotifyService,
        private _activatedRoute:ActivatedRoute
        ){}

    ngOnInit(){
        this.paramsSub = this._activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            
            this._spotifyService.getAlbum(this.id).subscribe(album => {
                this.album = album;
                this.artist = album.artists;
                console.log(this.album)
            })

            this._spotifyService.getTracks(this.id).subscribe(tracks => {
                this.tracks = tracks.items
                console.log(this.tracks)
            })
        })
        console.log('ARTIST COMPONENT INIT')
    }
    
    ngOnDestroy(){
        this.paramsSub.unsubscribe();
        console.log('ARTIST COMPONENT DESTROYED')
    }

    
}