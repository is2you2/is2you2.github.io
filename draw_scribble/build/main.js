webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_p5__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_p5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_p5__);
/*
  MIT License

  Copyright (c) 2020 Choi sung soo

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alert) {
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.start_alert();
    }
    HomePage.prototype.start_alert = function () {
        var _this = this;
        this.alert.create({
            title: '',
            message: '캔버스 사이즈를 입력해주세요',
            enableBackdropDismiss: false,
            inputs: [{
                    name: 'size',
                    type: 'number',
                    placeholder: '기본값: 512'
                },
                {
                    name: 'height',
                    type: 'number',
                    placeholder: '기본값: 정사각형'
                }],
            buttons: [{
                    text: '확인',
                    handler: function (ev) {
                        _this.run_canvas_with(ev['size'] || 512, ev['height'] || 0);
                    }
                }]
        }).present();
    };
    /**
     * 캔버스 레이어 생성
     * @param layer_size 레이어 한 변의 길이
     */
    HomePage.prototype.run_canvas_with = function (layer_size, layer_height) {
        if (layer_size === void 0) { layer_size = 512; }
        var sketch = function (p5) {
            /** 현재 어떤 행동중인가 */
            var ACTION_STATUS;
            (function (ACTION_STATUS) {
                ACTION_STATUS[ACTION_STATUS["IDLE"] = 0] = "IDLE";
                ACTION_STATUS[ACTION_STATUS["PLAY_ANIMATION"] = 1] = "PLAY_ANIMATION";
                ACTION_STATUS[ACTION_STATUS["CHANGE_VALUE"] = 2] = "CHANGE_VALUE";
                ACTION_STATUS[ACTION_STATUS["ON_DRAW"] = 3] = "ON_DRAW";
                ACTION_STATUS[ACTION_STATUS["CHANGE_TIMELINE"] = 4] = "CHANGE_TIMELINE";
                ACTION_STATUS[ACTION_STATUS["CHANGE_LAYER"] = 5] = "CHANGE_LAYER";
                ACTION_STATUS[ACTION_STATUS["CHANGE_BRUSH"] = 6] = "CHANGE_BRUSH";
                ACTION_STATUS[ACTION_STATUS["IS_INDICATING"] = 7] = "IS_INDICATING";
                ACTION_STATUS[ACTION_STATUS["CHANGE_CURRENT_LINE_COLOR"] = 8] = "CHANGE_CURRENT_LINE_COLOR";
            })(ACTION_STATUS || (ACTION_STATUS = {}));
            var status = ACTION_STATUS.IDLE;
            var brushes = [];
            var selected_brush = 0;
            /** background layer */
            var pg;
            /** 작업중인 개체를 레이어로 떼어낸 것, 다중연산 최적화용 */
            var tmp_work_layer;
            // indicator_value below
            var start_pos = p5.createVector(0, 0);
            var current_pos = p5.createVector(0, 0); // with shift+LB // reset with MB
            var target_pos = p5.createVector(0, 0);
            var start_scale = 1;
            var current_scale = 1; // with wheel-UP/DOWN // reset with MB
            var target_scale = 1;
            var MENU_FONT_SIZE = 16;
            var IONIC_HEIGHT_MARGIN = 72;
            /** 색상 */
            var next_draw_color;
            var current_drawline_picker = p5.createColorPicker(next_draw_color);
            /** 슬라이더 값들을 오브젝트로 통합
             * parameter ref 개념이 js에 없음..
             */
            var slider_values = {
                /** 그리기 선의 크기 */
                next_draw_size: 20,
                /** 위치 흩뿌리기 */
                scatter_position_value: 0,
                /** 꼬리비율값 */
                scatter_tail_value: 0,
                /** 크기 흩뿌리기 */
                scatter_size_value: 0,
                randomize_rotation: 1,
                draw_steps: 2,
                brush_opacity: 255,
            };
            /** 붓 크기 */
            var current_brush_size_slider = p5.createSlider(1, layer_size / 4, slider_values.next_draw_size);
            /** 랜덤 흩뿌리기 */
            var scatter_position_slider = p5.createSlider(0, layer_size / 8, slider_values.scatter_position_value);
            /** 랜덤 위치 흩뿌리기 꼬리 비율 조정 */
            var scatter_tail_slider = p5.createSlider(0, 1, slider_values.scatter_tail_value, .035);
            /** 랜덤 브러쉬 사이즈 */
            var scatter_size_slider = p5.createSlider(-1, 1, slider_values.scatter_size_value, .07);
            /** 붓의 회전 랜덤 정도 조정 */
            var randomize_rotate_brush_slider = p5.createSlider(0, 1, slider_values.randomize_rotation, .035);
            /** 붓의 밀도 (steps) */
            var current_brush_steps = p5.createSlider(1, 24, slider_values.draw_steps);
            /** 붓의 투명도 */
            var current_brush_opacity = p5.createSlider(0, 255, slider_values.brush_opacity);
            p5.setup = function () {
                brushes.push(new BrushDeck('assets/brushes/basic_brush.png', '기본 붓(Default)'));
                // *** 파일을 올려서 브러쉬 추가하기
                // ...
                var tmp = document.getElementById('p5panel');
                var panel = p5.createCanvas(tmp.clientWidth, tmp.clientHeight);
                panel.parent('p5panel');
                pg = p5.createGraphics(layer_size, (layer_height || layer_size));
                pg.imageMode(p5.CENTER);
                pg.smooth();
                pg.noLoop();
                tmp_pg = p5.createGraphics(layer_size, (layer_height || layer_size));
                tmp_pg.imageMode(p5.CENTER);
                tmp_pg.smooth();
                tmp_pg.noLoop();
                p5.imageMode(p5.CENTER);
                add_layer();
                p5.smooth();
                p5.frameRate(60);
                p5.noLoop();
                p5.textSize(18);
                // 아래, 설정 메뉴 DOM
                next_draw_color = p5.color(current_drawline_picker.value());
                // 그리기 색상
                current_drawline_picker.remove();
                current_drawline_picker = p5.createColorPicker(next_draw_color);
                current_drawline_picker.mouseClicked(function () {
                    status = ACTION_STATUS.CHANGE_CURRENT_LINE_COLOR;
                    p5.loop();
                });
                current_drawline_picker.position(16, IONIC_HEIGHT_MARGIN + 24);
                current_drawline_picker.size(60, 60);
                // 그리기 붓 크기
                realtime_slider_form(current_brush_size_slider, IONIC_HEIGHT_MARGIN + 120, 'next_draw_size', 'size');
                // 위치 흩뿌리기
                realtime_slider_form(scatter_position_slider, IONIC_HEIGHT_MARGIN + 170, 'scatter_position_value', 'scatter_value');
                // 랜덤 값들이 붓 끝으로부터 감쇠하는 정도
                realtime_slider_form(scatter_tail_slider, IONIC_HEIGHT_MARGIN + 220, 'scatter_tail_value', 'scatter_reduce_tail');
                // 크기 랜덤화
                realtime_slider_form(scatter_size_slider, IONIC_HEIGHT_MARGIN + 270, 'scatter_size_value', 'scatter_size');
                // 회전 정도
                realtime_slider_form(randomize_rotate_brush_slider, IONIC_HEIGHT_MARGIN + 320, 'randomize_rotation', 'rotate_ratio');
                // 붓의 밀도
                realtime_slider_form(current_brush_steps, IONIC_HEIGHT_MARGIN + 370, 'draw_steps', 'draw_step');
                // 붓의 투명도
                realtime_slider_form(current_brush_opacity, IONIC_HEIGHT_MARGIN + 420, 'brush_opacity', 'brush_opacity');
            };
            /**
             * 실시간 변경처리되는 슬라이더 폼
             * @param target_slider 해당 슬라이더
             * @param pos 슬라이더 높이
             * @param current_value_name 슬라이더 값의 이름
             * @param data_name 레이어 info.draws.~ 에 해당하는 이름
             */
            var realtime_slider_form = function (target_slider, pos, current_value_name, data_name, horizontal_pos) {
                if (horizontal_pos === void 0) { horizontal_pos = 16; }
                target_slider.position(horizontal_pos, pos);
                target_slider.style('width', '110px');
                target_slider.mouseMoved(function () {
                    if (current_scribble < 0)
                        return;
                    layer_info[current_layer].draws[data_name][current_scribble] = target_slider.value();
                    if (layer_info[current_layer].draws[data_name].length == current_scribble + 1)
                        slider_values[current_value_name] = layer_info[current_layer].draws[data_name][current_scribble];
                    p5.redraw();
                    update_tmp_line();
                });
                target_slider.mouseOut(function () {
                    update_current_layers();
                });
            };
            /** 레이어 생성시 사용되는 슬라이더 폼 */
            var layer_info_slider_form = function () {
            };
            p5.draw = function () {
                draw_background();
                lerp_indicator();
                draw_timeline();
                update_all_layers();
                switch (status) {
                    case ACTION_STATUS.CHANGE_CURRENT_LINE_COLOR:
                        layer_info[current_layer].draws.color[layer_info[current_layer].draws.color.length - 1] = p5.color(current_drawline_picker.value());
                        if (layer_info[current_layer].draws.color.length == current_scribble + 1)
                            next_draw_color = p5.color(current_drawline_picker.value());
                        update_tmp_line();
                        break;
                }
            };
            /** 편집 때 실시간 변화를 보여주는 임시 레이어 */
            var tmp_pg;
            /** 편집 중인 선만 업데이트*/
            var update_tmp_line = function () {
                tmp_pg.clear();
                tmp_pg.background(255, 225);
                draw_on_layer_by_info(current_scribble, true);
                p5.image(tmp_pg, (p5.width / 2), (p5.height / 2));
            };
            /** 편집 레이어만 전부 업데이트 */
            var update_current_layers = function () {
                layers[current_layer].clear();
                for (var i = 0; i < layer_info[current_layer].draws.lines.length; i++)
                    draw_on_layer_by_info(i);
            };
            /** 모든 레이어 업데이트 */
            var update_all_layers = function () {
                for (var i = 0, j = layers.length; i < j; i++) {
                    layers[i].redraw();
                    p5.image(layers[i], (p5.width / 2), (p5.height / 2));
                }
                p5.redraw();
            };
            /** 브러쉬 추가시 보이는 이미지 */
            var BrushDeck = /** @class */ (function () {
                function BrushDeck(_data_img, _brush_name) {
                    var _this = this;
                    p5.loadImage(_data_img, function (v) {
                        _this.img = v;
                        _this.pg = p5.createGraphics(v.width, v.height);
                        _this.pg.smooth();
                        _this.pg.imageMode(p5.CENTER);
                        _this.pg.image(_this.img, pg.width / 2, pg.height / 2, pg.width, pg.height);
                        _this.pg.noLoop();
                    }, function (e) {
                        last_log = "브러쉬 불러오기 실패: " + e;
                    });
                }
                BrushDeck.prototype._is_clicked = function () {
                    if (p5.mouseIsPressed)
                        if (p5.mouseButton == p5.LEFT) {
                            console.log("브러쉬 선택 코드 필요");
                        }
                        else if (p5.mouseButton == p5.RIGHT) {
                            console.log("브러쉬 삭제 코드 필요");
                        }
                };
                return BrushDeck;
            }());
            /** 하단 프레임 슬라이더 */
            var FrameSlider = /** @class */ (function () {
                // *** 레이어간 간격 조정하기
                // *** 레이어 진행도 표기 (막대)
                // *** 붓의 크기 표기 (기울기)
                // *** 붓의 투명도 표기 (투명도)
                // *** 붓의 scatter(무엇이든) 표기 (일그러짐)
                // *** 애니메이션 재생 버튼
                // *** 일시 정지 및 정지버튼
                function FrameSlider() {
                }
                FrameSlider.prototype._is_clicked = function () {
                };
                return FrameSlider;
            }());
            var start_lerp = 0;
            var current_lerp = 0;
            var LERP_SIZE = .07;
            /** 네비게이션 화면 변동 */
            var lerp_indicator = function () {
                if (current_scale == target_scale && current_pos == target_pos)
                    return;
                p5.image(pg, (p5.width / 2), (p5.height / 2));
            };
            /** 네비게이션 초기화 */
            var reset_indicator = function () {
                target_pos = p5.createVector(0, 0);
                target_scale = 1;
            };
            /** 타임라인 그리기 */
            var draw_timeline = function () {
            };
            /** 보고있는 현재 프레임 */
            var view_frame = 0;
            /** 멈추게 될 프레임 (전체 프레임 수) */
            var final_frame = 0;
            /**
             * 실시간 선 그리기
             * @param _lines 그릴 선
             * @param _steps 붓 빈도
             */
            var draw_on_layer = function (_lines, _color, _steps) {
                var ll = _lines.length - 1;
                var retargeting_mouse_x = (p5.width - layer_size) / 2;
                var retargeting_mouse_y = (p5.height - (layer_height || layer_size)) / 2;
                _color.setAlpha(slider_values.brush_opacity);
                for (var i = 1; i <= _steps; i++) {
                    var t = i / _steps;
                    var x = p5.curvePoint(ll - 3 > 0 ? _lines[ll - 3].x : _lines[0].x, ll - 2 > 0 ? _lines[ll - 2].x : _lines[0].x, ll - 1 > 0 ? _lines[ll - 1].x : _lines[0].x, _lines[ll].x, t);
                    var y = p5.curvePoint(ll - 3 > 0 ? _lines[ll - 3].y : _lines[0].y, ll - 2 > 0 ? _lines[ll - 2].y : _lines[0].y, ll - 1 > 0 ? _lines[ll - 1].y : _lines[0].y, _lines[ll].y, t);
                    layers[current_layer].push();
                    layers[current_layer].tint(_color);
                    layers[current_layer].translate(x - retargeting_mouse_x
                        + p5.random(-slider_values.scatter_position_value, slider_values.scatter_position_value), y - retargeting_mouse_y + p5.random(-slider_values.scatter_position_value, slider_values.scatter_position_value));
                    layers[current_layer].rotate(p5.random(p5.PI) * slider_values.randomize_rotation);
                    layers[current_layer].scale(slider_values.next_draw_size
                        + (p5.random(-slider_values.next_draw_size, slider_values.next_draw_size) * slider_values.scatter_size_value));
                    layers[current_layer].image(brushes[selected_brush].img, 0, 0, 1, 1);
                    layers[current_layer].pop();
                }
                layers[current_layer].redraw();
                p5.redraw();
            };
            /** 기존 정보로 선 그리기
             * 임시 레이어 전환 기능 있음
             */
            var draw_on_layer_by_info = function (lineNum, is_tmp) {
                if (is_tmp === void 0) { is_tmp = false; }
                var target_layer = layers[current_layer];
                if (is_tmp)
                    target_layer = tmp_pg;
                var _lines = layer_info[current_layer].draws.lines[lineNum];
                var _color = layer_info[current_layer].draws.color[lineNum];
                var _opacity = layer_info[current_layer].draws.brush_opacity[lineNum];
                _color.setAlpha(_opacity);
                var _steps = layer_info[current_layer].draws.draw_step[lineNum];
                p5.randomSeed(lineNum);
                for (var ll = 0, b = _lines.length; ll < b; ll++)
                    for (var i = 1; i <= _steps; i++) {
                        var t = i / _steps;
                        var x = p5.curvePoint(ll - 3 > 0 ? _lines[ll - 3].x : _lines[0].x, ll - 2 > 0 ? _lines[ll - 2].x : _lines[0].x, ll - 1 > 0 ? _lines[ll - 1].x : _lines[0].x, _lines[ll].x, t);
                        var y = p5.curvePoint(ll - 3 > 0 ? _lines[ll - 3].y : _lines[0].y, ll - 2 > 0 ? _lines[ll - 2].y : _lines[0].y, ll - 1 > 0 ? _lines[ll - 1].y : _lines[0].y, _lines[ll].y, t);
                        if (layer_info[current_layer].draws.size[lineNum] > 0) {
                            target_layer.push();
                            target_layer.tint(_color);
                            target_layer.translate(x - layer_info[current_layer].draws.retargetting[lineNum].x
                                + p5.random(-layer_info[current_layer].draws.scatter_value[lineNum], layer_info[current_layer].draws.scatter_value[lineNum]) * p5.constrain((ll * _steps + i) / (b * _steps * layer_info[current_layer].draws.scatter_reduce_tail[lineNum]), 0, 1), y - layer_info[current_layer].draws.retargetting[lineNum].y
                                + p5.random(-layer_info[current_layer].draws.scatter_value[lineNum], layer_info[current_layer].draws.scatter_value[lineNum]) * p5.constrain((ll * _steps + i) / (b * _steps * layer_info[current_layer].draws.scatter_reduce_tail[lineNum]), 0, 1));
                            target_layer.rotate(p5.random(p5.PI) * layer_info[current_layer].draws.rotate_ratio[lineNum]);
                            target_layer.scale(layer_info[current_layer].draws.size[lineNum] + (p5.random(-layer_info[current_layer].draws.size[lineNum], layer_info[current_layer].draws.size[lineNum]) * layer_info[current_layer].draws.scatter_size[lineNum]));
                            target_layer.image(brushes[selected_brush].img, 0, 0, 1, 1);
                            target_layer.pop();
                        }
                    }
                target_layer.redraw();
                p5.redraw();
            };
            var new_layer_form = function () {
                var result = {
                    draws: {
                        lines: [],
                        color: [],
                        size: [],
                        scatter_value: [],
                        scatter_size: [],
                        scatter_reduce_tail: [],
                        rotate_ratio: [],
                        selected_brush: [0],
                        retargetting: [],
                        draw_step: [],
                        brush_opacity: [],
                    },
                };
                return result;
            };
            var draw_call = 0;
            /** 가장 배경부분 새로고침 */
            var draw_background = function () {
                p5.background(200);
                p5.push();
                p5.translate(120, 20);
                p5.rotate(draw_call);
                p5.line(0, 10, 0, -10);
                p5.line(10, 0, -10, 0);
                p5.pop();
                p5.push();
                p5.textSize(MENU_FONT_SIZE);
                p5.text('그리기 색상', 0, MENU_FONT_SIZE);
                p5.text('그리기 크기', 0, 110);
                p5.text('위치 흩뿌리기', 0, 160);
                p5.text('흩뿌리기 꼬리비율', 0, 210);
                p5.text('랜덤 브러쉬 크기', 0, 260);
                p5.text('붓의 회전 정도', 0, 310);
                p5.text('붓의 밀도', 0, 360);
                p5.text('붓의 투명도', 0, 410);
                p5.pop();
                pg.background(255);
                pg.redraw();
                p5.redraw();
                draw_call += .1;
            };
            /** 현재 작업중인 레이어 */
            var current_layer = 0;
            /** 현재 작업중인 선 */
            var current_scribble = -1;
            /** 레이어들 (이미지: pg) */
            var layers = [];
            /** 레이어에 저장된 정보들 */
            var layer_info = [];
            /** 레이어 생성하기 */
            var add_layer = function () {
                if (layers.length < 255) {
                    var n = p5.createGraphics(layer_size, (layer_height || layer_size));
                    n.imageMode(p5.CENTER);
                    n.smooth();
                    n.noLoop();
                    layers.push(n);
                    layer_info.push(new_layer_form());
                }
                else {
                    view_log("최대 활용 레이어 숫자 초과! 더 이상 만드는 것을 허용하지 않습니다.");
                }
            };
            /** 레이어 삭제하기 */
            var remove_layer = function (num) {
                layers.splice(num, 1);
            };
            /** 현재 프레임에 랜덤 필터값 적용 */
            var randomSeed_position_frame = function () {
                console.log("randomSeedFrame");
            };
            /** 현재 레이어에 랜덤 필터값 적용 */
            var randomSeed_position_layer = function () {
                console.log("randomSeedLayer");
            };
            var randomSeed_rotation_frame = function () {
                console.log("randomSeedFrame");
            };
            /** 현재 레이어에 랜덤 필터값 적용 */
            var randomSeed_rotation_layer = function () {
                console.log("randomSeedLayer");
            };
            /** 전체 랜덤 필터 적용 */
            var randomSeed_scene = function () {
                console.log("randomSeedScene");
            };
            /** 미리보기 플레이 */
            var animate_scribbles = function () {
                view_frame = 0;
                reset_indicator();
            };
            /** 미리보기 종료 */
            var cancel_animation_scribbles = function () {
                view_frame = final_frame;
            };
            /** 작업중이던 그리기 내용을 json 파일로 저장하기 */
            var _save_work_json = function () {
            };
            /** 작업중이던 필터 정보를 json 파일로 저장하기 */
            var _save_work_filter = function () {
            };
            /** 작업 json 현 캔버스에 적용 */
            var _load_work_json = function () {
            };
            /** 작업 필터 현 캔버스에 적용 */
            var _load_work_filter = function () {
            };
            /** 화면에 보여지는 마지막 로그 */
            var last_log = "그리기 프로그램 시작함";
            /** 로그 남기기 */
            var view_log = function (str) {
                console.log(str);
                last_log = str;
            };
            p5.mousePressed = function (ev) {
                // 향후 indicator 정보와 일치시킬 것
                if (p5.mouseX < p5.width / 2 + layer_size / 2
                    && p5.mouseX > p5.width / 2 - layer_size / 2
                    && p5.mouseY < p5.height / 2 + (layer_height || layer_size) / 2
                    && p5.mouseY > p5.height / 2 - (layer_height || layer_size) / 2) {
                    status = ACTION_STATUS.ON_DRAW;
                    layer_info[current_layer].draws.lines.push([p5.createVector(p5.mouseX, p5.mouseY)]);
                    layer_info[current_layer].draws.color.push(next_draw_color);
                    layer_info[current_layer].draws.size.push(slider_values.next_draw_size);
                    layer_info[current_layer].draws.scatter_value.push(slider_values.scatter_position_value);
                    layer_info[current_layer].draws.scatter_size.push(slider_values.scatter_size_value);
                    layer_info[current_layer].draws.scatter_reduce_tail.push(slider_values.scatter_tail_value);
                    layer_info[current_layer].draws.rotate_ratio.push(slider_values.randomize_rotation);
                    layer_info[current_layer].draws.draw_step.push(slider_values.draw_steps);
                    layer_info[current_layer].draws.brush_opacity.push(slider_values.brush_opacity);
                    current_scribble++;
                    var retargeting_mouse_x = (p5.width - layer_size) / 2;
                    var retargeting_mouse_y = (p5.height - (layer_height || layer_size)) / 2;
                    layer_info[current_layer].draws.retargetting.push(p5.createVector(retargeting_mouse_x, retargeting_mouse_y));
                    p5.randomSeed(current_scribble);
                    draw_on_layer(layer_info[current_layer].draws.lines[layer_info[current_layer].draws.lines.length - 1], next_draw_color, layer_info[current_layer].draws.draw_step[layer_info[current_layer].draws.draw_step.length - 1]);
                }
                else {
                    status = ACTION_STATUS.CHANGE_VALUE;
                    p5.keyPressed();
                }
            };
            p5.mouseDragged = function () {
                switch (status) {
                    case ACTION_STATUS.ON_DRAW:
                        layer_info[current_layer].draws.lines[layer_info[current_layer].draws.lines.length - 1].push(p5.createVector(p5.mouseX, p5.mouseY));
                        draw_on_layer(layer_info[current_layer].draws.lines[layer_info[current_layer].draws.lines.length - 1], next_draw_color, layer_info[current_layer].draws.draw_step[layer_info[current_layer].draws.draw_step.length - 1]);
                        break;
                }
            };
            p5.mouseReleased = function () {
                switch (status) {
                    case ACTION_STATUS.ON_DRAW:
                        console.log("info: ", layer_info);
                        layer_info[current_layer].draws.lines[layer_info[current_layer].draws.lines.length - 1].push(p5.createVector(p5.mouseX, p5.mouseY));
                        draw_on_layer(layer_info[current_layer].draws.lines[layer_info[current_layer].draws.lines.length - 1], next_draw_color, layer_info[current_layer].draws.draw_step[layer_info[current_layer].draws.draw_step.length - 1]);
                        status = ACTION_STATUS.IDLE;
                        p5.noLoop();
                        break;
                    case ACTION_STATUS.CHANGE_CURRENT_LINE_COLOR:
                        update_current_layers();
                        break;
                }
            };
            p5.keyPressed = function () {
                status = ACTION_STATUS.IDLE;
                p5.noLoop();
            };
            p5.windowResized = function () {
                var tmp = document.getElementById("p5panel");
                p5.resizeCanvas(tmp.clientWidth, tmp.clientHeight);
            };
        };
        new __WEBPACK_IMPORTED_MODULE_2_p5__(sketch);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/liss22/draw_scribble/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Draw-Scribbles\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div id="p5panel" style="width: 100%; height: 640px;"></div>\n</ion-content>'/*ion-inline-end:"/home/liss22/draw_scribble/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/liss22/draw_scribble/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/liss22/draw_scribble/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map