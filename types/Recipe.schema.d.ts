/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail.
 */
export type Recipe = Recipe1 & Recipe2;
export type Recipe1 = HowTo;
/**
 * Instructions that explain how to achieve a result by performing a sequence of steps.
 */
export type HowTo = CreativeWork;
/**
 * The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 */
export type CreativeWork = Thing;
export type ImageObjectStreamId = string;
export type CreativeWorkStreamId = string;
export type ActionStreamId = string;
export type EventStreamId = string;
export type ItemListStreamId = string;
export type RestrictedDietStreamId = string;

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
export interface Recipe2 {
  /**
   * The time it takes to actually cook the dish, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
   */
  cookTime?: string;
  /**
   * The method of cooking, such as Frying, Steaming, ...
   */
  cookingMethod?: string;
  /**
   * A single ingredient used in the recipe, e.g. sugar, flour or garlic.
   */
  ingredients?: string | string[];
  /**
   * Nutrition information about the recipe or menu item.
   */
  nutrition?: string;
  /**
   * The category of the recipe—for example, appetizer, entree, etc.
   */
  recipeCategory?: string;
  /**
   * The cuisine of the recipe (for example, French or Ethiopian).
   */
  recipeCuisine?: string;
  /**
   * A single ingredient used in the recipe, e.g. sugar, flour or garlic.
   */
  recipeIngredient?: string | string[];
  /**
   * A step in making the recipe, in the form of a single item (document, video, etc.) or an ordered list with HowToStep and/or HowToSection items.
   */
  recipeInstructions?: string | CreativeWorkStreamId | ItemListStreamId;
  /**
   * The quantity produced by the recipe (for example, number of people served, number of servings, etc).
   */
  recipeYield?: string;
  /**
   * Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.
   */
  suitableForDiet?: RestrictedDietStreamId | RestrictedDietStreamId[];
  [k: string]: unknown;
}