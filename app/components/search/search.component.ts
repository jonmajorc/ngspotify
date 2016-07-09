import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../Artist';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    directives:[ROUTER_DIRECTIVES]
})
export class SearchComponent { 
    searchStr:string;
    searchRes:Artist[];

    constructor(
        private _spotifyService:SpotifyService,
        private _router:Router
        ){}
    
    searchMusic(){
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res=>{
                this.searchRes = res.artists.items;
                
                console.log(res.artists.items);
                // console.log(this.searchRes);
            },err=>{
                console.log(err)
            });
    }

    onSelect(artist:Artist[]){
        this._router.navigate(['/artist',artist.id])
        console.log(artist)
    }
}