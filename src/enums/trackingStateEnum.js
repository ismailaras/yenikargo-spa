export const TrackingStateEnum = Object.freeze({
    Declared: 0,
    OnWay: 1,
    Sorting: 2,
    Arrived: 3,
    ReadyToPickUp: 4,
    Delivered: 5
})

export const iterTrackingStates = () => {
    const list = [];
    for (let trackingState in TrackingStateEnum) {
        list.push({name: trackingState,value: TrackingStateEnum[trackingState]})
    }
    return list;
}
