import remote from './DBservice.js';
import config from '../config.js';

export default remote(config.cacheService.host, config.cacheService.port);