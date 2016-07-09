import { Album } from './Album';

export class Artist{
    id:string;
    name:string;
    genre:any;//could be an array or something else... who knows.
    albums:Album[];
}