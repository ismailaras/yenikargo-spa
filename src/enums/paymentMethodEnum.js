export const TrackingStateEnum = Object.freeze({
    Declared: 0,
    OnWay: 1,
    Arrived: 2,
    ReadyToPickUp: 3,
    Delivered: 4
})

export const iterTrackingStates = () => {
    const list = [];
    for (let trackingState in TrackingStateEnum) {
        list.push({name: trackingState,value: TrackingStateEnum[trackingState]})
    }
    return list;
}
