import app from './config/express';
import config from './config';

app.listen(config.serverPort, () => {
    /* eslint no-console: ["error", { allow: ["info"] }] */
    console.info(`server started on port ${config.serverPort} (${config.serverEnv})`);
});