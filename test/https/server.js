var httpsServer = require('../../lib/https/server')
var request = require('request')

describe('https/server', function() {
  var port = 9999;
  var uri = 'https://localhost:' + port + '/'

  before(function() {
    httpsServer.listen(port)
  })

  it('accepts secure connections', function(done) {
    request(uri, {rejectUnauthorized:false}, function (error, response, body) {
      assert.notOk(error)
      assert.equal(response.statusCode, 200)
      done()
    })
  })

  it('returns a bogus body', function(done) {
    request(uri, {rejectUnauthorized:false}, function (error, response, body) {
      assert.notOk(error)
      assert.include(body, 'fdhveery')
      done()
    })
  })
})
