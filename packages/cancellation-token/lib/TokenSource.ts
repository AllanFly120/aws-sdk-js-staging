import Token from "./Token";

type action = () => void;

export default class TokenSource {
    private _cancellationRequested: boolean = false;
    private _invokeAfterCancellation: Array<action> = [];

    get isCancellationRequested(): boolean {
        return this._cancellationRequested;
    }

    get token(): Token {
        return new Token(this);
    }

    cancel(invokeRegisteredActions: boolean = true): void {
        this._cancellationRequested = true;

        if (invokeRegisteredActions) {
            while (this._invokeAfterCancellation.length > 0) {
                let action = this._invokeAfterCancellation.shift();
                if (action) {
                    setTimeout(action, 0);
                }
            }
        }
    }

    registerCancellationHandler(handler: action): void {
        if (this._cancellationRequested) {
            setTimeout(handler, 0);
        } else {
            this._invokeAfterCancellation.push(handler);
        }
    }
}