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
        this.name = 'BadRequest';
        this.statusCode = StatusCodes.BAD_REQUEST;        
    }
}

export class Unauthenticated extends Error {
    statusCode: StatusCode
    constructor(message: string) {
        super(message);
        this.name = 'Unauthenticated';
        this.statusCode = StatusCodes.UNAUTHORIZED;        
    }
}

export class Unauthorized extends Error {
    statusCode: StatusCode
    constructor(message: string) {
        super(message);
        this.name = 'Unauthorized';
        this.statusCode = StatusCodes.FORBIDDEN;        
    }
}

export class NoContent extends Error {
    statusCode: StatusCode
    constructor(message: string) {
        super(message);
        this.name = 'NoContent';
        this.statusCode = StatusCodes.NO_CONTENT;        
    }
}