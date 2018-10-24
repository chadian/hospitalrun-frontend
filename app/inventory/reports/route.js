import AbstractIndexRoute from 'hospitalrun/routes/abstract-index-route';
import Ember from 'ember';
import { translationMacro as t } from 'ember-intl';
export default AbstractIndexRoute.extend({
  pageTitle: t('inventory.titles.inventoryReport'),

  // No model for reports; data gets retrieved when report is run.
  model() {
    return Ember.RSVP.resolve(Ember.Object.create({}));
  }

});
