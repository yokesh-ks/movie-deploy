

## Deploy to Heroku

1. Create a file - Procfile 
inside that
```
web: node server.js
```

2. In Package.json
In Script Section
```
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client"
```

3. Then Download Heroku CLI

4. In Terminal 

- $ heroku login
- 