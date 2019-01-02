
export function createMatrix(lines, columns) {
    let res = [];
    for (let i = 0; i < lines; i++) {
        let line = [];
        for (let j = 0; j < columns; j++) {
            line.push(0.0);
        }
        res.push(line);
    }
    return res;
}

export function matrixCopy(matrix) {
    let lines = matrix.length;
    let columns = matrix[0].length;

    let res = createMatrix(lines, columns);

    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            res[i][j] = matrix[i][j];
        }
    }

    return res;
}

export function matrixEqual(matrix1, matrix2) {
    let lines = matrix1.length;
    let columns = matrix1[0].length;

    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            if (Math.abs(matrix1[i][j] - matrix2[i][j]) > 0.0001) {
                return false;
            }
        }
    }

    return true;
}

export function matrixMult(matrix1, matrix2) {
    let lines = matrix1.length;
    let columns = matrix2[0].length;
    let res = createMatrix(lines, columns);

    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            for (let k = 0; k < matrix2.length; k++) {
                res[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return res;
}

export function matrixMultElemWise(matrix1, matrix2) {
    let lines = matrix1.length;
    let columns = matrix2[0].length;
    let res = createMatrix(lines, columns);

    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            res[i][j] = matrix1[i][j] * matrix2[i][j];
        }
    }

    return res;
}

export function matrixMultWithFactor(factor, matrix) {
    let lines = matrix.length;
    let columns = matrix[0].length;
    let res = createMatrix(lines, columns);

    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            res[i][j] = factor * matrix[i][j];
        }
    }

    return res;
}

export function matrixSub(matrix1, matrix2) {
    let lines = matrix1.length;
    let columns = matrix2[0].length;
    let res = createMatrix(lines, columns);

    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            res[i][j] = matrix1[i][j] - matrix2[i][j];
        }
    }

    return res;
}

export function matrixAdd(matrix1, matrix2) {
    let lines = matrix1.length;
    let columns = matrix2[0].length;
    let res = createMatrix(lines, columns);

    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            res[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return res;
}

export function testMatrix() {
    let m1 = [
        [1, 2],
        [3, 4]
    ];
    let m2 = [
        [2, 0],
        [1, 2]
    ];

    let res = mult(m1, m2);
    console.table(res);
}