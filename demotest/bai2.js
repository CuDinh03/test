//bai 2
let x = +prompt('Nhap so nguyen x');
let index = 2;
let arr = [];
let n = +prompt("nhap so phan tu co trong mang:");

function insertNumberToArray(n) {
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt('Nhap gia tri tai vi tri' + i + ": ");
    }
    if (arr[index] < 0 || arr[index > arr.length]) {
    return arr;
    } else {
        let newArr = new Array(arr.length + 1);
        for (let i = 0; i < n; i++) {
            if (i < index) {
                newArr[i] = arr[i];
            } else if (i === index) {
                newArr[i] = x;
            } else {
                newArr[i] = arr[i - 1];
            }
        }
        return newArr;
    }
}

alert('Ket qua: ' + insertNumberToArray(n));