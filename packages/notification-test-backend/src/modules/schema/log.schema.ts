import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LogDtoType } from 'notification-core/src/types/log.types';

export type LogDocument = Log & Document;

@Schema({ timestamps: true })
export class Log {
  @Prop({ required: true })
  eventType: string;
  @Prop({ type: Object })
  data: LogDtoType;
}

export const LogSchema = SchemaFactory.createForClass(Log);
