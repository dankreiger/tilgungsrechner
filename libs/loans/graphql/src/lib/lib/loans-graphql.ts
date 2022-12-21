/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum InstallmentType {
  YEARLY = 'YEARLY',
  MONTHLY = 'MONTHLY',
}

export interface PaymentDetailsFilter {
  loanAmount: number;
}

export interface PaymentDetails {
  payment: number;
}

export interface IQuery {
  loanRepaymentDetails(
    filter?: Nullable<PaymentDetailsFilter>
  ): PaymentDetails | Promise<PaymentDetails>;
}

type Nullable<T> = T | null;
