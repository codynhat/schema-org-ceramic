/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge make a clear difference between them.
 */
export type Drug = Drug1 & Drug2;
export type Drug1 = Substance;
/**
 * Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical.
 */
export type Substance = MedicalEntity;
/**
 * The most generic type of entity related to health and the practice of medicine.
 */
export type MedicalEntity = Thing;
export type ImageObjectStreamId = string;
export type CreativeWorkStreamId = string;
export type ActionStreamId = string;
export type EventStreamId = string;
export type DrugStrengthStreamId = string;
export type DoseScheduleStreamId = string;
export type DrugStreamId = string;
export type DrugLegalStatusStreamId = string;
export type MedicalEnumerationStreamId = string;

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
export interface Drug2 {
  /**
   * An active ingredient, typically chemical compounds and/or biologic substances.
   */
  activeIngredient?: string | string[];
  /**
   * A route by which this drug may be administered, e.g. 'oral'.
   */
  administrationRoute?: string | string[];
  /**
   * Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.
   */
  alcoholWarning?: string;
  /**
   * An available dosage strength for the drug.
   */
  availableStrength?: DrugStrengthStreamId | DrugStrengthStreamId[];
  /**
   * Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers.
   */
  breastfeedingWarning?: string;
  /**
   * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
   */
  clincalPharmacology?: string;
  /**
   * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
   */
  clinicalPharmacology?: string | string[];
  /**
   * A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'.
   */
  dosageForm?: string | string[];
  /**
   * A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
   */
  doseSchedule?: DoseScheduleStreamId | DoseScheduleStreamId[];
  /**
   * The class of drug this belongs to (e.g., statins).
   */
  drugClass?: string;
  /**
   * The unit in which the drug is measured, e.g. '5 mg tablet'.
   */
  drugUnit?: string;
  /**
   * Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.
   */
  foodWarning?: string;
  /**
   * The insurance plans that cover this drug.
   */
  includedInHealthInsurancePlan?: string;
  /**
   * Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.
   */
  interactingDrug?: DrugStreamId | DrugStreamId[];
  /**
   * True if the drug is available in a generic form (regardless of name).
   */
  isAvailableGenerically?: boolean;
  /**
   * True if this item's name is a proprietary/brand name (vs. generic name).
   */
  isProprietary?: boolean;
  /**
   * Link to the drug's label details.
   */
  labelDetails?: string;
  /**
   * The drug or supplement's legal status, including any controlled substance schedules that apply.
   */
  legalStatus?: string | DrugLegalStatusStreamId | MedicalEnumerationStreamId;
  /**
   * The manufacturer of the product.
   */
  manufacturer?: string;
  /**
   * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
   */
  maximumIntake?: string;
  /**
   * The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.
   */
  mechanismOfAction?: string;
  /**
   * The generic name of this drug or supplement.
   */
  nonProprietaryName?: string;
  /**
   * Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.
   */
  overdosage?: string;
  /**
   * Pregnancy category of this drug.
   */
  pregnancyCategory?: string;
  /**
   * Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy.
   */
  pregnancyWarning?: string;
  /**
   * Link to prescribing information for the drug.
   */
  prescribingInfo?: string;
  /**
   * Indicates the status of drug prescription eg. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc.
   */
  prescriptionStatus?: string;
  /**
   * Proprietary name given to the diet plan, typically by its originator or creator.
   */
  proprietaryName?: string | string[];
  /**
   * Any other drug related to this one, for example commonly-prescribed alternatives.
   */
  relatedDrug?: DrugStreamId | DrugStreamId[];
  /**
   * The RxCUI drug identifier from RXNORM.
   */
  rxcui?: string;
  /**
   * Any FDA or other warnings about the drug (text or URL).
   */
  warning?: string;
  [k: string]: unknown;
}
