import { Db, Document, Filter, FindOptions } from "mongodb";
import { ObjectId } from "mongodb";
import clientPromise from "@/app/api/lib/mongodb";
import {Transaction} from "@/app/components/types";

export  class TransactionsCollection {
    private readonly COLLECTION = 'transaction';
    constructor() {
    }

    async list(filter:Filter<any>){
        const client = clientPromise;
        const db = new Db(await client,"dev") as Db;
        return db.collection(this.COLLECTION).find(filter).toArray();
    }


    async get(id: string){
        const client = clientPromise;
        const db = new Db(await client,"dev") as Db;
        return db.collection(this.COLLECTION).findOne({
            _id: new ObjectId(id)

        });
    }


    async create(transaction: Transaction){
        const client = clientPromise;
        const db = new Db(await client,"dev") as Db;
        const transactionWithObjectId = { ...transaction, _id: new ObjectId(transaction._id) };
        return db.collection(this.COLLECTION).insertOne(transactionWithObjectId);
    }

}