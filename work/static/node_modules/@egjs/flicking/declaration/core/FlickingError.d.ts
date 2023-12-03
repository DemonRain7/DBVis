declare class FlickingError extends Error {
    code: number;
    constructor(message: string, code: number);
}
export default FlickingError;
