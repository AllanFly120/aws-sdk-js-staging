import {HeaderBag, HttpResponse} from './http';

export interface ResponseMetadata {
    /**
     * The status code of the last HTTP response received for this operation.
     */
    httpStatusCode?: number;

    /**
     * The headers of the last HTTP response received for this operation.
     */
    httpHeaders?: HeaderBag;

    /**
     * A unique identifier for the last request sent for this operation. Often
     * requested by AWS service teams to aid in debugging.
     */
    requestId?: string;

    /**
     * A secondary identifier for the last request sent. Used for debugging.
     */
    extendedRequestId?: string;

    /**
     * A tertiary identifier for the last request sent. Used for debugging.
     */
    cfId?: string;

    /**
     * The number of times this operation was retried.
     */
    retries?: number;

    /**
     * The total amount of time (in milliseconds) that was spent waiting between
     * retry attempts.
     */
    totalRetryDelay?: number;
}

export interface MetadataBearer {
    /**
     * Metadata pertaining to this request.
     */
    $metadata: ResponseMetadata;
}
