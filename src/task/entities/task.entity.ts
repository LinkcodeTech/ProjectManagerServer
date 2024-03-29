import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  projectId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  assignedTo: string;

  @Prop({ 
    required: true,
    enum: ['TODO', 'INPROGRESS', 'DONE']
  })
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);