function convertArray(arr: any[]): any[] {
    const result: { [key: string]: any } = {};

    arr.forEach((item) => {
        const { date, ...rest } = item;

        if (!result[date]) {
            result[date] = { date };
        }

        Object.entries(rest).forEach(([key, value]) => {
            result[date][key] = value;
        });
    });

    return Object.values(result);
}

export const getAreaGraphData = (results: any) => {
    const summarizedData = [];

    if (results && results.MILD && results.MILD.weightDates) {
        summarizedData.push(
            ...results.MILD.weightDates.map((entry: any) => ({
                date: entry.date.slice(8, 10) + '/' + entry.date.slice(5, 7),
                Mild: Number(entry.weight),
            }))
        );
    }

    if (results && results.RECOMMENDED && results.RECOMMENDED.weightDates) {
        summarizedData.push(
            ...results.RECOMMENDED.weightDates.map((entry: any) => ({
                date: entry.date.slice(8, 10) + '/' + entry.date.slice(5, 7),
                Recommended: Number(entry.weight),
            }))
        );
    }

    if (results && results.EXTREME && results.EXTREME.weightDates) {
        summarizedData.push(
            ...results.EXTREME.weightDates.map((entry: any) => ({
                date: entry.date.slice(8, 10) + '/' + entry.date.slice(5, 7),
                Extreme: Number(entry.weight),
            }))
        );
    }

    return convertArray(summarizedData);
}