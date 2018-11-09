import { run } from '@ember/runloop';
import { find } from 'ember-native-dom-helpers';
import { settled } from '@ember/test-helpers';
import $ from 'jquery';

async function select(selector, ...texts) {
  let $options = $(find(`${selector} option`));

  $options.each(function() {
    let $option = $(this);

    run(() => {
      this.selected = texts.some((text) => $option.is(`:contains('${text}')`));
      if (this.selected) {
        $option.trigger('change');
      }
    });
  });

  await settled();
}

export default select;
