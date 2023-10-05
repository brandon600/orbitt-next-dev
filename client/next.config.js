const keys = process.env.NODE_ENV === 'production' ? require('./src/config/keys_prod') : require('./src/config/keys_dev');

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ...keys
    },
}

module.exports = nextConfig;

