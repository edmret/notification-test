import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schema/user.schema';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async FindUsersByChannelAndSubscription(
    channelId: string,
    subscriptionId: string,
  ): Promise<User[]> {
    return this.userModel
      .find({
        Channels: channelId,
        Subscribed: subscriptionId,
      })
      .exec();
  }
}
