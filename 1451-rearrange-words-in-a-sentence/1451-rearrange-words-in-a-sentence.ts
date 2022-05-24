function arrangeWords(text: string): string {
const sorted = text.toLowerCase().split(' ').sort((a, b) => a.length - b.length);
        
    const str = sorted.join(' ');
    const cap = str.charAt(0).toUpperCase();
    
    return cap + str.slice(1);
};