export type ApiRoutes = 'calculation/monthly-payment-details';
export type ApiInput<P extends Record<string, any>> = {
  apiRoute: ApiRoutes;
  query: P;
  opts?: RequestInit;
};
export type ApiValue = {
  callApi: <P extends Record<string, any>>(input: ApiInput<P>) => Promise<void>;
  data: unknown;
  loading: boolean;
  error: Error;
};
