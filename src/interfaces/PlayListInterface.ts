import { ExternalUrls } from "./ExternalInterface";
import { UserData } from "./UserDataInterface";
import { Image } from "./ImagesInterface";
export interface PlayListInfoProps {
    name: string;
    description: string;
}

interface Tracks{
    href: string;
}
export interface PlayLists{
    collaborative: boolean;
    description: string;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: UserData;
    primary_color: string | null;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
}