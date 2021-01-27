const initialState = {
    auth: {
        currentEmployee: {},
        isAuthenticated: false,
        error: false,
        errorMessage: ''
    },
    customers: [],
    selectedCustomers: {
        lastSelectedCustomer: {},
        allSelectedCustomers: [],
        toggledClearRows: false
    },
    employees: [],
    selectedEmployees: {
        lastSelectedEmployee: {},
        allSelectedEmployees: [],
        toggledClearRows: false
    },
    setCustomer: {
        senderCustomer: {},
        receiverCustomer: {}
    },
    packages: [],
    selectedPackages: {
        lastSelectedPackage: {},
        allSelectedPackages: [],
        toggledClearRows: false
    },
    cart: [],
    payments: [],
    couriers: [],
    selectedCouriers: {
        lastSelectedCourier: {},
        allSelectedCouriers: [],
        toggledClearRows: false
    },
    stations: [],
    selectedStations: {
        lastSelectedStation: {},
        allSelectedStations: [],
        toggledClearRows: false
    },
    allExtraSelling: [],
    selectedAllExtraSelling: {
        lastSelectedExtraSelling: {},
        allSelectedAllExtraSelling: [],
        toggledClearRows: false
    },
}

export default initialState;