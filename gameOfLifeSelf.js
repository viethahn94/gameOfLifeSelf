var lifes = [];

lifes.push([1,0,0,1,0,0,1,1,0,1]);
lifes.push([0,1,0,1,0,1,1,0,0,1]);
lifes.push([1,1,1,0,1,0,0,0,1,1]);
lifes.push([1,0,0,1,1,1,1,1,1,1]);
lifes.push([1,0,0,0,0,1,1,0,0,1]);
lifes.push([1,0,0,1,0,0,1,0,0,1]);
lifes.push([0,1,0,1,0,1,1,1,0,1]);
lifes.push([1,1,1,0,1,0,0,1,1,1]);
lifes.push([1,0,0,1,1,1,1,1,1,1]);
lifes.push([1,0,0,0,0,1,1,0,0,1]);



let html = '';

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (lifes[i][j] == 0){
            // viết vài dòng vào đây để return cái con củ lìn div màu trắng ở thẻ file html nhưng đm nó éo biết làm T_T
            html+=`<div style="width: 10px ; height: 10px ; background: white; border: 1px solid gray; float: left" ></div>`;
        }
        else {
            // viết vài dòng vào đây để return cái con củ lìn div màu đen ở thẻ file html nhưng đm nó éo biết làm T_T
            html+=`<div style="width: 10px ; height: 10px ; background: black; border: 1px solid gray; float: left" ></div>`;
        }
    }
}

function draw() {
    let next = lifes;
    for (let i = 0; i < lifes.length; i++) {
        for (let j = 0; j < lifes[0].length; j++) {

            if (i == 0 || i == lifes.length -1 ||j == 0 || j == lifes[0].length -1 ){
                next[i][j] = lifes[i][j];
            }
            else {
            let state = lifes[i][j];
            let neighbors = countLiveNeighbors(lifes, i, j);
                if (state == 0 && neighbors == 3) {
                next[i][j] =1;
                } else if(state == 1 && (neighbors > 3 || neighbors < 2)){
                next[i][j] =0;
                } else{
                next[i][j] = state;
                }
            }
        }

    }
    lifes = next;
}

// Đếm hàng xóm
function countLiveNeighbors(lifes,x,y) {
    let sum =0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let col = x+i;
            let row = y+j;
            sum += lifes[col][row];
        }
    }
    sum -= lifes[x][y];
    return sum;
}


