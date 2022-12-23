import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type MonthlyPaymentOverviewItem = {
  __typename?: 'MonthlyPaymentOverviewItem';
  amortizationAmount: Scalars['Float'];
  fixedMonthlyPayment: Scalars['Float'];
  interestAmount: Scalars['Float'];
  monthNumber: Scalars['Int'];
  remainingDebt: Scalars['Float'];
  yearNumber: Scalars['Int'];
};

export type PaymentDetails = {
  __typename?: 'PaymentDetails';
  fixedMonthlyPayment: Scalars['Float'];
  monthlyOverviewList?: Maybe<Array<Maybe<MonthlyPaymentOverviewItem>>>;
  remainingDebtAtEndOfFixedInterestPeriod?: Maybe<Scalars['Float']>;
};

export type PaymentDetailsFilter = {
  borrowingRate: Scalars['Float'];
  fixedInterestPeriodInYears: Scalars['Float'];
  loanAmount: Scalars['Float'];
  repaymentRate: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  loanRepaymentDetails: PaymentDetails;
};

export type QueryLoanRepaymentDetailsArgs = {
  filter?: InputMaybe<PaymentDetailsFilter>;
};

export type GetLoanRepaymentDetailsQueryVariables = Exact<{
  filter?: InputMaybe<PaymentDetailsFilter>;
}>;

export type GetLoanRepaymentDetailsQuery = {
  __typename?: 'Query';
  loanRepaymentDetails: {
    __typename?: 'PaymentDetails';
    fixedMonthlyPayment: number;
    remainingDebtAtEndOfFixedInterestPeriod?: number | null;
    monthlyOverviewList?: Array<{
      __typename?: 'MonthlyPaymentOverviewItem';
      monthNumber: number;
      yearNumber: number;
      remainingDebt: number;
      fixedMonthlyPayment: number;
      interestAmount: number;
      amortizationAmount: number;
    } | null> | null;
  };
};

export const GetLoanRepaymentDetailsDocument = gql`
  query GetLoanRepaymentDetails($filter: PaymentDetailsFilter) {
    loanRepaymentDetails(filter: $filter) {
      fixedMonthlyPayment
      remainingDebtAtEndOfFixedInterestPeriod
      monthlyOverviewList {
        monthNumber
        yearNumber
        remainingDebt
        fixedMonthlyPayment
        interestAmount
        amortizationAmount
      }
    }
  }
`;

/**
 * __useGetLoanRepaymentDetailsQuery__
 *
 * To run a query within a React component, call `useGetLoanRepaymentDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoanRepaymentDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoanRepaymentDetailsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetLoanRepaymentDetailsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLoanRepaymentDetailsQuery,
    GetLoanRepaymentDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetLoanRepaymentDetailsQuery,
    GetLoanRepaymentDetailsQueryVariables
  >(GetLoanRepaymentDetailsDocument, options);
}
export function useGetLoanRepaymentDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLoanRepaymentDetailsQuery,
    GetLoanRepaymentDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLoanRepaymentDetailsQuery,
    GetLoanRepaymentDetailsQueryVariables
  >(GetLoanRepaymentDetailsDocument, options);
}
export type GetLoanRepaymentDetailsQueryHookResult = ReturnType<
  typeof useGetLoanRepaymentDetailsQuery
>;
export type GetLoanRepaymentDetailsLazyQueryHookResult = ReturnType<
  typeof useGetLoanRepaymentDetailsLazyQuery
>;
export type GetLoanRepaymentDetailsQueryResult = Apollo.QueryResult<
  GetLoanRepaymentDetailsQuery,
  GetLoanRepaymentDetailsQueryVariables
>;
