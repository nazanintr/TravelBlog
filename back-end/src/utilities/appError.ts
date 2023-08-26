// Custom error class that extends the built-in Error class to 
// include additional properties for status code and status
export class AppError extends Error {
    statusCode: number;
    status: string;

    constructor(message: string, statusCode: number, status?: string) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    };
};