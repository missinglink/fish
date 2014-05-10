
# Dependencies
express = require 'express'
path = require 'path'
fs = require 'fs'

# Express
app = express()
app.set 'env', 'development'
app.set 'port', 3000
app.set 'baseDir', path.resolve __dirname + '/'

app.use express.bodyParser()
app.use express.methodOverride()
app.use express.cookieParser()

# Static
app.use '/', express.static app.get('baseDir') + '/public'
app.use '/*', express.static app.get('baseDir') + '/public'

app.get '/test', ( req, res ) ->
  res.json hello: 'world'

# Web & Socket Servers
app.listen app.get 'port'

# We're up & running!
console.log "Server running in env #{app.get('env')} on port: #{app.get('port')}"