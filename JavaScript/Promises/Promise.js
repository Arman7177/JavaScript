class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if(this.state !== 'pending') return;
            this.state = 'fulfilled';
            this.value = value;
            this.onFulfilledCallbacks.forEach(cb => queueMicrotask(() => cb(value)));
        }
        const reject = (reason) => {
            if(this.state !== 'pending') return;
            this.state = 'rejected';
            this.reason = reason;
            this.onRejectedCallbacks.forEach(cb => queueMicrotask(() => cb(reason)));
        }
        try {
           executor(resolve,reject)
        } catch (err) {
           reject(err); 
        }
    }
    then(onFullfilled,onRejected){
        return new MyPromise((resolve,reject) => {
            const handleFulfilled = () => {
                queueMicrotask(() => {
                    try {
                       if (typeof onFullfilled === 'function') {
                            const result = onFullfilled(this.value);
                            resolve(result);
                       } else {
                            resolve(this.value);
                       }
                    } catch (err) {
                            reject(err);
                    }
                })
            }
            const handleRejected = () => {
                queueMicrotask(() => {
                    try {
                        if (typeof onRejected === 'function') {
                            const result = onRejected(this.reason);
                            resolve(result);
                        } else {
                            resolve(this.reason);
                        }
                    } catch (err){
                            reject(err);
                    }
                })
            }
            if (this.state === 'fulfilled') {
                handleFulfilled();
            } else if (this.state === 'rejected') {
                handleRejected();
            } else {
                this.onFulfilledCallbacks.push(handleFulfilled);
                this.onRejectedCallbacks.push(handleRejected);
            }
        });
    }
}

