import {ValidatorFn} from "@angular/forms";

export class QuestionBase<T> {
  value: any;
  key: string;
  image: string;
  label: string;
  validators: ValidatorFn[];
  controlType: string;
  type: string;
  options: { value: string, article?: string }[];
  dependent: { field: string; values: string[]; }[];
  fields: { value?: T | undefined; key: string; label: string; validators?: ValidatorFn[]; required?: boolean; type: string }[];
  other: boolean;
  custom: string;

  constructor(options: {
    value?: any;
    key?: string;
    image?: string;
    label?: string;
    validators?: ValidatorFn[];
    order?: number;
    controlType?: string;
    type?: string;
    options?: { value: string, article?: string }[];
    dependent?: { field: string; values: string[] }[];
    fields?: { key: string; label: string; value?: any | undefined; validators?: ValidatorFn[]; required?: boolean; type: string }[];
    other?: boolean;
    custom? : string;
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.image = options.image || '';
    this.label = options.label || '';
    this.validators = options.validators || [];
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.dependent = options.dependent || [];
    this.fields = options.fields || [];
    this.other = !!options.other;
    this.custom = options.custom || '';
  }
}
