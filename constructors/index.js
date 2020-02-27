// class Car {
//     constructor(car = {}) {
//         this.brand = R.is(String, car.brand) ? car.brand : ""
//         this.model = R.is(String, car.model) ? car.model : ""
//     }

//     get name() {
//         return this.brand.concat(" ", this.model)
//     }

//     toCreatePayload() {
//         return {
//             brand: this.brand,
//             model: this.model
//         }
//     }
// }

export default class Circle {
    constructor (x, y, c, v, range) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.color = c;
        this.v = v;
        this.range = range;
        this.element = document.createElement('span');
        /*this.element.style.display = 'block';*/
        this.element.style.opacity = 0;
        this.element.style.position = 'absolute';
        this.element.style.fontSize = '26px';
        this.element.style.color = 'hsl(' + (Math.random() * 360 | 0) + ',80%,50%)';
        this.element.innerHTML = c;
        this.container.appendChild(this.element);

        this.update = function () {
            if (_this.y > 800) {
                _this.y = 80 + Math.random() * 4;
                _this.x = _this.range[0] + Math.random() * _this.range[1];
            }
            _this.y += _this.v.y;
            _this.x += _this.v.x;
            this.element.style.opacity = 1;
            this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
            this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
            this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
        };
    }
}