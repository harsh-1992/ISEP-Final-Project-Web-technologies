import 'regenerator-runtime/runtime'

import app from './app'

const port = 8081
// docker run --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest

const server = app.listen(port, () => {
    const port = server.address().port
    console.log('Server listening on port ' + port + '...')
})
