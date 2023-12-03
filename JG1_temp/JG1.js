/**
 * The MIT License (MIT)

Copyright (c) <2022> liss22

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const sketch = (p) => {
    /** 떨어지는 벚꽃잎들 */
    var particles = [];
    /** 떨어지는 벚꽃잎 애니메이션 프레임 */
    var imgs = [[], [], [], []];
    var IMG_SIZE = p.createVector(36, 24);
    var _ratio = 1;
    const IMGS_LEN = [54, 62, 63, 46];
    p.setup = () => {
        // License 고지
        console.log(`p5js 라이브러리가 사용되었습니다. (GPLv2)
라이브러리링크: https://p5js.org/
상세한 법적 고지: https://github.com/processing/p5.js/blob/main/license.txt`);
        const tmp = document.getElementById('defaultCanvas');
        let panel = p.createCanvas(tmp.clientWidth, tmp.clientHeight);
        panel.parent(tmp);
        p.imageMode(p.CENTER);
        p.pixelDensity(1);
        p.windowResized();

        for (let i = 0, j = 4; i < j; i++)
            for (let k = 1, l = IMGS_LEN[i]; k <= l; k++)
                imgs[i][k - 1] = p.loadImage('assets/' + p.nf(i, 2) + '/' + p.nf(k, 4) + '.png');

        p.clear(255, 255, 255, 255);
        p.smooth();
        
        // 모바일인 경우
        if (navigator.userAgent.toLocaleLowerCase().match(/mobile/i)) {
            IMG_SIZE.x *= .6;
            IMG_SIZE.y *= .6;
            _ratio = 0.5;
        }

        let randx = p.random(p.width * .2, p.width * 1);
        let randy = p.random(-10, -12);
        particles.push(new CherryBlossom(randx, randy));
        setInterval(() => {
            let randx = p.random(p.width * .2, p.width * 1.3);
            let randy = p.random(-30, -50);
            particles.push(new CherryBlossom(randx, randy));
        }, 671);
        setTimeout(() => {
            const LOADING = document.getElementById('p5_loading');
            if (LOADING)
                LOADING.remove();
        }, 1500);
    }
    p.draw = () => {
        p.clear(255, 255, 255, 255);
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            if (particles[i].pos.y > p.height + 100) {
                particles[i].remove();
                particles.splice(i, 1);
            }
        }
    }
    /** 떨어지는 벚꽃잎들은 */
    class CherryBlossom {
        // life_span: number = 1;
        constructor(_start_px = 0, _start_py = 0, _start_rx = 0, _start_ry = 0) {
            /** 꽃잎 이미지 */
            this.img = 0;
            /** 꽃잎 이미지 프레임 번호 */
            this.img_frame = 0;
            this.acc = p.createVector();
            this.pos = p.createVector(_start_px, _start_py);
            this.rot = p.createVector(_start_rx, _start_ry);

            this.img = p.floor(p.random(0, 4));
        }
        /** 벚꽃잎의 행동 업데이트 */
        update() {
            this.update_position();
            this.update_animation();
            p.image(imgs[this.img][this.img_frame], this.pos.x, this.pos.y);
        }
        update_position() {
            let rxg = p.randomGaussian(.005, .003) * _ratio * .06 * p.deltaTime;
            let ryg = p.randomGaussian(.005, .003) * _ratio * .06 * p.deltaTime;
            this.acc.add(p.createVector(-rxg, ryg));
            this.pos.add(this.acc);
        }
        update_animation() {
            if (this.img_frame < IMGS_LEN[this.img] - 1) {
                this.img_frame++;
            } else {
                this.img = p.floor(p.random(0, 4));
                this.img_frame = 0;
            }
            // 이 자리에서 각 벚꽃의 행동방식 정하기
        }
        remove() {
        }
    }
    p.windowResized = () => {
        const tmp = document.getElementById('defaultCanvas');
        p.resizeCanvas(tmp.clientWidth, tmp.clientHeight);
        p.clear(255, 255, 255, 255);
        const main_table = document.getElementById('main_table');
        if (tmp.clientWidth > 680)
            main_table.setAttribute('style', 'width: 680px;');
        else
            main_table.setAttribute('style', 'width: 100%;');
    }
};
new p5(sketch);
