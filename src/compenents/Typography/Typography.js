import React from 'react';

function Typography({ value, level, strong, code }) {
  if (![1, 2, 3, 4, 5].includes(level)) {
    throw new Error('Invalid heading level. Must be between 1 and 5.');
  }

  const heading = `h${level}`;
  const isStrong = strong ? <strong>{value}</strong> : value;
  const isCode = code ? <code>{value}</code> : value;

  return (
    <React.Fragment>
      {isStrong && !isCode
        ? React.createElement(heading, {}, isStrong)
        : React.createElement(heading, {}, isCode)}
    </React.Fragment>
  );
}

export default Typography;
