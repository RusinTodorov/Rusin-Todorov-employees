function finalResults(data) {
    const ONE_DAY = 24 * 60 * 60 * 1000;
    /* checking if there're more then one first places
     and converting milliseconds into days */
    data = data.filter(arr => data[0][0] === arr[0])
        .map(arr => {
            arr[0] = Math.floor(arr[0] / ONE_DAY);

            return arr;
        });

    return data;
}