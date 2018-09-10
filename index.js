const serde = require('php-serialize')

const asyncMain = require('async-main').default
const getStream = require('get-stream')

asyncMain(async function main() {
    const input = await getStream(process.stdin)
    
    if (process.argv[2] == '-d' || !process.argv[2]) {
        console.log(JSON.stringify(serde.unserialize(input)))
    } else {
        console.log(serde.serialize(JSON.parse(input)))
    }
})
