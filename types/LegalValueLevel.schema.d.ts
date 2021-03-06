/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A list of possible levels for the legal validity of a legislation.
 */
export type LegalValueLevel = LegalValueLevel1 & LegalValueLevel2;
export type LegalValueLevel1 =
  | "AuthoritativeLegalValue"
  | "DefinitiveLegalValue"
  | "OfficialLegalValue"
  | "UnofficialLegalValue";
export type LegalValueLevel2 = string;
