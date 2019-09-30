function selectionSort(array) {
    let startIdx = 0;
    while (startIdx < array.length - 1) {
        let smallestIdx = startIdx;
        for (let i = startIdx + 1; i < array.length; i++) {
            if (array[smallestIdx] > array[i]) smallestIdx = i
        }

        let swap = array[smallestIdx]
        array[smallestIdx] = array[startIdx]
        array[startIdx] = swap
        startIdx++
    }
    return array
}