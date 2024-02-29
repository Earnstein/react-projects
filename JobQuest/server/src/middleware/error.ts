import type { StatusCode } from 'hono/utils/http-status';
import { StatusCodes } from 'http-status-codes';


export class NotFound extends Error {
    statusCode: StatusCode
    constructor(message: string) {
        super(message);
        this.name = 'NotFound';
        this.statusCode = StatusCodes.NOT_FOUND;        
    }
}

export class BadRequest extends Error {
    statusCode: StatusCode
    constructor(message: string) {
        super(message);
        this.name = 'NotFound';
        this.statusCode = StatusCodes.BAD_REQUEST;        
    }
}

export class Unauthenticated extends Error {
    statusCode: StatusCode
    constructor(message: string) {
        super(message);
        this.name = 'NotFound';
        this.statusCode = StatusCodes.UNAUTHORIZED;        
    }
}

export class Unauthorized extends Error {
    statusCode: StatusCode
    constructor(message: string) {
        super(message);
        this.name = 'NotFound';
        this.statusCode = StatusCodes.FORBIDDEN;        
    }
}