import { ExternalUrls } from "./ExternalInterface";
import { Image } from "./ImagesInterface"
export interface Followers{
    href?: string | null;
    total: string;
}

export interface UserData {
    display_name: string;
    external_urls: ExternalUrls;
    followers: Followers;
    href: string;
    id: string;
    images?: Image[];
    type: string;
    uri: string;
}