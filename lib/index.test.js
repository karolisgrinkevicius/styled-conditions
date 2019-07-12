import { themeGet } from '@styled-system/theme-get';
import test from 'ava';

import { is, isNot } from './';

test('renders only if prop is truthy', t => {
  const rule = is('test')`color: black; > a { text-decoration: underline; }`;
  t.false(rule({ test: false }));
  t.is(
    rule({ test: true }).styles,
    'color: black; > a { text-decoration: underline; }'
  );
});

test('renders only if prop is falsy', t => {
  const rule = isNot('test')`font-weight: bold;`;
  t.is(rule({ test: false }).styles, 'font-weight: bold;');
  t.false(rule({ test: true }));
});

test('renders conditional dynamic stylesheets', t => {
  const theme = {
    colors: {
      white: '#fff',
    },
    fontSize: [16],
  };
  const rule = is('test')`
    font-family: 'Test';
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSize[0]}px;
  `;
  t.is(
    rule({ test: true, theme }).styles,
    `
    font-family: 'Test';
    color: #fff;
    font-size: 16px;
  `
  );
});

test.skip('renders nested conditional stylesheets including themeGet utility from styled-system', t => {
  const theme = {
    colors: {
      white: '#fff',
    },
    fontSize: [14],
  };
  const rule = isNot('test')`
    font-weight: bold;

    ${is('test2')`
      color: ${themeGet('colors.white')};
      font-size: ${themeGet('fontSize.0')}px;
    `}
  `;

  t.is(
    rule({
      test: false,
      test2: true,
      theme,
    }).styles,
    `font-weight:bold;color:${theme.colors.white};font-size:${
      theme.fontSize[0]
    }px`
  );
});
