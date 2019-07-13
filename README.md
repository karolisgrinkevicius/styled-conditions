<h1 align="center">
  👨‍🎨 <br/>
  Styled Conditions

[![npm](https://img.shields.io/npm/v/styled-conditions.svg?style=flat-square)](https://www.npmjs.com/package/styled-conditions)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/styled-conditions.svg?style=flat-square)](https://www.npmjs.com/package/styled-conditions) [![Travis CI Build](https://travis-ci.com/karolisgrinkevicius/styled-conditions.svg?style=flat-square)](https://travis-ci.org/karolisgrinkevicius/styled-conditions)
![](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

</h1>

Flag utility for [emotion](https://github.com/emotion-js/emotion) CSS-in-JS
to conditionally apply css depending on [React](https://github.com/facebook/react) props including support for [styled-system](https://styled-system.com).

## Install

```sh
npm i --save styled-conditions
```

## Usage

```js
import styled from '@emotion/styled';
import { is } from 'styled-conditions';

const Button = styled(MyComponent)`
  ${is('black')`
    color: black;
  `}

  ${isNot('devil')`
    color: ${props => props.theme.colors.colorForAngels};
  `}
`;
```

## License

[MIT](LICENSE)
