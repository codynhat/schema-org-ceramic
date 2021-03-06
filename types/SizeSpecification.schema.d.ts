/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Size related properties of a product, typically a size code ([[name]]) and optionally a [[sizeSystem]], [[sizeGroup]], and product measurements ([[hasMeasurement]]). In addition, the intended audience can be defined through [[suggestedAge]], [[suggestedGender]], and suggested body measurements ([[suggestedMeasurement]]).
 */
export type SizeSpecification = SizeSpecification1 & SizeSpecification2;
export type SizeSpecification1 = QualitativeValue;
export type PropertyValueStreamId = string;
export type QualitativeValueStreamId = string;
export type DefinedTermStreamId = string;
export type EnumerationStreamId = string;
export type MeasurementTypeEnumerationStreamId = string;
export type QuantitativeValueStreamId = string;
export type StructuredValueStreamId = string;

/**
 * A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.
 */
export interface QualitativeValue {
  /**
   * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   *
   */
  additionalProperty?: PropertyValueStreamId | PropertyValueStreamId[];
  /**
   * This ordering relation for qualitative values indicates that the subject is equal to the object.
   */
  equal?: QualitativeValueStreamId | QualitativeValueStreamId[];
  /**
   * This ordering relation for qualitative values indicates that the subject is greater than the object.
   */
  greater?: QualitativeValueStreamId | QualitativeValueStreamId[];
  /**
   * This ordering relation for qualitative values indicates that the subject is greater than or equal to the object.
   */
  greaterOrEqual?: QualitativeValueStreamId | QualitativeValueStreamId[];
  /**
   * This ordering relation for qualitative values indicates that the subject is lesser than the object.
   */
  lesser?: QualitativeValueStreamId | QualitativeValueStreamId[];
  /**
   * This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object.
   */
  lesserOrEqual?: QualitativeValueStreamId | QualitativeValueStreamId[];
  /**
   * This ordering relation for qualitative values indicates that the subject is not equal to the object.
   */
  nonEqual?: QualitativeValueStreamId | QualitativeValueStreamId[];
  /**
   * A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
   */
  valueReference?:
    | (
        | string
        | DefinedTermStreamId
        | EnumerationStreamId
        | MeasurementTypeEnumerationStreamId
        | PropertyValueStreamId
        | QualitativeValueStreamId
        | QuantitativeValueStreamId
        | StructuredValueStreamId
      )
    | (
        | string
        | DefinedTermStreamId
        | EnumerationStreamId
        | MeasurementTypeEnumerationStreamId
        | PropertyValueStreamId
        | QualitativeValueStreamId
        | QuantitativeValueStreamId
        | StructuredValueStreamId
      )[];
  [k: string]: unknown;
}
export interface SizeSpecification2 {
  /**
   * A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
   */
  hasMeasurement?: QuantitativeValueStreamId | QuantitativeValueStreamId[];
  /**
   * The size group (also known as "size type") for a product's size. Size groups are common in the fashion industry to define size segments and suggested audiences for wearable products. Multiple values can be combined, for example "men's big and tall", "petite maternity" or "regular"
   */
  sizeGroup?: string;
  /**
   * The size system used to identify a product's size. Typically either a standard (for example, "GS1" or "ISO-EN13402"), country code (for example "US" or "JP"), or a measuring system (for example "Metric" or "Imperial").
   */
  sizeSystem?: string;
  /**
   * The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
   */
  suggestedAge?: string;
  /**
   * The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
   */
  suggestedGender?: string;
  /**
   * A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
   */
  suggestedMeasurement?: QuantitativeValueStreamId | QuantitativeValueStreamId[];
  [k: string]: unknown;
}
