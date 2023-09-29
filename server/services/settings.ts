import { Strapi } from "@strapi/strapi";
import {ISettings} from "../types/ISettings";

const getPluginStore = () => {
  return strapi.store({
    environment: "",
    type: "plugin",
    name: "strapi-newsletter",
  });
};

export default ({ strapi }: { strapi: Strapi }) => ({
  async getSettings() {
    const pluginStore = getPluginStore();
    const config = await pluginStore.get({ key: "settings" }) as unknown as ISettings;

    return config;
  },
  async setSettings(body) {
    const pluginStore = getPluginStore();
    await pluginStore.set({ key: "settings", value: body });

    return body;
  },
  async getSetup() {
    const pluginStore = getPluginStore();
    const setup = await pluginStore.get({ key: "settings" }) as unknown as ISettings;

    if (setup && setup.provider) {
      return true;
    }

    return false;
  },
});
