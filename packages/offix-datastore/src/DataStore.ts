import { Model, ModelConfig } from "./Model";
import { LocalStorage } from "./storage";
import { createGraphQLClient, GraphQLClientConfig } from "./replication/client/GraphQLClient";
import { buildGraphQLCRUDQueries } from "./replication/graphqlcrud/buildGraphQLCRUDQueries";
import { IReplicator } from "./replication/api/Replicator";
import { MutationReplicationEngine } from "./replication";
import { GraphQLCRUDReplicator } from "./replication/graphqlcrud/GraphQLCRUDReplicator";
import { IndexedDBStorage } from "./storage/adapters/IndexedDBStorage";

/**
 * Configuration Options for DataStore
 */
export interface DataStoreConfig {
  /**
   * The Database name
   */
  dbName: string;

  /**
   * The URQL config
   */
  clientConfig: GraphQLClientConfig;

  /**
   * The Schema Version number. Used to trigger a Schema upgrade
   */
  schemaVersion?: number;
}

export class DataStore {
  private dbName: string;
  private schemaVersion: number;
  private models: Model<unknown>[];
  private indexedDB: IndexedDBStorage;
  private storage: LocalStorage;
  private clientConfig: any;

  constructor(config: DataStoreConfig) {
    this.dbName = config.dbName;
    this.schemaVersion = config.schemaVersion || 1; // return 1 if schemaVersion is undefined or 0
    this.clientConfig = config.clientConfig;
    this.models = [];
    this.indexedDB = new IndexedDBStorage();
    this.storage = new LocalStorage(this.indexedDB);
  }

  public createModel<T>(config: ModelConfig<T>) {
    const model = new Model<T>(config, this.storage);
    this.models.push(model);
    return model;
  }

  public init() {
    const gqlClient = createGraphQLClient(this.clientConfig);
    const queries = buildGraphQLCRUDQueries(this.models);
    const gqlReplicator = new GraphQLCRUDReplicator(gqlClient, queries);
    const engine = new MutationReplicationEngine(gqlReplicator, (this.storage as LocalStorage));
    this.pushReplicator(gqlReplicator);
    this.indexedDB.createStores(this.dbName, this.schemaVersion);
    engine.start();
  }

  private pushReplicator(replicator: IReplicator) {
    this.models.forEach((model) => {
      model.setReplicator(replicator);
    });
  }
}
