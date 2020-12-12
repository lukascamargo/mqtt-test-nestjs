export declare class AppService {
    private client;
    constructor();
    list(): import("rxjs").Observable<any>;
    accumulate(data: number[]): import("rxjs").Observable<number>;
    store(data: any): import("rxjs").Observable<any>;
}
