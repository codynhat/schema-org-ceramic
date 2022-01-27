/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A discrete unit of inheritance which affects one or more biological traits (Source: [https://en.wikipedia.org/wiki/Gene](https://en.wikipedia.org/wiki/Gene)). Examples include FOXP2 (Forkhead box protein P2), SCARNA21 (small Cajal body-specific RNA 21), A- (agouti genotype).
 */
export type Gene = Gene1 & Gene2;
export type Gene1 = BioChemEntity;
/**
 * Any biological, chemical, or biochemical thing. For example: a protein; a gene; a chemical; a synthetic chemical.
 */
export type BioChemEntity = Thing;
export type ImageObjectStreamId = string;
export type CreativeWorkStreamId = string;
export type ActionStreamId = string;
export type EventStreamId = string;
export type GeneStreamId = string;
export type BioChemEntityStreamId = string;
export type AnatomicalStructureStreamId = string;
export type AnatomicalSystemStreamId = string;
export type DefinedTermStreamId = string;

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
export interface Gene2 {
  /**
   * Another gene which is a variation of this one.
   */
  alternativeOf?: GeneStreamId | GeneStreamId[];
  /**
   * Another BioChemEntity encoded by this one.
   */
  encodesBioChemEntity?: BioChemEntityStreamId | BioChemEntityStreamId[];
  /**
   * Tissue, organ, biological sample, etc in which activity of this gene has been observed experimentally. For example brain, digestive system.
   */
  expressedIn?:
    | (AnatomicalStructureStreamId | AnatomicalSystemStreamId | BioChemEntityStreamId | DefinedTermStreamId)
    | (AnatomicalStructureStreamId | AnatomicalSystemStreamId | BioChemEntityStreamId | DefinedTermStreamId)[];
  /**
   * A symbolic representation of a BioChemEnity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein.
   */
  hasBioPolymerSequence?: string | string[];
  [k: string]: unknown;
}
