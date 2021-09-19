
const requestHandler = (req, res) => {
  const { url, method, headers } = req


  //handles '/' route
  if (url == '/') {
    res.write(`
    <html>
      <p>greetings, type a user:</p>
      <form action="create-user" method='POST'>
        <input type='text' name='user'>
        <button type='submit'>salvar</button>
      </form>
      </html>
    `)

    return res.end()
  }

  if (url == '/create-user' && method == 'POST') {
    console.log('you are on the right path')
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    req.on('end', () => {
      const bufferedReq = Buffer.concat(body).toString();
      const username = bufferedReq.split('=')[1]
      console.log(username)
      res.end()
    })
    res.statusCode = 302
    res.setHeader('Location', '/');
    res.end()
  }

  //handles '/user' route
  if (url == '/user') {
    res.write(`
    <html>
      <li>User 1</li>
    </html>
    `)
    res.end()
  }
}



module.exports = requestHandler