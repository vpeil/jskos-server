import { Annotation } from "./annotations.js"
import { Concept } from "./concepts.js"
import { Concordance } from "./concordances.js"
import { Mapping } from "./mappings.js"
import { Meta } from "./meta.js"
import { Scheme } from "./schemes.js"

export {
  Annotation,
  Concept,
  Concordance,
  Mapping,
  Meta,
  Scheme,
}

export const models = {
  scheme: Scheme,
  concept: Concept,
  concordance: Concordance,
  mapping: Mapping,
  annotation: Annotation,
}

Object.keys(models).forEach(type => {
  Object.defineProperty(models, `${type}s`, {
    get: () => models[type],
  })
})
