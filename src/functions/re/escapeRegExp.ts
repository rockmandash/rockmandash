import { reRegExpChar } from '../../regex';

/**
 * Escapes the `RegExp` special characters `^`, `$`, `\`, `.`, `*`, `+`,
 * `?`, `(`, `)`, `[`, `]`, `{`, `}`, and `|` in `string`.
 * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
 *
 * @example
 *
 * escapeRegExp('*Hello.World?');
 * // => '\\*Hello\\.World\\?'
 *
 */

function escapeRegExp(str: string): string {
  return str.replace(reRegExpChar, '\\$&'); // $& means the whole matched string
}

export default escapeRegExp;
