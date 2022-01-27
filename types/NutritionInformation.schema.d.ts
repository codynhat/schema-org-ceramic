/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Nutritional information about the recipe.
 */
export type NutritionInformation = NutritionInformation1 & NutritionInformation2;
export type NutritionInformation1 = StructuredValue;
/**
 * Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.
 */
export type StructuredValue = Intangible;
/**
 * A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.
 */
export type Intangible = Thing;
export type ImageObjectStreamId = string;
export type CreativeWorkStreamId = string;
export type ActionStreamId = string;
export type EventStreamId = string;

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
export interface NutritionInformation2 {
  /**
   * The number of calories.
   */
  calories?: string;
  /**
   * The number of grams of carbohydrates.
   */
  carbohydrateContent?: string;
  /**
   * The number of milligrams of cholesterol.
   */
  cholesterolContent?: string;
  /**
   * The number of grams of fat.
   */
  fatContent?: string;
  /**
   * The number of grams of fiber.
   */
  fiberContent?: string;
  /**
   * The number of grams of protein.
   */
  proteinContent?: string;
  /**
   * The number of grams of saturated fat.
   */
  saturatedFatContent?: string;
  /**
   * The serving size, in terms of the number of volume or mass.
   */
  servingSize?: string;
  /**
   * The number of milligrams of sodium.
   */
  sodiumContent?: string;
  /**
   * The number of grams of sugar.
   */
  sugarContent?: string;
  /**
   * The number of grams of trans fat.
   */
  transFatContent?: string;
  /**
   * The number of grams of unsaturated fat.
   */
  unsaturatedFatContent?: string;
  [k: string]: unknown;
}
