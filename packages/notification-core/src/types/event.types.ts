import { strEnum } from "../utils";

export const LogTypeEnum = strEnum(["MessageSent", "MessageEmailReceived", "MessageSmsReceived", "MessagePushReceived"]);

export type LogType = keyof typeof LogTypeEnum;
