/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The act of participating in exertive activity for the purposes of improving health and fitness.
 */
export type ExerciseAction = ExerciseAction1 & ExerciseAction2;
export type ExerciseAction1 = PlayAction;
/**
 * The act of playing/exercising/training/performing for enjoyment, leisure, recreation, Competition or exercise.\n\nRelated actions:\n\n* [[ListenAction]]: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.\n* [[WatchAction]]: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.
 */
export type PlayAction = Action;
/**
 * An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.\n\nSee also [blog post](http://blog.schema.org/2014/04/announcing-schemaorg-actions.html) and [Actions overview document](https://schema.org/docs/actions.html).
 */
export type Action = Thing;
export type ImageObjectStreamId = string;
export type CreativeWorkStreamId = string;
export type ActionStreamId = string;
export type EventStreamId = string;
export type PlaceStreamId = string;
export type DietStreamId = string;
export type ExercisePlanStreamId = string;
export type PersonStreamId = string;
export type SportsActivityLocationStreamId = string;
export type SportsEventStreamId = string;
export type SportsTeamStreamId = string;

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
export interface ExerciseAction2 {
  /**
   * A sub property of location. The course where this action was taken.
   */
  course?: PlaceStreamId | PlaceStreamId[];
  /**
   * A sub property of instrument. The diet used in this action.
   */
  diet?: DietStreamId | DietStreamId[];
  /**
   * The distance travelled, e.g. exercising or travelling.
   */
  distance?: string | string[];
  /**
   * A sub property of location. The course where this action was taken.
   */
  exerciseCourse?: PlaceStreamId | PlaceStreamId[];
  /**
   * A sub property of instrument. The exercise plan used on this action.
   */
  exercisePlan?: ExercisePlanStreamId | ExercisePlanStreamId[];
  /**
   * A sub property of instrument. The diet used in this action.
   */
  exerciseRelatedDiet?: DietStreamId | DietStreamId[];
  /**
   * Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc.
   */
  exerciseType?: string | string[];
  /**
   * A sub property of location. The original location of the object or the agent before the action.
   */
  fromLocation?: PlaceStreamId | PlaceStreamId[];
  /**
   * A sub property of participant. The opponent on this action.
   */
  opponent?: PersonStreamId | PersonStreamId[];
  /**
   * A sub property of location. The sports activity location where this action occurred.
   */
  sportsActivityLocation?: SportsActivityLocationStreamId | SportsActivityLocationStreamId[];
  /**
   * A sub property of location. The sports event where this action occurred.
   */
  sportsEvent?: SportsEventStreamId | SportsEventStreamId[];
  /**
   * A sub property of participant. The sports team that participated on this action.
   */
  sportsTeam?: SportsTeamStreamId | SportsTeamStreamId[];
  /**
   * A sub property of location. The final location of the object or the agent after the action.
   */
  toLocation?: PlaceStreamId | PlaceStreamId[];
  [k: string]: unknown;
}
