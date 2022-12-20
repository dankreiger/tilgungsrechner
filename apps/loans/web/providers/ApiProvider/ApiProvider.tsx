import { mapValues, toString } from 'lodash';
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import { ApiInput, ApiValue } from './ApiProvider.types';

export const ApiContext = createContext<ApiValue | null>(null);
export const ApiProvider = ({ children }) => {
  const [data, setData] = useState<ApiValue['data']>({});
  const [loading, setLoading] = useState<ApiValue['loading']>(false);
  const [error, setError] = useState<ApiValue['error']>(null);
  const acRef = useRef<Map<string, AbortController>>(new Map());

  const callApi = useCallback(
    async <P extends Record<string, string>>({
      apiRoute,
      query,
      opts,
    }: ApiInput<P>) => {
      try {
        let url = `api/${apiRoute}`;
        if (query) {
          const primedQuery = mapValues(query, toString);
          const urlParams = new URLSearchParams(primedQuery);
          url += `?${urlParams.toString()}`;
        }

        // Abort any duplicate in-flight requests
        acRef.current.get(url)?.abort();
        acRef.current.set(url, new AbortController());

        setLoading(true);

        const res = await fetch(url, {
          signal: acRef.current.get(url).signal,
          ...opts,
        });

        setData(await res.json());
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return (
    <ApiContext.Provider value={{ callApi, data, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
