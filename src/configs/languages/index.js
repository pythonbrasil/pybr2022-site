import { TEXT_PTBR } from './text-ptbr';
import { TEXT_ES } from './text-es';
import { TEXT_EN } from './text-en';

import SponsoringDetailsPTBR from "@files/patrocinio_python_brasil_ptbr.pdf";
import SponsoringDetailsES from "@files/patrocinio_python_brasil_es.pdf";
import SponsoringDetailsEN from "@files/patrocinio_python_brasil_en.pdf";

const LANGUAGES = [
  {
    id: "pt-br",
    label: "PT"
  },
  {
    id: "es",
    label: "ES"
  }
]

export const LANGUAGES_SPONSORING_FILES = {
  "pt-br": SponsoringDetailsPTBR,
  "es": SponsoringDetailsES,
  "en": SponsoringDetailsEN
}

export const LANGUAGES_TEXTS = {
  "pt-br": TEXT_PTBR,
  "es": TEXT_ES,
  "en": TEXT_EN
}

export default LANGUAGES;