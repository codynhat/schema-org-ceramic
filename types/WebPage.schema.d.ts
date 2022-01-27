/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as breadcrumb may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.
 */
export type WebPage = WebPage1 & WebPage2;
export type WebPage1 = CreativeWork;
/**
 * The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 */
export type CreativeWork = Thing;
export type ImageObjectStreamId = string;
export type CreativeWorkStreamId = string;
export type ActionStreamId = string;
export type EventStreamId = string;
export type BreadcrumbListStreamId = string;
export type OrganizationStreamId = string;
export type PersonStreamId = string;
export type SpeakableSpecificationStreamId = string;
export type SpecialtyStreamId = string;

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
export interface WebPage2 {
  /**
   * A set of links that can help a user understand and navigate a website hierarchy.
   */
  breadcrumb?: string | (string | BreadcrumbListStreamId)[];
  /**
   * Date on which the content on this web page was last reviewed for accuracy and/or completeness.
   */
  lastReviewed?: string;
  /**
   * Indicates if this web page element is the main subject of the page.
   */
  mainContentOfPage?: string;
  /**
   * Indicates the main image on the page.
   */
  primaryImageOfPage?: string;
  /**
   * A link related to this web page, for example to other related web pages.
   */
  relatedLink?: string | string[];
  /**
   * People or organizations that have reviewed the content on this web page for accuracy and/or completeness.
   */
  reviewedBy?: (OrganizationStreamId | PersonStreamId) | (OrganizationStreamId | PersonStreamId)[];
  /**
   * One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.
   */
  significantLink?: string | string[];
  /**
   * The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.
   */
  significantLinks?: string;
  /**
   * Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.
   *
   * The *speakable* property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:
   *
   * 1.) *id-value* URL references - uses *id-value* of an element in the page being annotated. The simplest use of *speakable* has (potentially relative) URL values, referencing identified sections of the document concerned.
   *
   * 2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the [[cssSelector]] property.
   *
   * 3.)  XPaths - addresses content via XPaths (assuming an XML view of the content). Use the [[xpath]] property.
   *
   *
   * For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this
   * we define a supporting type, [[SpeakableSpecification]]  which is defined to be a possible value of the *speakable* property.
   *
   */
  speakable?: string | (string | SpeakableSpecificationStreamId)[];
  /**
   * One of the domain specialities to which this web page's content applies.
   */
  specialty?: SpecialtyStreamId | SpecialtyStreamId[];
  [k: string]: unknown;
}