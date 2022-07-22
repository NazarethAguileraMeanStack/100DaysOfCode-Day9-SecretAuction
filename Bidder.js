class Bidder {
    constructor(name, bid) {
        this._name = name;
        this._bid = bid;
    }

    set Name(val) {
        this._name = val;
    }

    get Name() {
        return this._name;
    }

    set Bid(val) {
        this._bid = val;
    }

    get Bid() {
        return this._bid;
    }
}

module.exports = Bidder;