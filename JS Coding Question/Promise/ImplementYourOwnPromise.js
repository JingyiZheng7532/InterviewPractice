const PENDING = "pending";
const FULFILLED = "fullfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(fn) {
    this.status = PENDING;
    this.value = null;
    this.callbacks = [];

    fn(this._resolve.bind(this), this._rejected.bind(this));
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this._handle({
        onFulfilled: onFulfilled || null,
        onRejected: onRejected || null,
        resolve,
        reject,
      });
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  _handle(callback) {
    if (this.state === PENDING) {
      this.callbacks.push(callback);
      return;
    }
    let cb =
      this.state === FULFILLED ? callback.onFulfilled : callback.onRejected;
    if (!cb) {
      cb = this.state === FULFILLED ? callback.resolve : callback.reject;
      cb(this.value);
      return;
    }
  }

  //   _resolve(value) {
  //     if (value &&)
  //   }
}
