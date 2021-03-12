import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthManagerDocument = AuthManager & Document;

@Schema()
export class AuthManager {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

}

export const AuthManagerSchema = SchemaFactory.createForClass(AuthManager);