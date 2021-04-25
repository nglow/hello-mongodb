import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Java script 'String' type
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export interface Product extends mongoose.Document {
  id: string; // Type script 'string' type
  title: string;
  description: string;
  price: number;
}
