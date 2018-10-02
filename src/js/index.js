var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _class, _temp, _class2, _temp2;

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);
        return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }

            return step("next");
        });
    };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

setTimeout(function () {
    ReactDOM.render(React.createElement(
        'div',
        null,
        React.createElement(LoadingWrapper, {
            imageSources: [{
                src: 'https://i.imgur.com/MKqoPQN.jpg'
            }, {
                src: 'https://i.imgur.com/PgJ6cGS.jpg'
            }, {
                src: 'https://i.imgur.com/cVYPcu7.jpg'
            }, {
                src: 'https://i.imgur.com/zBRhOh3.jpg'
            }, {
                src: 'https://i.imgur.com/WCvTT5t.jpg'
            }, {
                src: 'https://i.imgur.com/ET35Cnl.jpg'
            }, {
                src: 'https://i.imgur.com/cl6UB7F.jpg'
            }, {
                src: 'https://i.imgur.com/IbFzwBb.jpg'
            }, {
                src: 'https://i.imgur.com/SzZtGCt.jpg'
            }, {
                src: 'https://i.imgur.com/fqeTXcU.jpg'
            }, {
                src: 'https://i.imgur.com/gLfAuuW.jpg'
            }, {
                src: 'https://i.imgur.com/1C8yxKp.jpg'
            }, {
                src: 'https://i.imgur.com/tuvlxGe.jpg'
            }],
            onLoad: function onLoad(images) {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(DissolvingGallery, _extends({
                        handleResize: false,
                        delay: 1,
                        getSize: function getSize() {
                            return {
                                width: window.innerWidth,
                                height: window.innerHeight
                            };
                        }
                    }, {images: images}))
                );
            }
        })
    ), document.getElementById('js-app'));
}, 0);

