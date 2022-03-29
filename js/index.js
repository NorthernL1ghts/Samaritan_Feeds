/* Loading wrapper */
let wrapper = {
    init: (stage) => {
        if (!stage) stage = 1;
        switch (stage) {
            case 1:
                wrapper.progress(() => {
                    wrapper.init(2);
                });
                break;
            case 2:
                wrapper.status('connection established', () => {
                    wrapper.init(3);
                });
                break;
            case 3:
                wrapper.load(() => {
                    wrapper.init(4);
                });
                break;
            case 4:
                marker.solid();
                executive.init();
                system.init();
                break;
        }
    },
    progress: (callback) => {
        setTimeout(() => {
            let i = 0;
            let a = ['DOD', 'FBI', 'CIA', 'NSA', 'DEA', 'ECHELON', 'DGSI', 'DGSE', 'MI6', 'GCHQ', 'FSB', 'SVR'];
            let b = ['PREPROCESSING', 'NEURAL NETS', 'PATTERN RECOGNITION', 'MEMORY ASSIMILATION', 'MACHINE LEARNING', 'EVOLUTIONARY COMPUTATION', 'RATIONAL AGENTS', 'COGNITIVE ARCHITECTURES', 'HEURISTICS', 'ALGORITHMIC ENGINES', 'FLEXIBLE PLANNING', 'SOCIAL ENGINEERING', 'AUTONOMOUS IMPROVEMENT'];
            let n = parseInt(100 / (a.length + b.length));
            let p = 0;
            let P = setInterval(() => {
                if (p < 100) {
                    p++;
                    document.querySelector('#progress .bar').style.width = p + '%';
                    if (p % n === 0) {
                        if (i < (a.length + b.length)) {
                            document.querySelector('#progress .details').textContent = a[i] ? 'ASSIMILATING DATA : ' + a[i] : 'EXECUTIVE SYSTEMS : ' + b[i - a.length];
                            i++;
                        } else
                            document.querySelector('#progress .details').textContent = release.version;
                    }
                } else {
                    clearInterval(P);
                    setTimeout(() => {
                        document.querySelector('#progress').style.display = 'none';
                        setTimeout(() => {
                            callback();
                        }, 75);
                    }, 500);
                }
            }, 25);
        }, 250);
    },
    status: (text, callback) => {
        document.querySelector('#status').textContent = text;
        document.querySelector('#status').style.opacity = '1';
        setTimeout(() => {
            document.querySelector('#status').style.opacity = '0';
            setTimeout(() => {
                callback();
            }, 500);
        }, 1000);
    },
    load: (callback) => {
        document.querySelectorAll('.LW').forEach((el) => {
            el.classList.add('loaded');
        });
        setTimeout(() => {
            callback();
        }, 2000);
    },
    unload: (callback) => {
        document.querySelectorAll('.LW').forEach((el) => {
            el.classList.remove('loaded');
        });
        setTimeout(() => {
            callback();
        }, 600);
    },
}

let executive = {
    classes: [],
    init: () => {
        document.querySelectorAll('#executive .item').forEach((item) => {
            if (item.classList.length > 1) {
                executive.classes.push(item.classList[1]);
                item.classList.remove(item.classList[1]);
            }
        });
        executive.blink();
    },
    blink: () => {
        let f = (t) => {
            setTimeout(() => {
                let n = Math.floor(Math.random() * (executive.classes.length - 1)) + 0;
                try {
                    document.querySelectorAll('#executive .item')[n].classList.add(executive.classes[n]);
                } catch (e) {
                    return;
                }
                setTimeout(() => {
                    try {
                        document.querySelectorAll('#executive .item')[n].classList.remove(executive.classes[n]);
                    } catch (e) {}
                }, 250);
                let t = Math.floor(Math.random() * 4000) + 100;
                f(t);
            }, t);
        };
        for (let i = 0; i < 2; i++) {
            f(0);
        }
    }
};

let system = {
    classes: [],
    init: () => {
        document.querySelectorAll('#system .item').forEach((item) => {
            if (item.classList.length > 1) {
                system.classes.push(item.classList[1]);
                item.classList.remove(item.classList[1]);
            }
        });
        system.blink();
    },
    blink: () => {
        let f = (t) => {
            setTimeout(() => {
                let n = Math.floor(Math.random() * (system.classes.length - 1)) + 0;
                try {
                    document.querySelectorAll('#system .item')[n].classList.add(system.classes[n]);
                } catch (e) {
                    return;
                }
                setTimeout(() => {
                    try {
                        document.querySelectorAll('#system .item')[n].classList.remove(system.classes[n]);
                    } catch (e) {}
                }, 250);
                let t = Math.floor(Math.random() * 4000) + 100;
                f(t);
            }, t);
        };
        for (let i = 0; i < 2; i++) {
            f(0);
        }
    }
};