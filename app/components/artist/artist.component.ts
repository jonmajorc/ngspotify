import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TAB_DIRECTIVES} from '../../../node_modules/ng2-bootstrap/ng2-bootstrap';

@Component({
    moduleId:module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    directives:[TAB_DIRECTIVES, CORE_DIRECTIVES]
})
export class ArtistComponent implements OnInit, OnDestroy{ 
    id:string;
    artist:Artist[];
    albums:any;
    paramsSub:any;
    relatedArtists:any;
    relArtists:artImg[] = [];
    
    constructor(
        private _spotifyService:SpotifyService,
        private _activatedRoute:ActivatedRoute,
        private _route:Router
        ){}

    ngOnInit(){
        this.paramsSub = this._activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            this._spotifyService.getArtist(this.id).subscribe(artist => {
                this.artist = artist;
                console.log(artist);
            });
            this._spotifyService.getAlbums(this.id).subscribe(albums => {
                this.albums = albums.items;
                console.log(albums);
            });
            this._spotifyService.getRelatedArtists(this.id).subscribe(relatedArtists => {
                this.relatedArtists = relatedArtists.artists;
                // this.artistImg();
                console.log(this.relatedArtists)
            })
        })
        console.log('ARTIST COMPONENT INIT')
    }
    private artistImg(){
        this.relatedArtists.forEach((cv:any,i:any,a:any) => {
            // console.log(cv.images)
            
            let images = cv.images;
            let image:artImg;
            let url:string;
            let height:number;
            let width: number;
            // this.relArtists.push(cv.name)
            if (images.length > 1) {
                image = images.pop();
                url = image.url;
                height = image.height;
                width = image.width;
            }
            
            let rA:Object = {
                id:cv.id,
                name:cv.name,
                url:(url) ? url : null,
                height:(height) ? height : null,
                width:(width) ? width : null
            };
            this.relArtists.push(rA);
        });
        console.log(this.relArtists);
    }
    onSelectAlbum(album:any){
        this._route.navigate(['/album',album.id])       
        console.log(album);
    }
    onSelectRelArtist(artist:any){
        this._route.navigate(['/artist',artist.id])
        console.log(artist.id);
    }
    ngOnDestroy(){
        this.paramsSub.unsubscribe();
        console.log('ARTIST COMPONENT DESTROYED')
    }

    
}

class artImg{
    id:string;
    name:string;
    height:number;
    url:string;
    width:number;
}