/// <reference types="node" />
import { Server } from 'http';
import { Server as Socket } from 'socket.io';
import { Middleware } from './middleware';
import Config from './config';
export default class PicoServer {
    server: Server;
    mimeTypes: {
        type: string;
        name: string;
        extensions: string[];
    }[];
    io: Socket;
    private readonly host;
    private readonly port;
    private middlewares;
    private directory;
    constructor(config?: Config);
    start(): Promise<void>;
    stop(): void;
    refreshBrowser(): void;
    addMiddleware(middleware: Middleware, route?: string): void;
    private static fetchMimetypes;
    private createServer;
    private defaultHandler;
    private static socketInjection;
}
