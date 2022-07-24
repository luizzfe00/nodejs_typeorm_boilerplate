require('dotenv').config();
import config from 'config';
import Server from './config/server';

const port = config.get<number>('port');

Server.setup().then((app) => {
  app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });
});
