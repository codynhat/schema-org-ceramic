/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

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
