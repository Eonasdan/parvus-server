import PicoServer from './index';
import {IncomingMessage, ServerResponse} from 'http';
import {Next} from './middleware';

/**
 * DO NOT USE THIS. This is an example of how you could use the server.
 */
class Startup {
    constructor() {
        this.do().then();
    }

    async do() {

        const pico = new PicoServer({
            middlewares: [
                {
                    middleware: async (req: IncomingMessage, res: ServerResponse, next: Next) => {
                        res.setHeader('Content-Type', 'text/html');
                        res.writeHead(200);
                        res.end(`<html><body>from config</body></html>`);
                    },
                    route: '/config'
                }
            ]
        });

        pico.addMiddleware(async (req: IncomingMessage, res: ServerResponse, next: Next) => {
            await this.t()
            res.setHeader('authorization', 'yo');
            next()
        }, '*');

        pico.addMiddleware(async (req: IncomingMessage, res: ServerResponse, next: Next) => {
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(500);
            res.end(`<html><body><h1>Error</h1>from middleware</body></html>`);
        }, '/mw');

        await pico.start();

        setTimeout(() => {
            pico.refreshBrowser();
        }, 5000)
    }

    async t() {

    }
}

new Startup();