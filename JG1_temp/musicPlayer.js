/**
 * The MIT License (MIT)

Copyright (c) <2022> liss22

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

let musicplayer = (p) => {
    /** 마우스 버튼에 따른 상태 */
    var BTN_MOUSE = {
        READY: 'READY',
        DISABLED: 'DISABLED',
        HOVER: 'HOVER',
        DOWN: 'DOWN',
    }
    let playButton;
    /** 음악 플레이어 배경 이미지 */
    var bgPanel = p.loadImage('assets/img/panel.png');
    var cover_thumb = p.loadImage('assets/thumb.jpg');
    p.setup = () => {
        const tmp = document.getElementById('musicPlayer');
        let panel = p.createCanvas(tmp.clientWidth, tmp.clientHeight);
        panel.parent(tmp);

        playButton = new PlayButton();
        p.imageMode(p.CENTER);
        p.noStroke();
        p.textSize(16);
        draw_player();
        setTimeout(() => {
            const LOADING = document.getElementById('p5_loading');
            if (LOADING)
                LOADING.remove();
        }, 1500);
    }
    p.draw = () => {
        p.clear(255, 255, 255, 255);
        draw_player();
    }
    let backgroundColor = p.color(128);
    let draw_player = () => {
        p.fill(backgroundColor);
        p.image(bgPanel, p.width / 2, p.height / 2);
        p.image(cover_thumb, p.width / 2 - 60, p.height / 2, 48, 48);
        playButton.display(p.width / 2, p.height / 2);
    }
    /** 플레이버튼, 이퀄라이져를 포함하고 있음 */
    class PlayButton {
        constructor() {
            this.btn_status = BTN_MOUSE.READY;
            /** 버튼에 따른 이미지 교체 */
            this.isButton = {
                disabled: {
                    stopped: p.loadImage('assets/img/btns/none.png'),
                },
                hover: {
                    playing: p.loadImage('assets/img/btns/hover_playing.png'),
                    stopped: p.loadImage('assets/img/btns/hover_stopped.png'),
                },
                normal: {
                    playing: p.loadImage('assets/img/btns/normal_playing.png'),
                    stopped: p.loadImage('assets/img/btns/normal_stopped.png'),
                },
            };
            this.eq_bar = [];
            this.fft = new p5.FFT();
            this.play_time = '00:00';
            this.pg_pos = p.createVector(0, 0);
            // 오디오 불러오기
            this.jsAudio = new Audio('assets/유희성 - 벚꽃처럼.mp3');
            this.isPlaying = false;
            this.jsAudio.onloadeddata = () => {
                this.jsAudio.volume = .25;
                this.DrawVolumeController();
                this.RefreshButtonImage(BTN_MOUSE.READY, 0);
            }
            this.jsAudio.on
            this.jsAudio.onplay = () => {
                this.isPlaying = true;
            }
            this.jsAudio.onpause = () => {
                this.isPlaying = false;
            }
            this.jsAudio.onended = () => {
                this.isPlaying = false;
            }
            const RECT_SIZE = 53;
            const EQ_COUNT = 7;
            this.pg = p.createGraphics(RECT_SIZE, RECT_SIZE);
            this.pg.translate(this.pg.width / 2, this.pg.height / 2);
            this.pg.imageMode(p.CENTER);
            this.pg.noStroke();
            this.pg.noLoop();
            this.RefreshButtonImage(BTN_MOUSE.DISABLED, 0);
            for (let i = 0; i < EQ_COUNT; i++)
                this.eq_bar.push(new EqualizerBar(135.1 + (7 * i), 50));
        }
        display(_x, _y) {
            this.pg_pos.x = _x;
            this.pg_pos.y = _y;
            p.image(this.pg, _x, _y);
            this.UpdateEqualizer();
            this.UpdateTimer();
            this.DrawVolumeController();
        }
        /** 볼륨 조절기 그리기, 동작하기 */
        DrawVolumeController() {
            p.push();
            p.translate(135, p.height - 20);
            p.fill(60);
            p.triangle(0, 0, 40, 0, 40, -14);
            p.fill('#e7e7c5');
            let volWidth = p.lerp(0, 40, this.jsAudio.volume);
            p.triangle(0, 0, volWidth, 0, volWidth, p.lerp(0, -14, this.jsAudio.volume));
            p.pop();
        }
        SetVolume() {
            this.jsAudio.volume = p.map(p.mouseX, 135, 175, 0, 1);
        }
        /** 버튼 이미지 새로고침 (상태에 따라) */
        RefreshButtonImage(_tog, _ing = -1) {
            if (this.btn_status == _tog && !_ing) return;
            this.pg.clear(255, 255, 255, 255);
            let btn_img;
            if (_ing) {
                this.btn_status = _tog;
            }
            this.pg.push();
            let target_status = _tog == BTN_MOUSE.DISABLED ? 'disabled' : _tog == BTN_MOUSE.HOVER ? 'hover' : 'normal';
            let target_icon = this.isPlaying ? 'playing' : 'stopped';
            btn_img = this.isButton[target_status][target_icon];
            this.pg.image(btn_img, 0, 0);
            if (_ing != -1) {
                this.pg.textAlign(p.CENTER, p.CENTER);
                this.pg.fill(255);
                this.pg.textStyle(p.BOLD);
                this.pg.text(p.floor(_ing * 100) + '%', 0, 1);
            }
            this.pg.redraw();
            this.pg.pop();
        }
        /** 이퀄라이져 업데이트 */
        UpdateEqualizer() {
            let spectrum = this.fft.analyze();
            const _SCALE = spectrum.length / this.eq_bar.length;
            let spectrum_arr = [];
            for (let i = p.floor(_SCALE * 2 / 2), j = spectrum.length; i < j; i = p.floor(i + _SCALE)) {
                let h = p.map(spectrum[i], 0, 255, 8, 0);
                spectrum_arr.push(p.round(h));
            }
            for (let i = 0, j = this.eq_bar.length; i < j; i++) {
                this.eq_bar[i].update(spectrum_arr[i]);
            }
        }
        /** 타이머 시각화 */
        UpdateTimer() {
            p.push();
            p.translate(135, p.height / 2 - 8);
            p.fill('#e7e7c5');
            let _time = p.floor(this.jsAudio.currentTime);
            if (this.isPlaying)
                this.play_time = p.nf(p.floor(_time / 60), 2) + ':' + p.nf(_time % 60, 2).split('.')[0];
            p.text(this.play_time, 0, 0);
            p.pop();
        }
        /** 마우스 움직임에 대해서 검토 */
        checkMouseHover() {
            let mousePos = p.createVector(p.mouseX, p.mouseY);
            if (this.pg_pos.dist(mousePos) < 32) { // hover
                p.cursor(p.HAND);
                this.RefreshButtonImage(BTN_MOUSE.HOVER);
            }
            else { // normal
                p.cursor(p.ARROW);
                this.RefreshButtonImage(BTN_MOUSE.READY);
            }
        }
        checkMouseDown() {
            this.RefreshButtonImage(BTN_MOUSE.DOWN);
        }
        /** 버튼을 눌렀다면 음악 재생 */
        checkMouseClick() {
            // 마우스 클릭 체크하기
            if (!this.isPlaying)
                this.jsAudio.play();
            else this.jsAudio.pause();
            this.RefreshButtonImage(BTN_MOUSE.HOVER);
        }
    }
    /** 이퀄라이저에 사용되는 막대바 1개 */
    class EqualizerBar {
        constructor(_px, _py) {
            this.pos = p.createVector(_px, _py);
            this.pg = p.createGraphics(5, 40);
            this.pg.noStroke();
        }
        /** 이퀄라이저 업데이트 */
        update(_size = 0) {
            this.pg.clear(255, 255, 255, 255);
            for (let i = 0; i < 8; i++) {
                if (i < _size) { // 소리가 도달하지 못함
                    // this.pg.push();
                    // this.pg.fill(150);
                    // this.pg.rect(0, (5 * i), 5, 3);
                    // this.pg.pop();
                } else { // 소리가 도달함
                    this.pg.push();
                    this.pg.fill(231, 231, 197, 100 - 12 * i);
                    this.pg.rect(0, (5 * i), 5, 3);
                    this.pg.pop();
                }
            }
            p.image(this.pg, this.pos.x, this.pos.y);
        }
    }
    p.mouseMoved = () => {
        if (playButton)
            playButton.checkMouseHover();
    }
    p.mousePressed = () => {
        if (p.mouseX > 135 && p.mouseX < 175
            && p.mouseY < 100 && p.mouseY > 26)
            DraggedAction();
        if (playButton && playButton.btn_status == BTN_MOUSE.HOVER)
            playButton.checkMouseDown();
    }
    p.mouseDragged = () => {
        if (p.mouseX > 135 && p.mouseX < 175
            && p.mouseY < 100 && p.mouseY > 26)
            DraggedAction();
    }
    p.touchMoved = () => {
        if (p.mouseX > 135 && p.mouseX < 175
            && p.mouseY < 100 && p.mouseY > 26)
            DraggedAction();
    }
    let DraggedAction = () => {
        playButton.SetVolume();
    }
    p.mouseClicked = () => {
        if (isTouched) return;
        if (playButton && playButton.btn_status == BTN_MOUSE.DOWN)
            playButton.checkMouseClick();
    }
    let isTouched = false;
    p.touchStarted = () => {
        if (p.mouseX > 135 && p.mouseX < 175
            && p.mouseY < 100 && p.mouseY > 26)
            DraggedAction();
        isTouched = true;
        let mousePos = p.createVector(p.touches[0].x, p.touches[0].y);
        if (playButton && playButton.pg_pos.dist(mousePos) < 32)
            playButton.checkMouseClick();
    }
    p.touchEnded = () => {
        setTimeout(() => {
            isTouched = false;
            playButton.RefreshButtonImage(BTN_MOUSE.READY);
        }, 100);
    }
}
new p5(musicplayer);