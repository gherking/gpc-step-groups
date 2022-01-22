# gpc-step-groups

![Downloads](https://img.shields.io/npm/dw/step-groups?style=flat-square)
![Version@npm](https://img.shields.io/npm/v/step-groups?label=version%40npm&style=flat-square)
![Version@git](https://img.shields.io/github/package-json/v/gherking/gpc-step-groups/master?label=version%40git&style=flat-square)
![CI](https://img.shields.io/github/workflow/status/gherking/gpc-step-groups/CI/master?label=ci&style=flat-square)
![Docs](https://img.shields.io/github/workflow/status/gherking/gpc-step-groups/Docs/master?label=docs&style=flat-square)

The StepGroups precompiler is responsible for correcting the gherkin keywords of steps to make the tests more readable.

## Example

```gherkin
Given the page is opened
Given the settings are deleted
When the settings menu item is clicked
When the advanced settings link is clicked
Then the advanced settings should be loaded
Then the basic settings link should be visible
```
It will be modified to:

```gherkin
Given the page is opened
And the settings are deleted
When the settings menu item is clicked
And the advanced settings link is clicked
Then the advanced settings should be loaded
And the basic settings link should be visible
```

## Usage

```javascript
'use strict';
const compiler = require('gherking');
const StepGroups = require('step-groups');

let ast = await compiler.load('./features/src/login.feature');
ast = compiler.process(
    ast,
    new StepGroups({
        // config
    })
);
await compiler.save('./features/dist/login.feature', ast, {
    lineBreak: '\r\n'
});
```

```typescript
'use strict';
import {load, process, save} from "gherking";
import Template = require("step-groups");

let ast = await load("./features/src/login.feature");
ast = process(
    ast,
    new Template({
        // config
    })
);
await save('./features/dist/login.feature', ast, {
    lineBreak: '\r\n'
});
```
## Other

This package uses [debug](https://www.npmjs.com/package/debug) for logging, use `gpc:template` :

```shell
DEBUG=gpc:template* gherking ...
```

For detailed documentation see the [TypeDocs documentation](https://gherking.github.io/step-groups/).