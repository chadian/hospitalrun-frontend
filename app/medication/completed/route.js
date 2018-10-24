import { translationMacro as t } from 'ember-intl';
import MedicationIndexRoute from 'hospitalrun/medication/index/route';
import Ember from 'ember';

const { computed } = Ember;

export default MedicationIndexRoute.extend({
  modelName: 'medication',
  pageTitle: computed('intl.locale', () => {
    return t('medication.titles.completedMedication');
  }),
  searchStatus: 'Fulfilled'
});
