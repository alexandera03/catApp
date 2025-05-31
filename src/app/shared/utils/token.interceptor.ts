
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

import { environment } from 'src/environments/environment.prod';

export const ApiKeyInterceptor: HttpInterceptorFn = (req, next) => {

    const apiKey = environment.api_key;
    // Clone the request and add the authorization header
    let addHeaderReq = req.clone({
        setHeaders: {
            api_key: apiKey,
            'Content-Type': "application/json"
        },
        setParams:{
            api_key: apiKey
        }
    });

    // if (apiKey) {
    //     if (localStorage.getItem('token')) {

    //         addHeaderReq = req.clone({
    //             setHeaders: {
    //               api_key: apiKey
    //             }
    //         });
    //     }
    // }


    // Pass the cloned request with the updated header to the next handler
    return next(addHeaderReq);
};
