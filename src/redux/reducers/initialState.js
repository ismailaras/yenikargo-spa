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
    customersByNumber: [],
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
    filteredPackages:[],
    trackedPackage: {},
    trackedPackageByCustomer: [],
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
    tariffs: [],
    selectedTariffs: {
        lastSelectedTariff: {},
        allSelectedTariffs: [],
        toggledClearRows: false
    },
    setTariff:[]
}

export default initialState;