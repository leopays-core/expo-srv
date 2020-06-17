// Define a schema
const schema = {
  // config
  config: {
    file: {
      doc: "config file name",
      format: String,
      default: "config.json",
      env: "CONFIG_FILE",
      arg: "config-file",
    },
    print: {
      doc: "print config file to console",
      format: Boolean,
      default: false,
      env: "CONFIG_PRINT",
      arg: "config-print",
    },
    save: {
      doc: "save config file",
      format: Boolean,
      default: false,
      env: "CONFIG_SAVE",
      arg: "config-save",
    },
  },
};

module.exports = schema;
