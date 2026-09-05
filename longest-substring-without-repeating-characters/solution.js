class Soluction {
    lengthOfLongestSubstring(s) {
        let left = 0
        let maxLenght = 0
        const chars = new Set()


        for (let right = 0; right < s.length; right++) {
            const currentChar = s[right]

            while (chars.has(currentChar)) {
                chars.delete(s[left])
                left++
            }

            chars.add(currentChar)
            const currentLenght = right - left + 1
            maxLenght = Math.max(maxLenght, currentLenght)
        }

        return maxLenght
    }
}

module.exports = Soluction