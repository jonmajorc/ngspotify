import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

//TODO:(Me) Learn more about Injectable() decorator
@Injectable()
export class SpotifyService{
    private searchUrl:string;
    private artistUrl:string;
    private albumsUrl:string;
    private albumUrl:string;
    private trackUrl:string;
    private relatedArtistsUrl:string;

    constructor(private _http:Http){

    }

    searchMusic(str:string, type='artist'){
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        //TODO: (Me) Learn more about .map from observables rxjs
        //TODO: (Me) http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html
        return this._http.get(this.searchUrl)
            .map(res=>res.json());

    }
    getArtist(id:string){
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        //TODO: (Me) Learn more about .map from observables rxjs
        //TODO: (Me) http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html
        return this._http.get(this.artistUrl)
            .map(res=>res.json());

    }
    getAlbums(artistId:string){
        this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
        //TODO: (Me) Learn more about .map from observables rxjs
        //TODO: (Me) http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html
        return this._http.get(this.albumsUrl)
            .map(res=>res.json());

    }
    getAlbum(id:string){
        this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
        //TODO: (Me) Learn more about .map from observables rxjs
        //TODO: (Me) http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html
        return this._http.get(this.albumUrl)
            .map(res=>res.json());

    }
    getTracks(id:string){
        this.albumUrl = 'https://api.spotify.com/v1/albums/' + id + '/tracks';
        //TODO: (Me) Learn more about .map from observables rxjs
        //TODO: (Me) http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html
        return this._http.get(this.albumUrl)
            .map(res=>res.json());

    }
    getRelatedArtists(id:string){
        this.relatedArtistsUrl = 'https://api.spotify.com/v1/artists/' + id + '/related-artists';
        //TODO: (Me) Learn more about .map from observables rxjs
        //TODO: (Me) http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html
        return this._http.get(this.relatedArtistsUrl)
            .map(res=>res.json());

    }
    
}