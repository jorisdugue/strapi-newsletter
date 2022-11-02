"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = __importDefault(require("./settings"));
const mailchimp_1 = __importDefault(require("./mailchimp"));
const convertkit_1 = __importDefault(require("./convertkit"));
const newsletter_1 = __importDefault(require("./newsletter"));
exports.default = {
    settings: settings_1.default,
    mailchimp: mailchimp_1.default,
    newsletter: newsletter_1.default,
    convertkit: convertkit_1.default,
};
