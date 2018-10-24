import Ember from 'ember';
import AbstractEditController from 'hospitalrun/controllers/abstract-edit-controller';

const {
  computed,
  computed: {
    alias
  },
  get,
  inject,
  set
} = Ember;

export default AbstractEditController.extend({
  intl: inject.service(),
  editController: alias('model.editController'),
  newAllergy: false,

  additionalButtons: computed('model.isNew', function() {
    let model = get(this, 'model');
    let btn = get(this, 'intl').t('buttons.delete');
    let isNew = get(model, 'isNew');
    if (!isNew) {
      return [{
        class: 'btn btn-default warning',
        buttonAction: 'deleteAllergy',
        buttonIcon: 'octicon octicon-x',
        buttonText: btn
      }];
    }
  }),

  title: Ember.computed('model', function() {
    let model = get(this, 'model');
    let intl = get(this, 'intl');
    let isNew = get(model, 'isNew');
    if (!isNew) {
      return intl.t('allergies.titles.editAllergy');
    } else {
      return intl.t('allergies.titles.addAllergy');
    }
  }),

  beforeUpdate() {
    let allergy = get(this, 'model');
    set(this, 'newAllergy', get(allergy, 'isNew'));
    return Ember.RSVP.Promise.resolve();
  },

  afterUpdate(allergy) {
    let newAllergy = get(this, 'newAllergy');
    if (newAllergy) {
      get(this, 'editController').send('addAllergy', allergy);
      set(this, 'name', '');
    } else {
      this.send('closeModal');
    }
  },

  actions: {
    cancel() {
      this.send('closeModal');
    },

    deleteAllergy() {
      let allergy = get(this, 'model');
      get(this, 'editController').send('deleteAllergy', allergy);
    }
  }
});
