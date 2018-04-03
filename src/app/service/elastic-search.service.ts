import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, SearchResponse } from "elasticsearch-browser";

@Injectable()
export class ElasticSearchService {
    private _client: Client;

    constructor() {
        if (!this._client) this._connect();
    }

    private _connect() {
        this._client = new Client({
            //host: 'http://localhost:9200',    
            host: 'http://127.0.0.1:9200',
            log: 'trace' 
        });
    }
    /*
        search(value): Promise<SearchResponse<any>> {
            if (value) {
                console.log(value)
                return this._client.search({
                    index: 'blog',
                    q: `title:${value}`
                })
            } else {
                return Promise.resolve({})
            }
        }
    
        addToIndex(value): Promise<any> {
            return this._client.create(value)
        }
    
        isAvailable(): Promise<any> {
            return this._client.ping({
                requestTimeout: Infinity,
                hello: "elasticsearch!"
            });
        }
    search(value): any {
        if (value) {
            console.log(value)
            return this._client.search({
                index: 'eap',
                q: `notes:${value}`
            })
        } else {
            return Promise.resolve({})
        }
    }


    search(value): any {
        if (value) {
            console.log('searching for ' + value)
            return this._client.search({
                index: 'eap_drugs',
                body: {
                  query: {
                    multi_match : {
                      query:      value,
                      fields:     [ 'din_pin', 'brand_name', 'generic_name'],
                      max_expansions: 20,
                      fuzziness : 'AUTO',
                      prefix_length : 0
                    }
                  }
                }
            })
        } else {
            return Promise.resolve({})
        }
    }*/

    searchEapDrug(value): any {
        if (value) {
            console.log('searching for ' + value)
            return this._client.search({
                index: 'eap_drugs',
                body: {
                    query: {
                        match: {
                            longname: {
                                query: value,
                                max_expansions: 5,
                                fuzziness: 'AUTO',
                                prefix_length: 0
                            }
                        }
                    },
                    highlight : {
                        fields : {
                            'longname' : {}
                        }
                    }
                }
            })
        } else {
            return Promise.resolve({})
        }
    }

   
    addToIndex(value): any {
        return this._client.create(value)
    }

    isAvailable(): any {
        return this._client.ping({
            requestTimeout: Infinity,
            hello: "elasticsearch!"
        });
    }
}