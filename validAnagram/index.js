var isAnagram = function (s, t) {
    if (s.length !== t.length)
        return false;
    var countS = {};
    var countT = {};
    for (var i = 0; i < s.length; i++) {
        if (countS[s[i]])
            countS[s[i]] += 1;
        else
            countS[s[i]] = 1;
        if (countT[t[i]])
            countT[t[i]] += 1;
        else
            countT[t[i]] = 1;
    }
    var isValid = true;
    for (var char in countS) {
        if (!countT[char] || (countS[char] != countT[char])) {
            isValid = false;
            break;
        }
    }
    return isValid;
};
var test = function () {
    var test1 = isAnagram("anagram", "nagaram");
    var test2 = isAnagram("car", "rat");
    var test3 = isAnagram("aacc", "ccac");
    console.log("===== test1:", test1);
    console.log("===== test2:", test2);
    console.log("===== test3", test3);
};
test();
