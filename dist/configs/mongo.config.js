"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoConfig = void 0;
const getMongoConfig = async (configService) => {
    return Object.assign({ uri: getMongoString(configService) }, getMongoOptions());
};
exports.getMongoConfig = getMongoConfig;
const getMongoString = (configService) => {
    return 'mongodb://mongo:XoYFWKxU8347wE9SsAjO@containers-us-west-41.railway.app:5537';
};
const getMongoOptions = () => ({
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//# sourceMappingURL=mongo.config.js.map