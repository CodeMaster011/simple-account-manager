export interface Company {
  id?: string;
  name?: string;
  gstin?: string;
  address?: Address;
  phone?: string;
  email?: string;
}

export interface Address {
  line1?: string;
  line2?: string;
  stateCode?: number;
  stateName?: string;
}

export interface Ledger {
  id?: string;
  name?: string;
  gstin?: string;
  address?: Address;
  phone?: string;
  email?: string;
  unit?: string;
  rate?: number;
  taxRate?: number;
  hsn?: string;
  sac?: string;
  type?: "ST" | "PE" | "TX" | "SE"
}

export interface Invoice {
  id?: string;
  no?: string;
  date?: string;
  fromAddr?: Address;
  toAddr?: Address;
  name?: string;
  gt?: number;
  items?: InvoiceItem[];
}

export interface InvoiceItem {
  id?: string;
  name?: string;
  unit?: string;
  quantity?: number;
  taxRate?: number;
  txValue?: number;
  igst?: number;
  cgst?: number;
  sgst?: number;
  isRoundOff?: boolean;
}
