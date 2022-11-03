"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async getSettings(ctx) {
        ctx.body = await strapi
            .plugin("strapi-newsletter")
            .service("settings")
            .getSettings();
    },
    async setSettings(ctx) {
        ctx.body = await strapi
            .plugin("strapi-newsletter")
            .service("settings")
            .setSettings(ctx.request.body);
    },
    async getSetup(ctx) {
        ctx.body = await strapi
            .plugin("strapi-newsletter")
            .service("settings")
            .getSetup();
    },
});
