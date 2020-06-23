import { IStorageAdapter } from "../Storage";
import { PredicateFunction } from "../../predicates";

/**
 * Web Storage Implementation for DataStore using IndexedDB
 */
export class IndexedDBStorage implements IStorageAdapter {
    private indexedDB: Promise<IDBDatabase>;

    constructor(dbName: string, storeNames: string[], schemaVersion: number) {
        this.indexedDB = new Promise((resolve, reject) => {
            const openreq = indexedDB.open(dbName, schemaVersion);
            openreq.onerror = () => reject(openreq.error);
            openreq.onsuccess = () => {
                const db = openreq.result;
                db.onversionchange = function() {
                    this.close();
                    // alert("Please reload the page.");
                };
                resolve(db);
            };

            openreq.onupgradeneeded = () => {
                const db = openreq.result;
                const existingStoreNames = db.objectStoreNames;

                for (let i = 0; i < existingStoreNames.length; i++) {
                    const storeName = (existingStoreNames.item(i) as string);
                    const existingModelStoreName = storeNames.find((modelStoreName) => (
                        modelStoreName === storeName
                    ));
                    if (existingModelStoreName) { return; }

                    // model has been removed, remove it's store
                    db.deleteObjectStore(storeName);
                }
                storeNames.forEach((storeName) => {
                    if (existingStoreNames.contains(storeName)) { return; }
                    db.createObjectStore(storeName, { keyPath: "id" });
                });
            };
        });
    }

    public async save(storeName: string, input: any) {
        const store = await this.getStore(storeName);
        const key = await this.convertToPromise<IDBValidKey>(store.add(input));
        return this.convertToPromise<any>(store.get(key));
    }

    public async query(storeName: string, predicate?: PredicateFunction) {
        const store = await this.getStore(storeName);
        const all = await this.convertToPromise<any[]>(store.getAll());

        if (!predicate) { return all; }
        return predicate.filter(all);
    }

    public async update(storeName: string, input: any) {
        const store = await this.getStore(storeName);
        const key = await this.convertToPromise<IDBValidKey>(store.put(input));
        return this.convertToPromise<any>(store.get(key));
    }

    public async remove(storeName: string, predicate?: PredicateFunction) {
        const store = await this.getStore(storeName);
        const all = await this.convertToPromise<any[]>(store.getAll());
        let targets = all;
        if (predicate) {
            targets = predicate.filter(all);
        }
        await Promise.all(
            targets.map((t) => this.convertToPromise(store.delete(t.id)))
        );
        return targets;
    }

    public getIndexedDBInstance() {
        return this.indexedDB;
    }

    private async getStore(storeName: string) {
        const db = await this.indexedDB;
        return db.transaction(storeName, "readwrite")
            .objectStore(storeName);
    }

    private convertToPromise<T>(request: IDBRequest) {
        return new Promise<T>((resolve, reject) => {
            request.onsuccess = (event) => {
                resolve(request.result);
            };

            request.onerror = (event) => {
                reject(request.error);
            };
        });
    }
}
