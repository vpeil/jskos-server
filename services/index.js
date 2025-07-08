import { annotationService } from "./annotations.js"
import { conceptService } from "./concepts.js"
import { concordanceService } from "./concordances.js"
import { mappingService } from "./mappings.js"
import { schemeService } from "./schemes.js"
import { dataService } from "./data.js"
import { statusService } from "./status.js"
import { validateService } from "./validate.js"

export {
  annotationService,
  conceptService,
  concordanceService,
  mappingService,
  schemeService,
  dataService,
  statusService,
  validateService,
}

export const services = {
  scheme: schemeService,
  concept: conceptService,
  concordance: concordanceService,
  mapping: mappingService,
  annotation: annotationService,
}

for (let type of Object.keys(services)) {
  Object.defineProperty(services, `${type}s`, {
    get: () => services[type],
  })
}
