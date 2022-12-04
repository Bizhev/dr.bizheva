
export interface FieldInterface {
  // Тип поля
  type: String;
  // Наименование поле
  name: String;
  // Значение поле
  value: String;
}

export interface FieldTextInterface extends FieldInterface{
  labelPlaceholder: String;
}
export interface FieldSwitchInterface extends FieldInterface{
  // Текст при выключенном
  textOff: String;
  // Текст при включенном
  textOn: String;
}
