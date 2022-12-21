/**
 *
 * Checks if a value is between a min and max value (inclusive)
 */
export const isBetween = (opts: {
  value: number;
  min: number;
  max: number;
}) => {
  const { value, min, max } = opts;
  return value >= min && value <= max;
};
