/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Data type: PronounceableText.
 */
export type PronounceableText = PronounceableText1 & PronounceableText2;
export type PronounceableText1 = string;

export interface PronounceableText2 {
  /**
   * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
   */
  inLanguage?: string;
  /**
   * Representation of a text [[textValue]] using the specified [[speechToTextMarkup]]. For example the city name of Houston in IPA: /ˈhjuːstən/.
   */
  phoneticText?: string | string[];
  /**
   * Form of markup used. eg. [SSML](https://www.w3.org/TR/speech-synthesis11) or [IPA](https://www.wikidata.org/wiki/Property:P898).
   */
  speechToTextMarkup?: string | string[];
  /**
   * Text value being annotated.
   */
  textValue?: string | string[];
  [k: string]: unknown;
}