var LoadingWrapper = (_temp = _class = function (_React$Component) {
    _inherits(LoadingWrapper, _React$Component);

    function LoadingWrapper(props) {
        _classCallCheck(this, LoadingWrapper);

        var _this = _possibleConstructorReturn(this, (LoadingWrapper.__proto__ || Object.getPrototypeOf(LoadingWrapper)).call(this, props));

        _this.state = {
            loading: true,
            images: []
        };

        _this.loader = new THREE.ImageLoader();
        _this.loader.crossOrigin = 'Anonymous';
        return _this;
    }

    _createClass(LoadingWrapper, [{
        key: 'componentDidMount',
        value: function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var images;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.loadAllImages(this.props.imageSources);

                            case 2:
                                images = _context.sent;

                                this.setState({loading: false, images: images});

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'loadAllImages',
        value: function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(images) {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return Promise.all(images.map(function () {
                                    var _ref3 = _asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(image) {
                                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                            while (1) {
                                                switch (_context2.prev = _context2.next) {
                                                    case 0:
                                                        _context2.next = 2;
                                                        return _this2.loadImage(image.src);

                                                    case 2:
                                                        return _context2.abrupt('return', _context2.sent);

                                                    case 3:
                                                    case 'end':
                                                        return _context2.stop();
                                                }
                                            }
                                        }, _callee2, _this2);
                                    }));

                                    return function (_x2) {
                                        return _ref3.apply(this, arguments);
                                    };
                                }()));

                            case 2:
                                return _context3.abrupt('return', _context3.sent);

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function loadAllImages(_x) {
                return _ref2.apply(this, arguments);
            }

            return loadAllImages;
        }()
    }, {
        key: 'loadImage',
        value: function loadImage(uri) {
            var _this3 = this;

            return new Promise(function (resolve) {
                _this3.loader.load(uri, function (image) {
                    return resolve(image);
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.loading) {
                return React.createElement(
                    'h1',
                    {
                        style: {
                            fontFamily: "Trebuchet MS",
                            color: "black",
                            width: "100%",
                            textAlign: "center",
                            fontSize: "40px",
                            paddingTop: "50px"
                        }
                    },
                    'Wait, please, for some magic...'
                );
            }
            return this.props.onLoad(this.state.images);
        }
    }]);

    return LoadingWrapper;
}(React.Component), _class.propTypes = {
    onLoad: React.PropTypes.func.isRequired,
    imageSources: React.PropTypes.array.isRequired
}, _temp);
var DissolvingGallery = (_temp2 = _class2 = function (_React$Component2) {
    _inherits(DissolvingGallery, _React$Component2);

    function DissolvingGallery(props) {
        _classCallCheck(this, DissolvingGallery);

        return _possibleConstructorReturn(this, (DissolvingGallery.__proto__ || Object.getPrototypeOf(DissolvingGallery)).call(this, props));
    }

    _createClass(DissolvingGallery, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: 'componentDidMount',
        value: function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _this5 = this;

                var camera, scene, width, height, index, timeline, renderer, handleWindowResize;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                camera = this.createCamera(80, 0, 0, 60, this.props.getSize);
                                scene = new THREE.Scene();

                                this.createLights(scene);
                                width = 60;
                                height = 40;

                                this.slide0 = new Slide(width, height, 'out');
                                scene.add(this.slide0);
                                this.slide1 = new Slide(width, height, 'in');
                                scene.add(this.slide1);
                                index = 0;
                                timeline = new TimelineMax({
                                    repeat: -1,
                                    repeatDelay: this.props.delay,
                                    yoyo: true,
                                    onRepeat: function onRepeat() {
                                        return index = _this5.loadNextImages(_this5.props.images, index);
                                    }
                                });

                                timeline.add(this.slide0.transition(), 0);
                                timeline.add(this.slide1.transition(), 0);
                                index = this.loadNextImages(this.props.images, index);
                                renderer = this.createRenderer(0x666666);
                                handleWindowResize = this.onWindowResize(camera, renderer, this.props.getSize);

                                handleWindowResize();
                                if (this.props.handleResize) {
                                    window.addEventListener('resize', handleWindowResize, false);
                                }
                                this.animate(renderer, scene, camera);

                            case 19:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function componentDidMount() {
                return _ref4.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'loadNextImages',
        value: function loadNextImages(images, index) {
            var first = index;
            var second = void 0;
            var tmp = (first + 1) % images.length;
            if (index % 2 === 0) {
                second = tmp;
            } else {
                second = first;
                first = tmp;
            }
            this.slide0.setImage(images[first]);
            this.slide1.setImage(images[second]);
            return tmp;
        }
    }, {
        key: 'onWindowResize',
        value: function onWindowResize(camera, renderer, getSizeCallback) {
            return function (event) {
                var _getSizeCallback = getSizeCallback(),
                    width = _getSizeCallback.width,
                    height = _getSizeCallback.height;

                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            };
        }
    }, {
        key: 'animate',
        value: function animate(renderer, scene, camera) {
            var _this6 = this;

            requestAnimationFrame(function () {
                _this6.animate(renderer, scene, camera);
            });
            renderer.render(scene, camera);
        }
    }, {
        key: 'createCamera',
        value: function createCamera(fov) {
            var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var getSizeCallback = arguments[4];

            var _getSizeCallback2 = getSizeCallback(),
                width = _getSizeCallback2.width,
                height = _getSizeCallback2.height;

            var camera = new THREE.PerspectiveCamera(fov, width / height, 1, 1000);
            camera.position.x = x;
            camera.position.y = y;
            camera.position.z = z;
            return camera;
        }
    }, {
        key: 'createLights',
        value: function createLights(scene) {
            var light = new THREE.DirectionalLight();
            light.position.set(0, 0, 1);
            scene.add(light);
        }
    }, {
        key: 'createRenderer',
        value: function createRenderer() {
            var clearColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x000000;

            var renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                canvas: this.canvas
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.autoClear = false;
            renderer.setClearColor(clearColor, 0);
            return renderer;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            return React.createElement(
                'div',
                null,
                React.createElement('canvas', {
                    width: '1080',
                    height: '720',
                    ref: function ref(c) {
                        return _this7.canvas = c;
                    }
                })
            );
        }
    }]);

    return DissolvingGallery;
}(React.Component), _class2.propTypes = {
    handleResize: React.PropTypes.bool.isRequired,
    images: React.PropTypes.array.isRequired,
    delay: React.PropTypes.number.isRequired,
    getSize: React.PropTypes.func.isRequired
}, _temp2);

