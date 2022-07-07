export var SwapTable = {
    "empty": "grey",
    "wall": "red",
    "checked": "blue",
    "qued": "cyan",
    "goal": "green",
    "solved": "yellow",
    "start": "orange",
};
export var Walkable = {
    "empty": true,
    "wall": false,
    "checked": false,
    "qued": false,
    "goal": true,
    "solved": false,
    "start": true,
};
var Tile = /** @class */ (function () {
    function Tile(x, y, state) {
        this.state = state;
        this.x = x;
        this.y = y;
    }
    return Tile;
}());
export { Tile };
var Vec2 = /** @class */ (function () {
    function Vec2() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        if (params.length === 2) {
            this.x = params[0];
            this.y = params[1];
        }
        else {
            this.x = params[0][0];
            this.y = params[0][1];
        }
    }
    Vec2.prototype.add = function (b) {
        return new Vec2(this.x + b.x, this.y + b.y);
    };
    Vec2.prototype.subtract = function (b) {
        return new Vec2(this.x - b.x, this.y - b.y);
    };
    return Vec2;
}());
export { Vec2 };
var Path = /** @class */ (function () {
    function Path() {
        this.nodes = [];
    }
    Path.prototype.add = function (node) {
        this.nodes.push(node);
    };
    Path.prototype.last = function () {
        return this.nodes[this.nodes.length - 1];
    };
    Path.prototype.Branch = function () {
        var P = new Path();
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            P.add(node);
        }
        return P;
    };
    return Path;
}());
export { Path };
