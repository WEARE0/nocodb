import BaseModelXcMeta from "./BaseModelXcMeta";
import ModelXcMetaMssql from "./ModelXcMetaMssql";
import ModelXcMetaMysql from "./ModelXcMetaMysql";
import ModelXcMetaOracle from "./ModelXcMetaOracle";
import ModelXcMetaPg from "./ModelXcMetaPg";
import ModelXcMetaSqlite from "./ModelXcMetaSqlite";

class ModelXcMetaFactory {
  public static create(connectionConfig, args):BaseModelXcMeta {
    if (connectionConfig.client === "mysql2" || connectionConfig.client === "mysql") {
      return new ModelXcMetaMysql(args)
    } else if (connectionConfig.client === "sqlite3") {
      return new ModelXcMetaSqlite(args)
    } else if (connectionConfig.client === "mssql") {
      return new ModelXcMetaMssql(args);
    } else if (connectionConfig.client === "pg") {
      return new ModelXcMetaPg(args);
    } else if (connectionConfig.client === "oracledb") {
      return new ModelXcMetaOracle(args);
    }

    throw new Error("Database not supported");
  }
}

export default ModelXcMetaFactory;
