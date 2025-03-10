function aliase(name: any) {
  switch (name.toLowerCase()) {
    case "js":
    case "javascript": {
      return "javascript";
    }
    case "coffee":
    case "coffeescript":
    case "cson": {
      return "coffee";
    }
    case "yaml":
    case "yml": {
      return "yaml";
    }
    default: {
      return name;
    }
  }
}

const engine = (name: any, options: any) => {
  let engine = options.engines[name] || options.engines[aliase(name)];
  if (engine === undefined) {
    throw new TypeError('gray-matter engine "' + name + '" is not registered');
  }
  if (typeof engine === "function") {
    engine = { parse: engine };
  }
  return engine;
};

export default engine;
