const mongoose = require("mongoose")
require("dotenv").config()

const connectDb = () => {
     mongoose
    .connect(process.env.MONGO_URL, {})
    .then(() => console.log("Успешно соединились с сервером MongoDB"))
    .catch(() => console.log("Ошибка при соединении с сервером MongoDB"))
}

module.exports = connectDb;