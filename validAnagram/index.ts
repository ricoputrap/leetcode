/**
 * - Title  : 242. Valid Anagram
 * - URL    : https://leetcode.com/problems/valid-anagram/
 * - Level  : Easy
 * - Date   : Fri, 12 Aug 2022
 * - Time   : 20 minutes (08.40 - 09.00)
 */

const isAnagram = (s: string, t: string): boolean => {

  if (s.length !== t.length)
    return false;

  const countS = {};
  const countT = {};

  for (let i = 0; i < s.length; i++) {
    if (countS[s[i]]) countS[s[i]] += 1;
    else countS[s[i]] = 1;

    if (countT[t[i]]) countT[t[i]] += 1;
    else countT[t[i]] = 1;
  }

  let isValid = true;
  for (let char in countS) {
    if (!countT[char] || (countS[char] != countT[char])) {
      isValid = false;
      break;
    }
  }

  return isValid;
}

const test = (): void => {
  const test1 = isAnagram("anagram", "nagaram");
  const test2 = isAnagram("car", "rat");
  const test3 = isAnagram("aacc", "ccac");

  console.log("===== test1:", test1);
  console.log("===== test2:", test2);
  console.log("===== test3", test3);
  
}

test();