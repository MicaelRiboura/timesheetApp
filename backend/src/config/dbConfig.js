require('dotenv/config');

module.exports = {
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,

    define: {
        timestamps: true,
        underscored: false
    }
};