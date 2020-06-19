// Fix the Messenger class to check input and to allow listeners to unsubscribe

class Messenger {
  constructor(channel) {
    if(typeof channel !== 'object') { throw Error('not an object')}
    this.channel = channel.name;
    this.listeners = {};
  }
  getChannel(type) {
    this.listeners[type] = this.listeners[type] || [];
    return this.listeners[type];
  }

  subscribe(type, fn) {
    this.getChannel(type).push(fn)
    return Object.keys(this.listeners).includes(type) ? () => this.listeners[type] = [] : null;
  }

  publish(type, msg) {
    this.getChannel(type).forEach((listener) =>
      listener(`${this.channel} - ${type} - ${msg}`)
    );
  }
}

module.exports = { Messenger };
