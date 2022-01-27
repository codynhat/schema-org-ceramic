/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The delivery of a parcel either via the postal service or a commercial service.
 */
export type ParcelDelivery = ParcelDelivery1 & ParcelDelivery2;
export type ParcelDelivery1 = Intangible;
/**
 * A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.
 */
export type Intangible = Thing;
export type ImageObjectStreamId = string;
export type CreativeWorkStreamId = string;
export type ActionStreamId = string;
export type EventStreamId = string;
export type DeliveryEventStreamId = string;
export type ProductStreamId = string;
export type OrganizationStreamId = string;
export type PersonStreamId = string;

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
export interface ParcelDelivery2 {
  /**
   * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
   */
  carrier?: string;
  /**
   * Destination address.
   */
  deliveryAddress?: string;
  /**
   * New entry added as the package passes through each leg of its journey (from shipment to final delivery).
   */
  deliveryStatus?: DeliveryEventStreamId | DeliveryEventStreamId[];
  /**
   * The earliest date the package may arrive.
   */
  expectedArrivalFrom?: string;
  /**
   * The latest date the package may arrive.
   */
  expectedArrivalUntil?: string;
  /**
   * Method used for delivery or shipping.
   */
  hasDeliveryMethod?: string;
  /**
   * Item(s) being shipped.
   */
  itemShipped?: ProductStreamId | ProductStreamId[];
  /**
   * Shipper's address.
   */
  originAddress?: string;
  /**
   * The overall order the items in this delivery were included in.
   */
  partOfOrder?: string;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   */
  provider?: OrganizationStreamId | PersonStreamId;
  /**
   * Shipper tracking number.
   */
  trackingNumber?: string;
  /**
   * Tracking url for the parcel delivery.
   */
  trackingUrl?: string;
  [k: string]: unknown;
}