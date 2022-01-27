/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound.
 */
export type MedicalGuidelineRecommendation = MedicalGuidelineRecommendation1 & MedicalGuidelineRecommendation2;
export type MedicalGuidelineRecommendation1 = MedicalGuideline;
/**
 * Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity.
 */
export type MedicalGuideline = MedicalEntity;
/**
 * The most generic type of entity related to health and the practice of medicine.
 */
export type MedicalEntity = Thing;
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
export interface MedicalGuidelineRecommendation2 {
  /**
   * Strength of the guideline's recommendation (e.g. 'class I').
   */
  recommendationStrength?: string | string[];
  [k: string]: unknown;
}
