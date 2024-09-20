class StringCompressor {
    compress(raw_string) {
        let string = raw_string.split('')
        let compressedString = ''
        let currentChar = string[0]
        let count = 0
        string.forEach(element => {
            if (currentChar === element) {
                count++
            }
            else {
                if (count > 1) {
                    compressedString += `${count}${currentChar}`
                }
                else {
                    compressedString += currentChar
                }
                currentChar = element
                count = 1
            }
        })
        if (count != 1) {
            compressedString += `${count}${currentChar}`
        }
        else {
            compressedString += currentChar
        }
        return compressedString
    }

    decompress(raw_string) {
        let compressedString = ''
        let count = 0
        let string = raw_string.split('')
        string.forEach(element => {
            if (Number.isInteger(Number.parseInt(element))) {
                count = Number(element)
            }
            else {
                for (let i = 0; i < count; i++) {
                    compressedString += element
                }
                count = 1
            }
        })
        return compressedString
    }
}
let compressor = new StringCompressor()
let c = compressor.compress('hhhhfshdbhjj')
console.log(c)
console.log(compressor.decompress(c))
