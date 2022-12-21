import { render } from '@testing-library/react';

import { FormattedNumberInput } from './formatted-number-input';

describe('FormattedNumberInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FormattedNumberInput label="" name="" onChange={() => undefined} />
    );
    expect(baseElement).toBeTruthy();
  });
});
