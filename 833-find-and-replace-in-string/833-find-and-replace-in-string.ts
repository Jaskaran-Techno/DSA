function findReplaceString(s: string, indices: number[], sources: string[], targets: string[]): string {
const res = [];

	for (let i = 0; i < indices.length; i++) {
		const start = indices[i],
			match = sources[i],
			substring = s.slice(start, start + match.length);
		if (substring == match) { 
			res[start] = targets[i]; 
			for (let j = start + 1; j < start + match.length; j++) 
                res[j] = "";
		}
	}

	for (let i = 0; i < s.length; i++)
        if (res[i] === undefined)
            res[i] = s[i]; 

	return res.join("");
};