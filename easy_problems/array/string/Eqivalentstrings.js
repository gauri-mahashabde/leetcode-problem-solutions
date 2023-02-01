//https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

//solution 1
const arrayStringsAreEqual = (word1, word2) => {
	let str1, str2;
	let len = Math.max(word1.length, word2.length);

	for (let i = 0; i < len; i++) {
		const char1 = word1[i];
		const char2 = word2[i];

		if (char1) str1 += char1;
		if (char2) str2 += char2;
	}

	return str1 === str2;
};