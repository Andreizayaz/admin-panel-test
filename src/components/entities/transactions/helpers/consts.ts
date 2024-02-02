export const SYSTEM_TOKEN = "SYSTEM_TOKEN";
export const WRITE_OFF = "WRITE_OFF";
export const REPLENISH = "REPLENISH";
export const WRITE_OFF_TR = "Списание";
export const REPLENISH_TR = "Пополнение";
export const STATUS_PENDING = "PENDING";
export const STATUS_SUCCEDED = "SUCCEDED";

export const BTKN = "BTKN";
export const token = {
  SYSTEM_TOKEN: BTKN,
};

export const transactionTr = {
  WRITE_OFF: WRITE_OFF_TR,
  REPLENISH: REPLENISH_TR,
};

const TYPE = "Тип";
const AMOUNT = "Сумма";
const DATE = "Дата";

export const headings = [
  {
    heading: TYPE,
  },
  {
    heading: AMOUNT,
  },
  {
    heading: DATE,
  },
];

export const DIAGRAM_HEADING = "Использование токенов";
export const TABLE_HEADING = "История операций";
