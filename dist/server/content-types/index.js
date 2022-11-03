"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const newsletter_1 = __importDefault(require("./newsletter"));
const subscribed_user_1 = __importDefault(require("./subscribed-user"));
exports.default = { newsletter: newsletter_1.default, "subscribed-user": subscribed_user_1.default };
