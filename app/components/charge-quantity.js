import Ember from 'ember';
export default Ember.Component.extend({
  intl: Ember.inject.service(),
  classNames: ['col-xs-2', 'form-group'],
  classNameBindings: ['hasError'],
  tagName: 'td',
  pricingItem: null,

  didReceiveAttrs(/* attrs */) {
    this._super(...arguments);
    this.quantitySelected = Ember.computed.alias(`model.${this.get('pricingItem.id')}`);
  },

  hasError: function() {
    let quantitySelected = this.get('quantitySelected');
    return (!Ember.isEmpty(quantitySelected) && isNaN(quantitySelected));
  }.property('quantitySelected'),

  quantityHelp: function() {
    if (this.get('hasError')) {
      return this.get('intl').t('errors.invalidNumber');
    }
  }.property('hasError')

});
