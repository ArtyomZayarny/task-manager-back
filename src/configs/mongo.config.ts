import { ConfigService } from "@nestjs/config";
import { Severity } from "@typegoose/typegoose";
import { TypegooseModuleOptions } from "nestjs-typegoose";

export const getMongoConfig = async (
  configService: ConfigService
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService) => {
  //mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
  // return `mongodb+srv://${configService.get("MONGO_LOGIN")}:${configService.get(
  //   "MONGO_PASSWORD"
  // )}@cluster0.formhkq.mongodb.net/${configService.get("MONGO_DATABASE_NAME")}`;
 // mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]


 return 'mongodb://mongo:c6vjuyZYwFyi4MJpPiFv@containers-us-west-158.railway.app:6200';
};

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
