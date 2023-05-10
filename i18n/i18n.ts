import {I18n} from "i18n-js";
import en from "./locales/en";
import ukr from "./locales/ukr";
import * as Localization from 'expo-localization';

const i18n = new I18n({en, ukr, "ru-US": ukr});

i18n.enableFallback = true;

i18n.defaultLocale = "en";
i18n.locale = Localization.locale;

export default i18n;
export const t = i18n.t;