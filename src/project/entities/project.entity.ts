import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  projectManager: string;

  @Prop({ required: true, type: [{ ref: 'User', type: [Types.ObjectId] }] })
  developers: string[];

  @Prop({ required: true, type: [{ ref: 'Task', type: [Types.ObjectId] }] })
  tasks: string[];

}

export const ProjectSchema = SchemaFactory.createForClass(Project);