function findCouples(data) {
    const PROJECT_ID_LIST = [];
    const COUPLES = {};

    data.forEach(arr => {
        const PROJECT_ID = arr[1];

        if (PROJECT_ID_LIST.includes(PROJECT_ID)) {
            COUPLES[PROJECT_ID].push(arr);
        } else {
            PROJECT_ID_LIST.push(PROJECT_ID);
            COUPLES[PROJECT_ID] = [arr];
        }

    });

    data = Object.values(COUPLES).filter(arr => arr.length > 1);
    data = getAllPossibleCouples(data);

    return data;
}

function getAllPossibleCouples(data) {
    const RESULT = [];

    data.forEach(arr => {

        for (let i = 0; i < arr.length - 1; i++) {

            for (let j = i + 1; j < arr.length; j++) {
                const NEW_ARRAY = [];

                NEW_ARRAY.push(arr[i]);
                NEW_ARRAY.push(arr[j]);
                RESULT.push(NEW_ARRAY);
            }

        }

    });
    
    if (RESULT.length > 0) {

        return RESULT;
    }

    return 'Sorry, no couples have been found!!!';
}