import remote from './DBservice.js';
import config from '../config.js';

export default remote(config.mysqlService.host, config.mysqlService.port);