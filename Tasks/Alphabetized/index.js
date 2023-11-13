function alphabetized(s) {
    return s
        // Remove whitespace and punctuation
        .replace(/[\W_]+/g, '')
        // Split into characters
        .split('')
        // Sort by comparing lowercase versions of characters
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        // Rejoin the sorted characters into a string
        .join('');
}