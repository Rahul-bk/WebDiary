const mongoose = require('mongoose')

const mongoDb = "mongodb://127.0.0.1:27017/WebDairy"

mongoose.connect(mongoDb, { useNewUrlParser: true })
