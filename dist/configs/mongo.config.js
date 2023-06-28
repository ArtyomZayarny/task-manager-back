"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoConfig = void 0;
const getMongoConfig = async (configService) => {
    return Object.assign({ uri: getMongoString(configService) }, getMongoOptions());
};
exports.getMongoConfig = getMongoConfig;
const getMongoString = (configService) => {
    return 'mongodb://mongo:c6vjuyZYwFyi4MJpPiFv@containers-us-west-158.railway.app:6200/nest-task-db';
};
const getMongoOptions = () => ({
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//# sourceMappingURL=mongo.config.js.map