/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let res = [s[0]];
	for (let i=1; i<s.length; i++) {
		if (s[i] === res[res.length-1]) res.pop();
		else res.push(s[i])
	}
	return res.join('');
};