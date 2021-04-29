function correctingNulls(data, format) {
    data = data.map(arr => {
        const DATE_FROM = arr[2];
        const DATE_END = arr[3];

        if (DATE_FROM === 'NULL' || DATE_FROM === null) {
            arr[2] = turnNullInDate(format);
        }

        if (DATE_END === 'NULL' || DATE_END === null) {
            arr[3] = turnNullInDate(format);
        }

        return arr;
    });

    return data;
}