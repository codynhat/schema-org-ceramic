/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting.
 */
export type Game = Game1 & Game2;
export type Game1 = CreativeWork;
/**
 * The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 */
export type CreativeWork = Thing;
export type ImageObjectStreamId = string;
export type CreativeWorkStreamId = string;
export type ActionStreamId = string;
export type EventStreamId = string;
export type ThingStreamId = string;
export type PlaceStreamId = string;
export type PostalAddressStreamId = string;
export type QuantitativeValueStreamId = string;

/**
 * The most generic type of item.
 */
export interface Thing {
  "@context"?: string;
  "@type"?: string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string | string[];
  /**
   * An alias for the item.
   */
  alternateName?: string | string[];
  /**
   * A description of the item.
   */
  description?: string | string[];
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string | string[];
  /**
   * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
   *
   */
  identifier?: string;
  /**
   * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
   */
  image?: string | (string | ImageObjectStreamId)[];
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
   */
  mainEntityOfPage?: string | (string | CreativeWorkStreamId)[];
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: ActionStreamId | ActionStreamId[];
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
   */
  sameAs?: string | string[];
  /**
   * A CreativeWork or Event about this Thing.
   */
  subjectOf?: (CreativeWorkStreamId | EventStreamId) | (CreativeWorkStreamId | EventStreamId)[];
  /**
   * URL of the item.
   */
  url?: string;
  [k: string]: unknown;
}
export interface Game2 {
  /**
   * A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).
   */
  characterAttribute?: ThingStreamId | ThingStreamId[];
  /**
   * An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.
   */
  gameItem?: ThingStreamId | ThingStreamId[];
  /**
   * Real or fictional location of the game (or part of game).
   */
  gameLocation?: (string | PlaceStreamId | PostalAddressStreamId) | (string | PlaceStreamId | PostalAddressStreamId)[];
  /**
   * Indicate how many people can play this game (minimum, maximum, or range).
   */
  numberOfPlayers?: QuantitativeValueStreamId | QuantitativeValueStreamId[];
  /**
   * The task that a player-controlled character, or group of characters may complete in order to gain a reward.
   */
  quest?: string;
  [k: string]: unknown;
}
