export const TrackingStateEnum = Object.freeze({
    Declared: 0,
    ReadyToSorting: 1,
    Sorting: 2,
    OnWay: 3,
    Arrived: 4,
    Delivered: 5
})

export const iterTrackingStates = () => {
    const list = [];
    for (let trackingState in TrackingStateEnum) {
        list.push({name: trackingState,value: TrackingStateEnum[trackingState]})
    }
    return list;
}
