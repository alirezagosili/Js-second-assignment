console.log("Design 1");

const design1 = (x) => {
    for (let i = 0; i <= x; i++) {
        let row = "";
        for (let j = 0; j < x - i; j++) {
            row = row + " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            row = row + "*";
        }
        console.log(row);
    }
    for (let i = x - 1; i >= 1; i--) {
        let row = "";
        for (let j = 0; j < x - i; j++) {
            row = row + " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            row += "*";
        }
        console.log(row);
    }
};
design1(4);
// ////////////////////////////////////////////////////////////////
console.log("Design 2");

const design2 = (x) => {
    for (let i = 0; i < x; i++) {
        let row = "";
        if (x - i > 1) {
            for (let j = 0; j < x - i; j++) {
                row = row + "*";
            }
            for (let k = 0; k < 2 * i; k++) {
                row = row + " ";
            }
            for (let j = 0; j < x - i; j++) {
                row = row + "*";
            }
            console.log(row);
        }
    }
    let lastRow = "";
    for (let l = 0; l < 2 * x; l++) {
        lastRow = lastRow + "*";
    }
    console.log(lastRow);
};

design2(5);

//////////////////////////////////////
console.log("Design 3");

const  design3 = () => {
    const rows = 3;
    const columns = 20;
    let design = "";

    for (let i = 0; i < rows; i++) {
        
        design = "";
        for (let j = 0; j < columns; j++) {
            if (i === 0) {
                if ((j >= 0 && j < 3) || (j >= 7 && j < 10) || (j >= 14 && j < 17)) {
                 design = design + "*";
                } else {
                 design = design + " ";
                }
            } else if (i === 1) {
             design = design + "*";
            } else if (i === 2) {
                if ((j >= 3 && j < 6) || (j >= 10 && j < 13) || (j >= 17 && j < 20)) {
                 design = design + "*";
                } else {
                 design = design + " ";
                }
            }
        }
        console.log(design);
    }
    // let repeatDesign = "";
    // const repeatTimes = 1;

    // for (let i = 0; i < repeatTimes; i++) {
    //     repeatDesign = repeatDesign + design;
    // }
    // return repeatDesign;
}

design3();