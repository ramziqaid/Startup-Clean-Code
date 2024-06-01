import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BlockService {
    private loading: boolean = true;
    constructor() { this.ngOnInit(); }

    ngOnInit(): void { this.UnBlock(); }

    private _loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.loading);
    public getBlockStatus(): Observable<boolean> { return this._loadingSubject.asObservable() };

    private setLoadingStatus(newStatus: boolean): void {
        this.loading = newStatus
        this._loadingSubject.next(this.loading);

    }

    UnBlock(): void { this.setLoadingStatus(false); }

    Block(): void { this.setLoadingStatus(true); }
}