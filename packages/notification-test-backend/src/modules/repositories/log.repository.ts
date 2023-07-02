import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, LogDocument } from '../schema/log.schema';
@Injectable()
export class LogRepository {
  constructor(@InjectModel(Log.name) private LogModel: Model<LogDocument>) {}
  async create(log: Log): Promise<Log> {
    const newLog = new this.LogModel(log);
    return newLog.save();
  }
}
