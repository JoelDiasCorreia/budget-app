import { Db, Filter } from "mongodb";
import { ObjectId } from "mongodb";
import clientPromise from "@/app/api/lib/mongodb";
import { Category } from "@/app/components/types";

export class CategoriesCollection {
  private readonly COLLECTION = "category";
  constructor() {}

  async list(filter: Filter<any>) {
    const client = clientPromise;
    const db = new Db(await client, "dev") as Db;
    return db.collection(this.COLLECTION).find(filter).toArray();
  }

  async get(id: string) {
    const client = clientPromise;
    const db = new Db(await client, "dev") as Db;
    return db.collection(this.COLLECTION).findOne({
      _id: new ObjectId(id),
    });
  }

  async create(category: Category) {
    const client = clientPromise;
    const db = new Db(await client, "dev") as Db;
    const transactionWithObjectId = { ...category, _id: new ObjectId(category._id) };
    return db.collection(this.COLLECTION).insertOne(transactionWithObjectId);
  }

  async delete(id: string) {
    const client = clientPromise;
    const db = new Db(await client, "dev") as Db;
    return db.collection(this.COLLECTION).deleteOne({
      _id: new ObjectId(id),
    });
  }
}
