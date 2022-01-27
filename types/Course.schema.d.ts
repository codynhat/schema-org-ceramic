/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners.
 */
export type Course = Course1 & Course2;
export type Course1 = CreativeWork & LearningResource;
/**
 * The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 */
export type CreativeWork = Thing;
export type ImageObjectStreamId = string;
export type CreativeWorkStreamId = string;
export type ActionStreamId = string;
export type EventStreamId = string;
/**
 * The LearningResource type can be used to indicate [[CreativeWork]]s (whether physical or digital) that have a particular and explicit orientation towards learning, education, skill acquisition, and other educational purposes.
 *
 * [[LearningResource]] is expected to be used as an addition to a primary type such as [[Book]], [[VideoObject]], [[Product]] etc.
 *
 * [[EducationEvent]] serves a similar purpose for event-like things (e.g. a [[Trip]]). A [[LearningResource]] may be created as a result of an [[EducationEvent]], for example by recording one.
 */
export type LearningResource = CreativeWork1;
/**
 * The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 */
export type CreativeWork1 = Thing;
export type AlignmentObjectStreamId = string;
export type CourseStreamId = string;
export type EducationalOccupationalCredentialStreamId = string;
export type CourseInstanceStreamId = string;
export type StructuredValueStreamId = string;

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
export interface Course2 {
  /**
   * The identifier for the [[Course]] used by the course [[provider]] (e.g. CS101 or 6.001).
   */
  courseCode?: string;
  /**
   * Requirements for taking the Course. May be completion of another [[Course]] or a textual description like "permission of instructor". Requirements may be a pre-requisite competency, referenced using [[AlignmentObject]].
   */
  coursePrerequisites?:
    | (string | AlignmentObjectStreamId | CourseStreamId)
    | (string | AlignmentObjectStreamId | CourseStreamId)[];
  /**
   * A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program.
   */
  educationalCredentialAwarded?: string | (string | string | EducationalOccupationalCredentialStreamId)[];
  /**
   * An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students.
   */
  hasCourseInstance?: CourseInstanceStreamId | CourseInstanceStreamId[];
  /**
   * The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram.
   */
  numberOfCredits?: number | StructuredValueStreamId;
  /**
   * A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program.
   */
  occupationalCredentialAwarded?: string | (string | string | EducationalOccupationalCredentialStreamId)[];
  [k: string]: unknown;
}