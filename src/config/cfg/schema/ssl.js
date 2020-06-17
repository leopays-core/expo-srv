// Define a schema
const schema = {
  // ssl
  ssl: {
    crt: {
      file: {
        doc: "ssl.crt.file",
        format: String,
        default: undefined, // "cert.pem",
        env: "SSL_CRT_FILE",
        arg: "ssl-crt-file'",
      },
    },
    key: {
      file: {
        doc: "ssl.key.file",
        format: String,
        default: undefined, // "privkey.pem",
        env: "SSL_KEY_FILE",
        arg: "ssl-key-file",
      },
    },
  },
};
/*
/etc/letsencrypt/live/domain.name/README

`privkey.pem`  : the private key for your certificate.
`fullchain.pem`: the certificate file used in most server software.
`chain.pem`    : used for OCSP stapling in Nginx >=1.3.7.
`cert.pem`     : will break many server configurations, and should not be used
                 without reading further documentation (see link below).
*/

module.exports = schema;
