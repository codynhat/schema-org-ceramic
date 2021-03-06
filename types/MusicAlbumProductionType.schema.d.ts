/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
 */
export type MusicAlbumProductionType = MusicAlbumProductionType1 & MusicAlbumProductionType2;
export type MusicAlbumProductionType1 =
  | "CompilationAlbum"
  | "DJMixAlbum"
  | "DemoAlbum"
  | "LiveAlbum"
  | "MixtapeAlbum"
  | "RemixAlbum"
  | "SoundtrackAlbum"
  | "SpokenWordAlbum"
  | "StudioAlbum";
export type MusicAlbumProductionType2 = string;
