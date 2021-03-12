import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthAdminDocument = AuthAdmin & Document;

@Schema()
export class AuthAdmin {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

}

export const AuthAdminSchema = SchemaFactory.createForClass(AuthAdmin);