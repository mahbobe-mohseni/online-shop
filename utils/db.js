import mangoose from "mangoose"
async function connect() {
    await mangoose.connect('mongodb://127.0.0.1:27017/shopping')
    console.log('connected.')
    
}
const db={connect}
export default db 




