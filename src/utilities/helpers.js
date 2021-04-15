import jwtDecode from "jwt-decode";

export const getEmployeeCredentialsFromToken = () => {
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwtDecode(token);
  return {
    _id: decodedToken.identity,
    password: decodedToken.user_claims.password,
  };
};

export const notEmpty = (data) => {
  const type = Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  switch (type) {
    case "null":
    case "undefined":
      return false;
    case "object":
      return Object.keys(data).length > 0;
    case "array":
    case "string":
      return data !== "undefined" && data !== "null" && data.length > 0;
    case "boolean":
      return !!data;
    default:
      return true;
  }
};

export const formatDate = (date) =>
  new Date(date).toLocaleString("az-AZ", { timeZone: "Asia/Baku" });

export const formatPercentage = (percentage) => `%${percentage * 100}`;

export const formatBool = (data) => (data === true ? "Bəli" : "Xeyir");

export const formatPrice = (currency) =>
  new Intl.NumberFormat("az-AZ", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const getStateNameInAzerbaijani = (state) => {
  switch (state) {
    case "Added":
      return "Əlavə edildi";
    case "Updated":
      return "Tənzimləndi";
    case "Deleted":
      return "Silindi";
    default:
      return state;
  }
};

export const getStatusNameInAzerbaijani = (status) => {
  switch (status) {
    case "Declared":
      return "Bəyan olundu";
    case "ReadyToSorting":
      return "Çeşidləməyə göndərildi";
    case "Sorting":
      return "Çeşidlənir";
    case "OnWay":
      return "Anbardan yola çıxdı";
    case "Arrived":
      return "Filiala çatdı";
    case "Delivered":
      return "Çatdırıldı";
    default:
      return status;
  }
};

export const getCostsFromCartByPaymentSort = (cart, paymentSort) => {
  switch (paymentSort) {
    case "ExtraSelling":
      return;
    default:
      return cart;
  }
};

const mobile_number= [/\d/, /\d/,/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
const exp_date = [/\d/, /\d/, "/", /\d/, /\d/];
const card_number = [/\d/, /\d/,/\d/, /\d/, /\d/, /\d/,/\d/, /\d/,/\d/, /\d/,/\d/, /\d/, /\d/, /\d/,/\d/, /\d/];
const birthdate = [/\d/, /\d/,/\d/, /\d/,"-",/\d/, /\d/,"-",/\d/, /\d/];

export const selectMaskInputValue = (mask) => {
  switch (mask) {
    case "exp_date":
      return exp_date;
    case "card_number":
      return card_number;
    case "mobile_number":
      return mobile_number;
    case "birthdate":
      return birthdate;
    default:
      return "";
  }
};
