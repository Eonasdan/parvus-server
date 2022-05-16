import {Stack} from './middleware';

export default interface Config {
    host?: string;
    port?: number;
    subfolder?: string;
    middlewares?: Stack[];
    directory?: string;
}
