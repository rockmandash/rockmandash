/**
 * Generates a unique ID maker.
 *
 * @example
 *
 * const uniqueUserId = uniqueIdMaker();
 * const uniqueContactId = uniqueIdMaker();
 *
 * console.log(`user${uniqueUserId()}`)
 * // => `user0`
 * console.log(`user${uniqueUserId()}`)
 * // => `user1`
 * console.log(`user${uniqueUserId()}`)
 * // => `user2`
 *
 * console.log(`contact${uniqueContactId()}`)
 * // => `contact0`
 * console.log(`contact${uniqueContactId()}`)
 * // => `contact1`
 * console.log(`contact${uniqueContactId()}`)
 * // => `contact2`
 *
 */

function uniqueIdMaker(): () => number {
  let count = -1;

  return () => {
    count++;
    return count;
  };
}

export default uniqueIdMaker;
