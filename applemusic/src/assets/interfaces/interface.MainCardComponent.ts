export interface ImainCards {
  url?: string;
  alt?: string;
  title?: string;
  description?: string;
}

export interface Idata {
    newdata:IDataSong[]
}


export interface IAlbum {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  
}

export interface IArtist {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
}

export interface IDataSong {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: IArtist;
  album: IAlbum;
  type: string;
  isrc: string;
}


export interface IsecondaryCards {
url:string,
alt?:string,
description:string,
}

export interface SidebarProps {
  onSearchResults: (songs: IDataSong[]) => void;
}

export interface HomepageProps {
  songs: IDataSong[];
}