var Slide = function (_THREE$Mesh) {
    _inherits(Slide, _THREE$Mesh);

    _createClass(Slide, null, [{
        key: 'assignDuration',
        value: function assignDuration(animationPhase, width, height, geometry) {
            var aDelayDuration = geometry.createAttribute('aDelayDuration', 2);
            var minDuration = 0.8;
            var maxDuration = 1.2;
            var maxDelayX = 0.9;
            var maxDelayY = 0.125;
            var stretch = 0.11;
            var centroid = void 0;
            var offset = 0;
            for (var i = 0; i < geometry.faceCount; i++) {
                centroid = geometry.centroids[i];
                var duration = THREE.Math.randFloat(minDuration, maxDuration);
                var delayX = THREE.Math.mapLinear(centroid.x, -width / 2, width / 2, 0, maxDelayX);
                var delayY = void 0;
                if (animationPhase === 'in') {
                    delayY = THREE.Math.mapLinear(Math.abs(centroid.y), 0, height / 2, 0, maxDelayY);
                } else {
                    delayY = THREE.Math.mapLinear(Math.abs(centroid.y), 0, height / 2, maxDelayY, 0);
                }
                for (var j = 0; j < 3; j++) {
                    aDelayDuration.array[offset] = delayX + delayY + Math.random() * stretch * duration;
                    aDelayDuration.array[offset + 1] = duration;
                    offset += 2;
                }
            }
            return maxDuration + maxDelayX + maxDelayY + stretch;
        }
    }, {
        key: 'assignStartEndPositions',
        value: function assignStartEndPositions(geometry) {
            return [geometry.createAttribute('aStartPosition', 3, function (data, i) {
                geometry.centroids[i].toArray(data);
            }), geometry.createAttribute('aEndPosition', 3, function (data, i) {
                geometry.centroids[i].toArray(data);
            })];
        }
    }, {
        key: 'assignControlPoints',
        value: function assignControlPoints(geometry, animationPhase) {
            var aControl0 = geometry.createAttribute('aControl0', 3);
            var aControl1 = geometry.createAttribute('aControl1', 3);
            var control0 = new THREE.Vector3();
            var control1 = new THREE.Vector3();
            var data = [];
            var offset = 0;
            var centroid = void 0;
            for (var i = 0; i < geometry.faceCount; i++) {
                centroid = geometry.centroids[i];
                var signY = Math.sign(centroid.y);
                control0.x = THREE.Math.randFloat(0.1, 0.3) * 50;
                control0.y = signY * THREE.Math.randFloat(0.1, 0.3) * 70;
                control0.z = THREE.Math.randFloatSpread(20);
                control1.x = THREE.Math.randFloat(0.3, 0.6) * 50;
                control1.y = -signY * THREE.Math.randFloat(0.3, 0.6) * 70;
                control1.z = THREE.Math.randFloatSpread(20);
                if (animationPhase === 'in') {
                    control0.subVectors(centroid, control0);
                    control1.subVectors(centroid, control1);
                } else {
                    control0.addVectors(centroid, control0);
                    control1.addVectors(centroid, control1);
                }
                geometry.setFaceData(aControl0, i, control0.toArray(data));
                geometry.setFaceData(aControl1, i, control1.toArray(data));
            }
            return [aControl0, aControl1];
        }
    }, {
        key: 'createMaterial',
        value: function createMaterial(animationPhase, texture) {
            return new THREE.BAS.BasicAnimationMaterial({
                shading: THREE.FlatShading,
                side: THREE.DoubleSide,
                uniforms: {
                    uTime: {value: 0}
                },
                uniformValues: {
                    map: texture
                },
                vertexFunctions: [THREE.BAS.ShaderChunk['cubic_bezier'], THREE.BAS.ShaderChunk['ease_cubic_in_out'], THREE.BAS.ShaderChunk['quaternion_rotation']],
                vertexParameters: ['uniform float uTime;', 'attribute vec2 aDelayDuration;', 'attribute vec3 aStartPosition;', 'attribute vec3 aControl0;', 'attribute vec3 aControl1;', 'attribute vec3 aEndPosition;'],
                vertexInit: ['float tProgress = clamp(uTime - aDelayDuration.x, 0.0, aDelayDuration.y) / aDelayDuration.y;'],
                vertexPosition: [animationPhase === 'in' ? 'transformed *= tProgress;' : 'transformed *= 1.0 - tProgress;', 'transformed += cubicBezier(aStartPosition, aControl0, aControl1, aEndPosition, tProgress);']
            });
        }
    }]);

    function Slide(width, height, animationPhase) {
        _classCallCheck(this, Slide);

        var plane = new THREE.PlaneGeometry(width, height, width * 2, height * 2);
        THREE.BAS.Utils.separateFaces(plane);
        var geometry = new THREE.BAS.ModelBufferGeometry(plane, {
            localizeFaces: true,
            computeCentroids: true
        });
        geometry.bufferUVs();
        var maxDuration = Slide.assignDuration(animationPhase, width, height, geometry);
        Slide.assignStartEndPositions(geometry);
        Slide.assignControlPoints(geometry, animationPhase);
        var texture = new THREE.Texture();
        texture.minFilter = THREE.NearestFilter;
        var material = Slide.createMaterial(animationPhase, texture);

        var _this8 = _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).call(this, geometry, material));

        _this8.totalDuration = maxDuration;
        _this8.frustumCulled = false;
        return _this8;
    }

    _createClass(Slide, [{
        key: 'setImage',
        value: function setImage(image) {
            this.material.uniforms.map.value.image = image;
            this.material.uniforms.map.value.needsUpdate = true;
        }
    }, {
        key: 'transition',
        value: function transition() {
            return TweenMax.fromTo(this, 3, {
                time: 0
            }, {
                time: this.totalDuration,
                ease: Power0.easeInOut
            });
        }
    }, {
        key: 'time',
        get: function get() {
            return this.material.uniforms['uTime'].value;
        },
        set: function set(newTime) {
            this.material.uniforms['uTime'].value = newTime;
        }
    }]);

    return Slide;
}(THREE.Mesh);
