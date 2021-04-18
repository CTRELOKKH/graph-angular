import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExcRate } from './interfaces';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })

export class DBService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<ExcRate[]> {
        return this.http.get(`${environment.fbDbUrl}/btc.json`)
        .pipe(map((response: {[key:string]:any})=>{
            return Object.keys(response).map(key=>({
                date:key,
                value: response[key]
            }))
            
        }))
    }
}