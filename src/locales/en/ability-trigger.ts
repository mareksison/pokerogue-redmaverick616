import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const abilityTriggers: SimpleTranslationEntries = {
  "blockRecoilDamage" : "{{pokemonName}}'s {{abilityName}}\nprotected it from recoil!",
  "stockpile" : "{{pokemonName}}\nstockpiled {{stockpileNumber}}!",
  "badDreams": "{{pokemonName}} is tormented!",
  "costar": "{{pokemonName}} copied {{allyName}}'s stat changes!",
  "iceFaceAvoidedDamage": "{{pokemonName}} avoided\ndamage with {{abilityName}}!",
  "perishBody": "{{pokemonName}}'s {{abilityName}}\nwill faint both pokemon in 3 turns!",
  "poisonHeal": "{{pokemonName}}'s {{abilityName}}\nrestored its HP a little!",
  "trace": "{{pokemonName}} copied {{targetName}}'s\n{{abilityName}}!",
  "windPowerCharged": "Being hit by {{moveName}} charged {{pokemonName}} with power!",
  "quickDraw": "{{pokemonName}} can act faster than normal, thanks to its Quick Draw!",
} as const;
