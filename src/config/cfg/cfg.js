const fs = require('fs');
const path = require('path');
const convict = require('convict');
const schema = require('./schema');
const formats = require('./formats');


// Define a custom formats
convict.addFormats(formats);

// Define a schema
const cfg = convict(schema);

// Load environment dependent configuration
const env = cfg.get('env');

const dataDirPath = path.resolve(__dirname, cfg.get('data.dir'));
cfg.set('data.dir', dataDirPath);
if (!fs.existsSync(dataDirPath)) {
  fs.mkdirSync(dataDirPath, {
    recursive: true, // Default: false.
    mode: 0o777,     // Not supported on Windows. Default: 0o777.
  });
  // init();
}

if (env !== 'production') {
  cfg.set('config.file', env + '-' + cfg.get('config.file'));
  cfg.set('logger.file.name', env + '-' + cfg.get('logger.file.name'));
}

const configFile = cfg.get('config.file');
const configFilePath = path.resolve(__dirname, cfg.get('data.dir'), configFile);

if (fs.existsSync(configFilePath)) {
  cfg.loadFile(configFilePath);
}

// SSL
if (cfg.get('https') && cfg.get('ssl.crt.file') && cfg.get('ssl.key.file')) {
  cfg.set('ssl.crt.file', path.resolve(__dirname, cfg.get('data.dir'), cfg.get('ssl.crt.file')));
  cfg.set('ssl.key.file', path.resolve(__dirname, cfg.get('data.dir'), cfg.get('ssl.key.file')));
}

if (cfg.get('config.print')) {
  console.log();
  cfg.set('config.print', false);
  console.log(cfg.toString());
  console.log();
  process.exit(0);
}

if (cfg.get('config.save')) {
  // make config file
  cfg.set('config.save', false);
  fs.writeFileSync(
    configFilePath,
    cfg.toString(),
    {
      encoding: 'utf8', // Default: 'utf8'
      mode: 0o777,      // Default: 0o666
      flag: 'w',        // See support of file system flags. Default: 'w'.
    }
  );
  process.exit(0);
}

if (fs.existsSync(configFilePath)) {
  cfg.loadFile(configFilePath);
}

// Perform validation
cfg.validate({ allowed: 'strict' });

module.exports = cfg;
