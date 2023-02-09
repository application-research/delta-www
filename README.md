# Delta-WWW

https://delta.store

### Setup (MacOS)

```sh
npm install
npm run dev
```

Go to `http://localhost:3005` in your browser of choice. Enjoy!

### Scripts

If you need to run node script without running the server, use this example to get started

```sh
npm run script example
```

### Env Variables

If you want to connect to a Postgres database, something I do all the time, provide the following `.env` file. `5432` is the default Postgres port.

```sh
DOCUMENT_DATABASE_NAME=xxxx
DOCUMENT_DATABASE_USERNAME=xxxx
DOCUMENT_DATABASE_HOST=xxxx
DOCUMENT_DATABASE_PORT=5432
DOCUMENT_DATABASE_PASSWORD=xxxx
```
