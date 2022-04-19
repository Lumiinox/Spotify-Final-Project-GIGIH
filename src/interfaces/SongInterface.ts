import { Image } from "./ImagesInterface";
import { ExternalUrls, ExternalIds } from "./ExternalInterface";

export interface Artists{
    external_urls:ExternalUrls;
    href:string;
    id:string;
    name:string;
    type:string;
    uri:string;
}

export interface Album {
    album_type: string;
    artists: Artists[];
    available_market?: string[];
    external_urls:ExternalUrls;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface ISongs {
    album: Album;
    artists:Artists[];
    available_market?:string[];
    disc_number:number;
    duration_ms:number;
    explicit: boolean;
    external_ids:ExternalIds;
    external_urls:ExternalUrls;
    href:string;
    id:string;
    is_local:boolean;
    name:string;
    pupularity:number;
    preview_url:string;
    track_number:number;
    type:string;
    uri:string;
}