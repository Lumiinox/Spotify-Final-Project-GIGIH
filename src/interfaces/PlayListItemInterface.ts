import { ISongs } from './SongInterface';

export interface AddedBy{
    href: string;
    id: string;
    type: string;
    uri: string;
}

export interface VideoThumbnail {
    url: string;
}

export interface PlayListItemI {
    added_at: string;
    added_by: AddedBy;
    is_local: boolean;
    primary_color: string | null;
    track: ISongs;
    video_thumbnail: string;
}