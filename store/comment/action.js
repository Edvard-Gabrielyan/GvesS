import { createCombinedAction } from '../helpers';

export const commentRequest = createCombinedAction({
  name: 'commentRequest',
  prefix: 'comment@@',
});
