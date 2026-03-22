// eslint-disable-next-line @typescript-eslint/no-var-requires
const three: Record<string, unknown> = require('three')

// Build the set of valid element tag names from three.js exports.
// Mirrors the ThreeToJSXElements type: Uncapitalize<K> for each export.
const threeElements = new Set<string>(Object.keys(three).map((k) => k[0].toLowerCase() + k.slice(1)))

// DOM-conflicting names are accessed via three* prefix (see three-types.ts)
const DOM_CONFLICTS = ['audio', 'source', 'line', 'path']
for (const name of DOM_CONFLICTS) {
  threeElements.delete(name)
  threeElements.add(`three${name[0].toUpperCase()}${name.slice(1)}`)
}
threeElements.add('primitive')

/** Returns the set of all known three.js element tag names. */
export function getThreeElements(): ReadonlySet<string> {
  return threeElements
}

/** Returns true if the tag is a vue-threejs custom element. */
export function isCustomElement(tag: string): boolean {
  return threeElements.has(tag)
}

/**
 * Pre-built Vue compiler options for Vite/vue-loader.
 *
 * @example
 * ```ts
 * import vue from '@vitejs/plugin-vue'
 * import { templateCompilerOptions } from '@bluera/vue-threejs'
 *
 * export default defineConfig({
 *   plugins: [vue(templateCompilerOptions)]
 * })
 * ```
 */
const templateCompilerOptions = {
  template: {
    compilerOptions: { isCustomElement },
  },
}
export default templateCompilerOptions
