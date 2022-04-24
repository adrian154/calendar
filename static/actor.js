// tiny pub sub 
const subscribers = {};

export default class {

    constructor() {
        this.eventHandlers = {};
    }

    on(event, handler) {
        if(!subscribers[event]) {
            subscribers[event] = new Set();
        }
        subscribers[event].add(this);
        this.eventHandlers[event] = handler;
    }

    ingest(event, data) {
        this.eventHandlers[event]?.(data);
    }

    emit(event, data) {
        if(subscribers[event]) {
            for(const subscriber of subscribers[event]) {
                subscriber.ingest(event, data);
            }
        }
    }

    destroy() {
        for(const event in this.eventHandlers) {
            subscribers[event].delete(this);
        }
    }

}