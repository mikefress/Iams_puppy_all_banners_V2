const easing = 'Power1.easeInOut';
let startTime;
var tl;
const frame1_duration = 3.5;
const frame2_duration = 3;
const ctaDelay = 0.5;
const frame2_start_time = 3.75;
const frame3_start_time = 8;
const text1AnimationDuration = 0.75;
const text2AnimationDuration = 0.75;
const iconAnimationDuration = 0.75;
const dogAnimationDuration = 0.5;
const logoAnimationDuration = 0.5;
const dogDelay = 0;
const logoDelay = 0;
function init() {
    startTime = new Date();
    tl = new TimelineMax({ onComplete: endTime });
    animate();
}
function animate() {
    tl.set(['#main_content'], {
        autoAlpha: 1,
        rotation: 0.1,
        force3D: true
    });
    tl.set([
        '#text1',
        '#text2',
        '#logo_endframe',
        '#icon',
        '#packshot',
        '#copyright',
        '#cta'
    ], { autoAlpha: 0 });
    tl.set('#text1', { y: -300 });
    tl.addLabel('startFrame1', 0);
    tl.to('#text1', text1AnimationDuration, {
        y: 0,
        autoAlpha: 1,
        ease: easing
    }, 'startFrame1');
    tl.addLabel('endFrame1', frame1_duration);
    tl.to('#text1', text1AnimationDuration, {
        y: 300,
        autoAlpha: 0,
        ease: easing
    }, 'endFrame1');
    tl.addLabel('startFrame2', frame2_start_time);
    tl.to([
        '#text2',
        '#logo_endframe',
        '#icon',
        '#packshot',
        '#cta'
    ], 0.01, { autoAlpha: 1 }, 'startFrame2-=0.02');
    tl.from('#icon', iconAnimationDuration, {
        y: -300,
        autoAlpha: 0,
        ease: easing
    }, `startFrame2`);
    tl.from('#text2', text2AnimationDuration, {
        y: -250,
        autoAlpha: 0,
        ease: easing
    }, 'startFrame2');
    tl.addLabel('endFrame2', `+=${ frame2_duration }`);
    tl.to('#icon', iconAnimationDuration, {
        y: 300,
        autoAlpha: 0,
        ease: easing
    }, `endFrame2`);
    tl.to('#text2', text2AnimationDuration, {
        y: 300,
        autoAlpha: 0,
        ease: easing
    }, 'endFrame2');
    tl.to('#logo', logoAnimationDuration, {
        autoAlpha: 0,
        ease: easing
    }, `endFrame2+=${ logoDelay }`);
    tl.to('#dog', dogAnimationDuration, {
        autoAlpha: 0,
        ease: easing
    }, `endFrame2+=${ dogDelay }`);
    tl.addLabel('frame3', frame3_start_time);
    tl.from('#packshot', 0.75, {
        y: -250,
        ease: easing
    }, 'frame3');
    tl.from('#logo_endframe', 0.75, {
        y: -250,
        ease: easing
    }, 'frame3+=0.2');
    tl.from('#cta', 0.75, {
        y: -250,
        ease: easing
    }, `frame3+=0.2`);
    tl.to('#copyright', 0.75, {
        autoAlpha: 1,
        ease: easing
    }, `frame3+=1`);
    tl.to('#cta', 0.25, {
        scale: 1.05,
        ease: easing
    }, '+=0.4');
    tl.to('#cta', 0.25, {
        scale: 0.95,
        ease: easing
    }, '>');
    tl.to('#cta', 0.25, {
        scale: 1,
        ease: easing
    }, '>');
    addListeners();
}
function addListeners() {
    document.getElementById('default_exit').addEventListener('mouseover', cta_Over);
    document.getElementById('default_exit').addEventListener('mouseout', cta_Out);
}
function cta_Over() {
    TweenMax.to(['#cta'], 0.25, {
        scale: 1.05,
        ease: easing
    });
}
function cta_Out() {
    TweenMax.to(['#cta'], 0.25, {
        scale: 1,
        ease: easing
    });
}
function endTime() {
    var endTime = new Date();
    console.log('Animation duration: ' + (endTime - startTime) / 1000 + ' seconds');
}