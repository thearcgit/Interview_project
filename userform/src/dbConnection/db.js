import mongoose from "mongoose"

const database = async (db) => {
    try {
        mongoose.connect(db)
        console.log(`Connected Sucessfully`)
    } catch (error) {
        console.log({
            msg:`Unable to Connect`,
            err:error
        })
        
    }
}


export default database