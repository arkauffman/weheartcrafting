const Item = require('../models/Item');
const request = require('request');

export default class AppController {
    constructor(endpoint){
        this.endpoint = endpoint
    }

        async doRequest(method, path, body, authorization) {
        if (!this.token) {
            throw new Error('Not authenticated');
        }

        const requestStart = (new Date).getTime();

        let response;

        try {
            response = await fetch(this.endpoint + path, {
                method,
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: authorization ? authorization : `Bearer ${this.token}`
                },
                body

            });
        } catch(error) {
            throw new Error('Network Error for POST ${path}: ' + error.message);
        }

        /*
         * Non-2XX statuses mean that the body will only contain error information, not an actual result.
         * If the server returns non-json, we treat it as if non-2XX too.
         */
        if (!response.ok || response.headers.get('Content-Type') !== 'application/json') {
            const errorMessage = `${method} ${path} returned ${response.status} with ${await response.text()}`;
            throw new Error(errorMessage);
        }

        const responseJson = await response.json();

        const elapsed = (new Date).getTime() - requestStart;
        console.log(`${method} ${path} = ${elapsed}ms`);
        console.log(responseJson);

        if ('error' in responseJson) {
            return {
                ok: false,
                error: responseJson.error
            };
        }

        return {
            ok: true,
            body: responseJson
        };
    }

    get(path) {
        return this.doRequest('GET', path);
    }

    post(path, body) {
        return this.doRequest('POST', path, body);
    }
    getItems = (req, res) => {
        console.log('items method')
        Item.find({}, (err, items) => {
            res.send(items)
        })
    }


}
