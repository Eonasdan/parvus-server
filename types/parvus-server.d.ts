/// <reference types="node" />
import { Server, IncomingMessage, ServerResponse } from 'http';
import { Server as Socket } from 'socket.io';
import { Middleware } from './middleware';
import Config from './config';
export default class ParvusServer {
    server: Server;
    mimeTypes: {
        type: string;
        name: string;
        extensions: string[];
    }[];
    io: Socket;
    private connectedBefore;
    private readonly host;
    private readonly port;
    private readonly directory;
    private readonly subfolder;
    private middlewares;
    constructor(config?: Config);
    startAsync(): Promise<void>;
    stop(): void;
    refreshBrowser(): void;
    addMiddleware(middleware: Middleware, route?: string): void;
    private static fetchMimetypes;
    private createServer;
    defaultHandler(req: IncomingMessage, res: ServerResponse, directory?: string, addSocket?: boolean): Promise<void>;
    private static socketInjection;
}
