import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LogType } from 'notification-core/src/types/event.types';
import { LogDtoType } from 'notification-core/src/types/log.types';

export type LogDocument = Log & Document;

@Schema({ timestamps: true })
export class Log {
  @Prop({ required: true, type: String })
  eventType: LogType;
  @Prop({ type: Object })
  data: LogDtoType;
  @Prop()
  createdAt?: Date;
}

export const LogSchema = SchemaFactory.createForClass(Log);
