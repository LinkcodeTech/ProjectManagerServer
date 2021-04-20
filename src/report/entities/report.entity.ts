import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReportDocument = Report & Document;

@Schema()
export class Report {
    
  @Prop({ ref : 'User', required: true })
  userId : string;

  @Prop({ required: true })
  date : Date;

  @Prop({ref : 'Project' , required: true })
  projectId: string;

  @Prop({ required: true })
  comment: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);