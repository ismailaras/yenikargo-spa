const initialState = {
    auth: {
        currentEmployee: {},
        isAuthenticated: false,
        error: false,
        errorMessage: ''
    },
    cities: [],
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
    trackedPackage: {},
    cart: [],
    payments: [],
    selectedPayments: {
        lastSelectedPayment: {},
        allSelectedPayments: [],
        toggledClearRows: false
    },
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