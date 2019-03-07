# axe-webdriverio

[![npm version](https://badge.fury.io/js/axe-webdriverio.svg)](https://badge.fury.io/js/axe-webdriverio)

Makes WebDriver IO compatible with the [axe-webdriverjs](https://github.com/dequelabs/axe-webdriverjs) package. There are four WebDriver functions that `axe-webdriverjs` uses, which need to be re-bound for WebDriverIO.

- `executeScript`
- `executeAsyncScript`
- `switchTo`
- `findElements`

This package creates bindings for all of them.

## Usage

**Warning:** You must have [axe-webdriverjs](https://github.com/dequelabs/axe-webdriverjs) as a peer dependency. This has changed in the latest version `1.0.0`. Previously this package installed a version of `axe-webdriverjs` that was very out of date. By using a peer dependency you can use whatever version you need while still getting the bindings.

```javascript
var AxeWebDriverIOBuilder = require("axe-webdriverio");
const { remote } = require("webdriverio");

(async () => {
  const browser = await remote({
    logLevel: "error",
    path: "/",
    capabilities: {
      browserName: "firefox"
    }
  });

  await browser.url("https://dequeuniversity.com/demo/mars/");

  AxeWebDriverIOBuilder(browser).analyze(function(err, results) {
    if (err) {
      // Handle error somehow
    }
    console.log(results);
  });

  await browser.deleteSession();
})().catch(e => console.error(e));
```

View the [axe-webdriverjs](https://github.com/dequelabs/axe-webdriverjs) documentation for more details.

### Setup

```bash
yarn
```

### Test

```bash
yarn test
```

### Types

This package has types thanks to [@types/axe-webdriverjs](https://www.npmjs.com/package/@types/axe-webdriverjs)
