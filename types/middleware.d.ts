/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
export declare type Stack = {
    route?: string;
    pattern?: RegExp;
    middleware: Middleware;
};
export declare type Middleware<Rq extends IncomingMessage = IncomingMessage, Rs extends ServerResponse = ServerResponse> = (request: Rq, response: Rs, next: Next) => Promise<void>;
export interface Next {
    (): true;
    reset: () => void;
    status: () => boolean;
}
export declare const generateNext: () => Next;
