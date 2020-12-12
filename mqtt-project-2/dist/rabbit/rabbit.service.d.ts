export declare class RabbitService {
    private client;
    constructor();
    save(data: any): import("rxjs").Observable<any>;
    accumulate(data: number[]): import("rxjs").Observable<number>;
    store(data: any): import("rxjs").Observable<any>;
}
