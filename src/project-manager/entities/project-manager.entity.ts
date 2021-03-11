
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectManagerDocument = ProjectManager & Document;

@Schema()
export class ProjectManager {
  @Prop({ required: true })
  fname: string;

  @Prop({ required: true })
  lname: string;

}

export const ProjectManagerSchema = SchemaFactory.createForClass(ProjectManager);

