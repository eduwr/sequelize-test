require('dotenv').config()

module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: '<yourPassword>',
    database: process.env.DB_NAME,
    define: {
        timestamps: true,
        underscored: true,
    }
}