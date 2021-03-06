import * as Yup from "yup";

export const createOrUpdateCustomerFormValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("Ad daxil edilməlidir."),
  last_name: Yup.string().required("Soyad daxil edilməlidir."),
  bank_name: Yup.string(),
  bank_info: Yup.string(),
  mobile_number: Yup.string()
    .required("Mobil nömrə daxil edilməlidir.")
    .test(
      "len",
      "10 xanalı olmalıdır. (0505005050)",
      (val) => val && val.toString().length === 10
    ),
  password: Yup.string().required("Şifrə daxil edilməlidir."),
  discount: Yup.string()
    .test(
      "is_in_0_1",
      "0 ilə 1 arasında yazılmalıdır.",
      (val) => val && val >= 0 && val <= 1
    ),
  station_id: Yup.string().required("Filial seçilməlidir."),
  address: Yup.string().required("Ünvan daxil edilməlidir."),
  card_number: Yup.string(),
  exp_date: Yup.string()
});

export const createOrUpdateEmployeeFormValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("Ad daxil edilməlidir."),
  last_name: Yup.string().required("Soyad daxil edilməlidir."),
  mobile1: Yup.number().required("Telefon nömrəsi daxil edilməlidir."),
  mobile2: Yup.number(),
  address: Yup.string().required("Şifrə daxil edilməlidir."),
  identity2: Yup.string().required("Fin daxil edilməlidir."),
  birthdate: Yup.string().required("Doğum günü daxil edilməlidir."),
  password: Yup.string().required("Şifrə daxil edilməlidir."),
  station_id: Yup.string().required("Filial seçilməlidir."),
  employee_role: Yup.string().required("Rol seçilməlidir."),
});

export const createOrUpdatePackageFormValidationSchema = Yup.object().shape({
  weight: Yup.number().required("Çəki daxil edilməlidir."),
  amount: Yup.number().required("Daşınma haqqı hesablanmalıdır."),
  extra_amount: Yup.number().required("Əlavə daşınma haqqı hesablanmalıdır."),
  is_postpaid: Yup.boolean(),
  price: Yup.number().when("is_postpaid", {
    is: true,
    then: Yup.number().required("Qiymət daxil edilməlidir."),
    otherwise: Yup.number(),
  }),
  description: Yup.string().required("Bağlama tərkibi daxil edilməlidir."),
  quantity: Yup.number()
    .integer()
    .required("Ədəd daxil edilməlidir.")
    .test(
      "must_be_bigger_than_0",
      "0 dan çox olmalıdır.",
      (val) => val && val > 0
    ),
});

export const changePackageStateFormValidationSchema = Yup.object().shape({
  state: Yup.number().required("Status seçilməlidir."),
});

export const trackPackageFormValidationSchema = Yup.object().shape({
  id: Yup.number().required("Paket ID yazılmalıdır"),
});
export const trackPackageViaCustomerIDFormValidationSchema = Yup.object().shape({
  customer_id: Yup.number().required("Müştəri ID yazılmalıdır"),
});

export const signInFormValidationSchema = Yup.object().shape({
  _id: Yup.string().required("Kod daxil edilməlidir."),
  password: Yup.string().required("Şifrə daxil edilməlidir."),
});

export const findCustomersFormValidationSchema = Yup.object().shape({
  keyword: Yup.string()
    .required("Açar söz daxil edilməlidir.")
    .test(
      "len",
      "Açar söz ən az 3 xanalı olmalıdır.",
      (val) => val && val.toString().length >= 3
    ),
});

export const findEmployeesFormValidationSchema = Yup.object().shape({
  keyword: Yup.string()
    .required("Açar söz daxil edilməlidir.")
    .test(
      "len",
      "Açar söz ən az 3 xanalı olmalıdır.",
      (val) => val && val.toString().length >= 1
    ),
});

export const findPackagesFormValidationSchema = Yup.object().shape({
  keyword: Yup.mixed().required("Açar söz daxil edilməlidir."),
});

export const findPackagesAdvancedFormValidationSchema = Yup.object().shape({
  sender_station_id: Yup.mixed(),
  receiver_station_id: Yup.mixed(),
  states: Yup.mixed(),
});

export const findCouriersFormValidationSchema = Yup.object().shape({
  keyword: Yup.string().required("Açar söz daxil edilməlidir."),
});

export const findPaymentsFormValidationSchema = Yup.object().shape({
  keyword: Yup.string().required("Açar söz daxil edilməlidir."),
});

export const createOrUpdateCourierFormValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("Ad daxil edilməlidir."),
  last_name: Yup.string().required("Soyad daxil edilməlidir."),
  mobile_number: Yup.string()
    .required("Mobil nömrə daxil edilməlidir.")
    .test(
      "len",
      "10 xanalı olmalıdır. (0505005050)",
      (val) => val && val.toString().length === 10
    ),
  courier_cost: Yup.string().required("Məbləğ daxil edilməlidir."),
});

export const orderCourierFormValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("Ad daxil edilməlidir."),
  last_name: Yup.string().required("Soyad daxil edilməlidir."),
  address: Yup.string().required("Adres daxil edilməlidir."),
  note: Yup.string(),
  mobile1: Yup.string()
    .required("Mobil nömrə daxil edilməlidir.")
    .test(
      "len",
      "10 xanalı olmalıdır. (0505005050)",
      (val) => val && val.toString().length === 10
    ),
  mobile2: Yup.number(),
  city: Yup.string().required("Şəhər daxil edilməlidir."),
  estimated_weight: Yup.string().required("Çəki daxil edilməlidir."),
  // station_id: Yup.string().required("Filial seçilməlidir."),
});

export const createOrUpdateStationFormValidationSchema = Yup.object().shape({
  latitude: Yup.string().required("Enlik daxil edilməlidir."),
  longitude: Yup.string().required("Uzunluq daxil edilməlidir."),
  name: Yup.string().required("Filial adı daxil edilməlidir."),
  address: Yup.string().required("Ünvan daxil edilməlidir."),
  city: Yup.string().required("Şəhər daxil edilməlidir."),
  phone_number: Yup.string()
    .required("Telefon nömrəsi daxil edilməlidir.")
    .test(
      "len",
      "10 xanalı olmalıdır. (0505005050)",
      (val) => val && val.toString().length === 10
    ),
  mobile_number: Yup.string()
    .required("Mobil nömrə daxil edilməlidir.")
    .test(
      "len",
      "10 xanalı olmalıdır. (0505005050)",
      (val) => val && val.toString().length === 10
    ),
  url: Yup.string().required("URL daxil edilməlidir."),
  work_hours: Yup.string().required("İş saatı daxil edilməlidir (ex: 09:00 - 18:00)"),
});


export const createOrUpdateTariffFormValidationSchema = Yup.object().shape({
  from_kg: Yup.mixed(),
  to_kg: Yup.mixed(),
  price: Yup.number().required("Qiymət daxil edilməlidir."),
  price_per_kg:Yup.number(),
  sender_station_id: Yup.string().required("Göndərən filial daxil edilməlidir."),
  receiver_station_id: Yup.string().required("Alan filial daxil edilməlidir."),
});

export const createOrUpdateExtraSellingFormValidationSchema = Yup.object().shape(
  {
    name: Yup.string().required("Ad daxil edilməlidir."),
    price: Yup.number().required("Qiymət daxil edilməlidir."),
  }
);
