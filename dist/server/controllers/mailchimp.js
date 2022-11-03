"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async checkConnection(ctx) {
        try {
            ctx.body = await strapi
                .plugin("strapi-newsletter")
                .service("mailchimp")
                .checkConnection();
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
});
