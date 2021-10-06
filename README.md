### ES Modules in Node

Used ECMAScript Modules in the backend. To use it, need to have at least Node v14.6+ or need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or will get a "module not found" error

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'you can put whatever you want'
PAYPAL_CLIENT_ID = your paypal client id
```

### Run

```
# Run backend
npm run server
```
