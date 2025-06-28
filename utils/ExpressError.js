class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;

// class ExpressError extends Error {
//     constructor(statusCode, message) {
//         super(message); // Pass message to Error constructor
//         this.statusCode = statusCode;
//         Error.captureStackTrace(this, this.constructor); // Optional: cleaner stack trace
//     }
// }

// module.exports = ExpressError;
