'use strict';

const Generator = require('@ngx-rocket/core');
const chalk = require('chalk');
const pkg = require('../../package.json');

class ExampleGenerator extends Generator {

  // DO NOT add a constructor, it won't be called.
  // Use initializing() method instead.

  initializing() {
    this.version = pkg.version;
    this.log(`Using ${chalk.cyan('ngx-rocket')} addon example ${chalk.green(this.version)}`);
  }

  beforeWriting() {
    // Augment this generator properties with shared properties
    Object.assign(this.props, this.sharedProps);
  }

}

module.exports = Generator.make({
  baseDir: __dirname,
  generator: ExampleGenerator,
  prompts: [
    {
      type: 'confirm',
      name: 'sayHello',
      message: 'Shall we say hello?',
      default: true
    },
    {
      type: 'input',
      name: 'helloName',
      message: 'To whom shall we say hello?',
      default: 'world',
      // Only ask this one when "yes" is replied to the sayHello prompt
      when: (props) => props.sayHello
    },
  ]
});
