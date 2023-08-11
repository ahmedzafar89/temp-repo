const https = require('https')
const options = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  headers: {
    'Accept': 'plain/html',
    'Accept-Encoding': '*',
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  console.log('headers:', res.headers);

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(`Error on Get Request --> ${error}`)
})

req.end()
