/**
 * The MIT License (MIT)

Copyright (c) <2022> liss22

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

let interPanel = (p) => {
    const TargetDate = {
        'year': 2022,
        'month': 6,
        'day': 15,
    };
    let DdayCount = 0;
    let ddayFontSize = 16;
    /** 클릭시 생성되는 이펙트 */
    let effects = [];
    /** 화면비 대비 lerp */
    let ratioLerp = 0;
    let vidbtn = p.loadImage('assets/img/vidbtn.png');
    let vidform;
    let vid_thumb = p.loadImage('assets/vid_thumb.png', v => {
        draw_video_form();
        draw_vidform();
        p.windowResized();
    });
    let channel = p.loadImage('assets/img/kakao_channel.png', v => {
        draw_kakao();
    });
    let isVideoClicked = false;
    let blackPanel;
    let blackPanelFade = 0;
    let blackPanelLerpSize = 0;
    p.setup = () => {
        // Kakao.init('a90cad7d919384f5775bfd91b0a8a3f5');
        // Kakao.API.request({
        //     url: '/v1/api/talk/channels',
        //     success: function (response) {
        //         console.warn('좋은결과:', response);
        //     },
        //     fail: function (error) {
        //         console.warn('검토결과: ', error);
        //     }
        // });
        const tmp = document.getElementById('InteractionPanel');
        let panel = p.createCanvas(tmp.clientWidth, tmp.clientHeight);
        panel.parent(tmp);
        calc_dday();
        blackPanel = p.createGraphics(50, 50);
        blackPanel.textSize(20);
        blackPanel.textAlign(p.CENTER, p.CENTER);
        blackPanel.noStroke();
        blackPanel.noLoop();
        vidform = p.createGraphics(40, 40);
        vidform.imageMode(p.CENTER);
        vidform.noLoop();
        draw_vidform();
        p.rectMode(p.CENTER);
        p.imageMode(p.CENTER);
        p.textAlign(p.LEFT, p.TOP);
        p.noStroke();
        p.noLoop();
        setInterval(() => {
            calc_dday();
        }, 1000);
        p.windowResized();
        setTimeout(() => {
            const LOADING = document.getElementById('p5_loading');
            if (LOADING)
                LOADING.remove();
        }, 1500);
    }
    /** d-day 계산하기 */
    let calc_dday = () => {
        let targetDate = new Date(TargetDate.year, TargetDate.month - 1, TargetDate.day);
        let _today = new Date();
        let _dist = targetDate.getTime() - _today.getTime();
        const DAY = 1000 * 60 * 60 * 24;
        let tmp = p.ceil(_dist / DAY);
        if (DdayCount != tmp) {
            DdayCount = tmp;
            p.redraw();
        }
    }
    p.draw = () => {
        p.clear(255, 255, 255);
        draw_panel();
        draw_title();
        draw_video_form();
        // draw_dday();
        // draw_black_and_hole();
        draw_kakao();
        // for (let i = effects.length - 1; i >= 0; i--) {
        //     p.push();
        //     p.translate(p.width - p.lerp(50, 60, ratioLerp), p.lerp(44, 57, ratioLerp));
        //     effects[i].display();
        //     p.pop();
        //     if (effects[i].lifetime < 0) {
        //         effects[i].remove();
        //         effects.splice(i, 1);
        //         if (!effects.length) {
        //             p.noLoop();
        //             setTimeout(() => {
        //                 p.redraw();
        //             }, 0);
        //         }
        //     }
        // }
    }
    let draw_black_and_hole = () => {
        if (!isVideoClicked) return;
        blackPanel.clear(255, 255, 255);
        blackPanel.push();
        blackPanelFade += blackPanelLerpSize;
        blackPanel.fill(0, blackPanelFade);
        blackPanel.rect(2, 2, p.width - 4, p.height, 8);
        blackPanel.fill(255, blackPanelFade);
        blackPanel.text('조금만 더 기다려주세요 :)', blackPanel.width / 2, blackPanel.height / 2 - 24);
        blackPanel.pop();
        p.image(blackPanel, p.width / 2, p.height / 2);
    }
    /** 가장 아래 판 그리기 */
    let draw_panel = () => {
        p.push();
        p.fill(83, 67, 50);
        p.rect(p.width / 2, p.height / 2, p.width - 4, p.height - 4, 8);
        p.fill(170, 150, 130);
        p.rect(p.width / 2, p.height / 2 + 4, p.width - 4, p.height - 8, 8);
        p.pop();
    }
    let draw_title = () => {
        p.push();
        p.translate(p.lerp(20, 30, ratioLerp), p.lerp(-6, 10, ratioLerp));
        p.fill(255);
        p.textAlign(p.LEFT, p.BOTTOM);
        p.textStyle(p.BOLD);
        p.textSize(p.lerp(18, 28, ratioLerp));
        p.text('뮤직비디오', 0, 50);
        p.translate(0, 36);
        p.textAlign(p.LEFT, p.CENTER);
        p.textSize(p.lerp(12, 18, ratioLerp));
        p.fill(255);
        p.text(p.nf(TargetDate.year, 4) + '/'
            + p.nf(TargetDate.month, 2) + '/'
            + p.nf(TargetDate.day, 2), 0, p.lerp(24, 28, ratioLerp));
        p.pop();
    }
    let draw_dday = () => {
        if (DdayCount < 0) return;
        p.push();
        p.translate(p.width / 2 + p.lerp(10, 0, p.constrain(ratioLerp * 5, 0, 1)), p.lerp(44, 57, ratioLerp));
        p.scale(p.lerp(.85, 1, ratioLerp));
        p.fill(255, 75);
        p.stroke(255);
        p.rect(0, 0, p.lerp(90, 100, ratioLerp), p.lerp(34, 40, ratioLerp), 20);
        p.fill(255);
        p.noStroke();
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(ddayFontSize);
        p.textStyle(p.BOLD);
        if (DdayCount > 0)
            p.text('공개 D-' + DdayCount, 0, 1);
        else if (DdayCount == 0)
            p.text('공개 D-Day', 0, 1);
        else p.text('Youtube 보기', 0, 1);
        p.pop();
    }
    let draw_kakao = () => {
        // 카카오톡 링크
        p.push();
        p.translate(p.width - p.lerp(50, 60, ratioLerp), p.lerp(44, 57, ratioLerp));
        p.fill(255, 255, 0);
        p.image(channel, 0, 0);
        p.pop();
    }
    /** 비디오 폼 생성 */
    let draw_video_form = () => {
        p.push();
        p.translate(p.width / 2, p.height / 2 + p.lerp(30, 30, ratioLerp));
        if (navigator.userAgent.includes("Mac") || navigator.userAgent.includes("iOS"))
            p.image(vid_thumb, 0, 0, p.width - p.lerp(40, 60, ratioLerp), (p.width - p.lerp(40, 60, ratioLerp)) * .5625);
        else p.image(vidform, 0, 0);
        p.image(vidbtn, 0, 0); // 비디오 재생 버튼
        p.pop();
    }
    /** 비디오 배경 이미지 조정 */
    let draw_vidform = () => {
        if (!vidform) return;
        vidform.resizeCanvas(p.width - p.lerp(40, 60, ratioLerp), (p.width - p.lerp(40, 60, ratioLerp)) * .5625);
        vidform.background(0);
        let _height = vidform.height;
        let _width = vid_thumb.width / vid_thumb.height * vidform.height;
        vidform.push();
        vidform.translate(vidform.width / 2, vidform.height / 2);
        vidform.image(vid_thumb, 0, 0, _width, _height);
        vidform.pop();
        vidform.redraw();
    }
    var MOUSE_STATUS = {
        NONE: 'NONE',
        BTN_HOVER: 'BTN_HOVER', // 비디오 버튼류
        BTN_CLICKED: 'BTN_CLICKED',
        LINK_HOVER: 'LINK_HOVER', // 카카오 링크류
        LINK_CLICKED: 'LINK_CLICKED'
    }
    let mouse_status = MOUSE_STATUS.NONE;
    p.mouseMoved = () => {
        let videoBtnCenter = p.createVector(p.width / 2, p.height / 2 + 40);
        let mousePos = p.createVector(p.mouseX, p.mouseY);
        let check = false;
        if (videoBtnCenter.dist(mousePos) < 50) {
            // 비디오 버튼에 호버
            mouse_status = MOUSE_STATUS.BTN_HOVER;
            check = true;
        }
        if (isKakaoPosition()) {
            mouse_status = MOUSE_STATUS.LINK_HOVER;
            check = true;
        }
        if (!check)
            mouse_status = MOUSE_STATUS.NONE;
    }
    p.mousePressed = () => {
        if (mouse_status == MOUSE_STATUS.BTN_HOVER) {
            mouse_status = MOUSE_STATUS.BTN_CLICKED;
        } // ^ 비디오 버튼 눌림
        if (mouse_status == MOUSE_STATUS.LINK_HOVER) {
            mouse_status = MOUSE_STATUS.LINK_CLICKED;
        } // ^ 카카오버튼 눌림
    }
    p.mouseClicked = () => {
        if (isTouched) return;
        if (mouse_status == MOUSE_STATUS.BTN_CLICKED) {
            videoClicked();
        } // ^ 비디오 버튼 클릭
        if (mouse_status == MOUSE_STATUS.LINK_CLICKED) {
            kakaoClicked();
        } // ^ 카카오 버튼 클릭
    }
    let isTouched = false;
    p.touchStarted = () => {
        isTouched = true;
        let videoBtnCenter = p.createVector(p.width / 2, p.height / 2 + 40);
        let mousePos = p.createVector(p.mouseX, p.mouseY);
        let check = false;
        if (videoBtnCenter.dist(mousePos) < 50) {
            videoClicked();
        }
        if (isKakaoPosition()) {
            kakaoClicked();
        }
        if (!check)
            mouse_status = MOUSE_STATUS.NONE;
    }
    /** 비디오 클릭시 액션: 이펙트 넣기 */
    let videoClicked = () => {
        location.href = 'https://www.youtube.com/watch?v=qFlB_nf0OlE';
    }
    /** 카카오 클릭시 액션: 채널 추가 */
    let kakaoClicked = () => {
        // Kakao.Channel.addChannel({
        //     channelPublicId: '_pxnrtb',
        // });
        window.location.href = 'https://pf.kakao.com/_pxnrtb';
        mouse_status = MOUSE_STATUS.NONE;
    }
    let isKakaoPosition = () => {
        if (p.mouseX > p.width - p.lerp(50, 60, ratioLerp) - 30 && p.mouseX < p.width - p.lerp(50, 60, ratioLerp) + 30
            && p.mouseY > 50 + p.lerp(44, 57, ratioLerp) - 60 && p.mouseY < 50 + p.lerp(44, 57, ratioLerp) - 20)
            return true;
        else return false;
    }
    p.touchEnded = () => {
        setTimeout(() => {
            isTouched = false;
            mouse_status = MOUSE_STATUS.NONE;
        }, 100);
    }
    p.windowResized = () => {
        const tmp = document.getElementById('cover_img');
        ratioLerp = p.map(tmp.clientWidth, 320, 646, 0, 1, true);
        p.resizeCanvas(tmp.clientWidth, p.lerp(tmp.clientWidth * .88, tmp.clientWidth * .75, ratioLerp));
        blackPanel.resizeCanvas(p.width, p.height);
        draw_vidform();
        p.redraw();
    }
}
new p5(interPanel);