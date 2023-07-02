import { strEnum } from "../utils";

export const LogType = strEnum(["MessageSent", "MessageReceived"]);

export type LogType = keyof typeof LogType;
