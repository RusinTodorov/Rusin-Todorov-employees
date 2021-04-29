function reduceData(data) {
    data = data.map(arr => {
        const [arr1, arr2] = arr;
        const NEW_ARRAY = [];

        NEW_ARRAY.push(calculateMilliseconds(arr));
        NEW_ARRAY.push(arr1[0]);
        NEW_ARRAY.push(arr2[0]);
        NEW_ARRAY.push(arr1[1]);

        return NEW_ARRAY;
    });

    data = findAndCombinedDuplicats(data);

    return data;
}

function findAndCombinedDuplicats(data) {
    let arr = [];

    for (let i = 0; i < data.length - 1; i++) {

        for (let j = i + 1; j < data.length; j++) {

            if (data[i].includes(data[j][1]) && data[i].includes(data[j][2])) {
                arr.push([i, j]);
            }

        }

    }

    if (arr.length === 0) {
        data.sort((a, b) => b[0] - a[0]);

        return data;
    } else {

        arr.forEach(([i, j]) => {
            const FIRST_ARRAY = data[i].slice();
            const SECOND_ARRAY = data[j].slice();
            data.splice(i, 1, [0]);
            data.splice(j, 1, [0]);
            
            const NEW_ARRAY = [];

            const MILLISECONDS_INDEX = 0;
            const FIRST_EMPLOYEE_INDEX = 1;
            const SECOND_EMPLOYEE_INDEX = 2;
            const PROJECT_ID_INDEX = 3;

            NEW_ARRAY.push(FIRST_ARRAY[MILLISECONDS_INDEX] + SECOND_ARRAY[MILLISECONDS_INDEX]);
            NEW_ARRAY.push(FIRST_ARRAY[FIRST_EMPLOYEE_INDEX]);
            NEW_ARRAY.push(FIRST_ARRAY[SECOND_EMPLOYEE_INDEX]);
            NEW_ARRAY.push(FIRST_ARRAY[PROJECT_ID_INDEX]);
            NEW_ARRAY[PROJECT_ID_INDEX] += ', ' + SECOND_ARRAY[PROJECT_ID_INDEX];

            data.unshift(NEW_ARRAY);
            data = data.filter(arr => arr[0] !== 0);
        });

        return findAndCombinedDuplicats(data);
    }
}