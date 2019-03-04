// export function isDebugMode() {
//   return process.env.NODE_ENV !== "production";
// }

/**
 * Logger for development env
 *
 * @param {text} message to log.
 */
export function log(text) {
  if (process.env.NODE_ENV !== "production") {
    console.log("## %s", text);
  }
}

export function warn(text) {
  if (process.env.NODE_ENV !== "production") {
    console.warn(`## ${text}`);
  }
}

export function isObject(item) {
  return (
    item && typeof item === "object" && !Array.isArray(item) && item !== null
  );
}

export function mergeDeep(...sources) {
  const target = {};
  if (!sources.length) {
    return target;
  }

  while (sources.length > 0) {
    const source = sources.shift();
    if (isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          target[key] = mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
  }
  return target;
}

export function json(value) {
  let json = JSON.stringify(value, null, 2);
  return json;
}

/**
 * Register a directive as being loaded. returns true if directive plugin already registered
 * @param {object} Vue
 * @param {string} Directive name
 * @param {object} Directive definition
 */
export function registerDirective(Vue, name, def) {
  Vue._app_directives_ = Vue._app_directives_ || {};
  const loaded = Vue._app_directives_[name];
  if (!loaded && def && name) {
    Vue._app_directives_[name] = true;
    Vue.directive(name, def);
  }
  return loaded;
}

/**
 * Register a group of directives as being loaded.
 * @param {object} Vue
 * @param {object} Object of directive definitions
 */
export function registerDirectives(Vue, directives) {
  for (let directive in directives) {
    registerDirective(Vue, directive, directives[directive]);
  }
}

// export function usePlugin(plugin) {
//   Vue.use(plugin);
// }
