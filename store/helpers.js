import { createActions } from 'redux-actions';

export const createCombinedAction = ({ name, prefix }) => {
  const nameCamelCase = name
    .replace(/[A-Z]/g, (value) => {
      return `_${value}`;
    })
    .toUpperCase();
  const result = createActions(
    nameCamelCase,
    `${nameCamelCase}_SUCCESS`,
    `${nameCamelCase}_ERROR`,
    {
      prefix,
    }
  );
  const actions = result[name];
  actions.success = result[`${name}Success`];
  actions.error = result[`${name}Error`];

  return actions;
};
