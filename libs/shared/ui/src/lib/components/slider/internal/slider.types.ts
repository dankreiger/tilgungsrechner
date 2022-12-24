export type SliderProps = {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  errorMsg?: string;
  defaultValue?: number;
  name: string;
  onChange: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;

  /**
   * Optionally transform scale of the slide values.
   */
  xf?: (value: number) => number;
};
