import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop()
  age?: number;

  @Prop()
  email: string;

  @Prop()
  avatar: string;

  @Prop()
  data: Buffer;

  @Prop()
  contentType: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
