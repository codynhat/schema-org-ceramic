/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 */
export type Order = Order1 & Order2;
export type Order1 = Intangible;
/**
 * A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.
 */
export type Intangible = Thing;
export type ImageObjectStreamId = string;
export type CreativeWorkStreamId = string;
export type ActionStreamId = string;
export type EventStreamId = string;
export type OfferStreamId = string;
export type OrganizationStreamId = string;
export type PersonStreamId = string;
export type OrderItemStreamId = string;
export type ProductStreamId = string;
export type ServiceStreamId = string;

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
export interface Order2 {
  /**
   * The offer(s) -- e.g., product, quantity and price combinations -- included in the order.
   */
  acceptedOffer?: OfferStreamId | OfferStreamId[];
  /**
   * The billing address for the order.
   */
  billingAddress?: string;
  /**
   * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
   */
  broker?: (OrganizationStreamId | PersonStreamId) | (OrganizationStreamId | PersonStreamId)[];
  /**
   * A number that confirms the given order or payment has been received.
   */
  confirmationNumber?: string;
  /**
   * Party placing the order or paying the invoice.
   */
  customer?: OrganizationStreamId | PersonStreamId;
  /**
   * Any discount applied (to an Order).
   */
  discount?: number | string;
  /**
   * Code used to redeem a discount.
   */
  discountCode?: string;
  /**
   * The currency of the discount.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
   */
  discountCurrency?: string;
  /**
   * Was the offer accepted as a gift for someone other than the buyer.
   */
  isGift?: boolean;
  /**
   * 'merchant' is an out-dated term for 'seller'.
   */
  merchant?: OrganizationStreamId | PersonStreamId;
  /**
   * Date order was placed.
   */
  orderDate?: string;
  /**
   * The delivery of the parcel related to this order or order item.
   */
  orderDelivery?: string;
  /**
   * The identifier of the transaction.
   */
  orderNumber?: string;
  /**
   * The current status of the order.
   */
  orderStatus?: string;
  /**
   * The item ordered.
   */
  orderedItem?:
    | (OrderItemStreamId | ProductStreamId | ServiceStreamId)
    | (OrderItemStreamId | ProductStreamId | ServiceStreamId)[];
  /**
   * The order is being paid as part of the referenced Invoice.
   */
  partOfInvoice?: string;
  /**
   * The date that payment is due.
   */
  paymentDue?: string;
  /**
   * The date that payment is due.
   */
  paymentDueDate?: string;
  /**
   * The name of the credit card or other method of payment for the order.
   */
  paymentMethod?: string;
  /**
   * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
   */
  paymentMethodId?: string | string[];
  /**
   * The URL for sending a payment.
   */
  paymentUrl?: string;
  /**
   * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
   */
  seller?: OrganizationStreamId | PersonStreamId;
  [k: string]: unknown;
}
