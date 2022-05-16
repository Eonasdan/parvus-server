import {IncomingMessage, ServerResponse} from 'http';
import {Next, ParvusServer} from '../src'

/**
 * This is an example of how you could use the server.
 */
class Startup {
    async do() {

        const parvusServer = new ParvusServer({
            middlewares: [
                {
                    middleware: async (req: IncomingMessage, res: ServerResponse, _: Next) => {
                        res.setHeader('Content-Type', 'text/html');
                        res.writeHead(200);
                        res.end(`<html lang="en"><body>from config. ${req.url}</body></html>`);
                    },
                    route: '/config'
                }
            ]
        });

        parvusServer.addMiddleware(async (req: IncomingMessage, res: ServerResponse, next: Next) => {
            await this.testAsync()
            res.setHeader('authorization', 'yo');
            next()
        }, '*');

        parvusServer.addMiddleware(async (req: IncomingMessage, res: ServerResponse, _: Next) => {
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(500);
            res.end(`<html lang="en"><body><h1>Error</h1>from middleware</body></html>`);
        }, '/mw');

        await parvusServer.startAsync();

        setTimeout(() => {
            parvusServer.refreshBrowser();
        }, 5000)
    }

    async testAsync() {
        // do something interesting here
    }
}

const s = new Startup();
s.do().then();
