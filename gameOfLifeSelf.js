const DEATH_CELL = `<div style="width: 10px ; height: 10px ; background: white; border: 1px solid gray; float: left" ></div>`;
const LIVE_CELL = `<div style="width: 10px ; height: 10px ; background: black; border: 1px solid gray; float: left" ></div>`;
const LIVE = 1;
const DEATH = 0;

function setupLifeData() {
    let life = [];
    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
    life.push([0, 1, 0, 1, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 1, 1, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    return life;
}

function setupLife(life) {
    let html = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (life[i][j] === 0) {
                html += DEATH_CELL;
            } else {
                html += LIVE_CELL;
            }
        }

    }
    return html;
}

function myNeighbor(oldLive, i, j) {
    let numberOfNeighbor = 0;
    let len = 10;
    let topAxis = i - 1 >= 0 ? i - 1 : 9;
    let botAxis = i + 1 < len ? i + 1 : 0;
    let leftAxis = j - 1 >= 0 ? j - 1 : 9;
    let rightAxis = j + 1 < len ? j + 1 : 0;

    numberOfNeighbor
        = oldLive[topAxis][leftAxis] + oldLive[topAxis][j] + oldLive[topAxis][rightAxis]
        + oldLive[i][leftAxis] + oldLive[i][rightAxis]
        + oldLive[botAxis][leftAxis] + oldLive[botAxis][j] + oldLive[botAxis][rightAxis];

    return numberOfNeighbor;
}

function isDeath(me) {
    return me === DEATH;
}

function isLive(me) {
    return me === LIVE;
}

function nextTheLive(oldLive) {
    let nextLive = setupLifeData();

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let me = oldLive[i][j];
            let numberOfNeighbor = myNeighbor(oldLive, i, j);
            if (isLive(me) && (numberOfNeighbor === 2 || numberOfNeighbor === 3)) {
                nextLive[i][j] = LIVE;
            } else if (isDeath(me) && numberOfNeighbor === 3) {
                nextLive[i][j] = LIVE;
            } else {
                nextLive[i][j] = DEATH;
            }
        }
    }
    return nextLive;
}

$(document).ready(function () {
    let lifeData = setupLifeData();
    document.getElementById("demo").innerHTML = setupLife(lifeData);

    setInterval(function () {
        let oldLife = lifeData;
        let newLife = nextTheLive(oldLife);
        lifeData = newLife;
        document.getElementById("demo").innerHTML = setupLife(lifeData);
    }, 1000)
});



