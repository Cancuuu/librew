export type TAction = "action";
export type TNumber = "number";

export type TKeyboardValue = {
  type: TAction | TNumber;
  value: number | string;
};
