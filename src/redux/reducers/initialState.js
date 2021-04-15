const initialState = {
    auth: {
        currentEmployee: {},
        isAuthenticated: false,
        error: false,
        errorMessage: ''
    },
    cities: [],
    customers: [],
    filteredCustomersKeys:{},
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
    filteredEmployeesKeys:{},
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
    filteredPackagesKeys:{},
    trackedPackage: {},
    trackedPackageByCustomer: [],
    cart: [],
    payments: [],
    selectedPayments: {
        lastSelectedPayment: {},
        allSelectedPayments: [],
        toggledClearRows: false
    },
    paymentsReport:[],
    couriers: [],
    selectedCouriers: {
        lastSelectedCourier: {},
        allSelectedCouriers: [],
        toggledClearRows: false
    },
    filteredCouriersKeys:{},
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