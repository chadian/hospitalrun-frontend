import Ember from 'ember';
import IsUpdateDisabled from 'hospitalrun/mixins/is-update-disabled';
export default Ember.Controller.extend(IsUpdateDisabled, {
  editController: Ember.inject.controller('admin/lookup'),
  showUpdateButton: true,

  updateButtonAction: 'update',
  updateButtonText: function() {
    let intl = this.get('intl');
    if (this.get('model.isNew')) {
      return intl.t('buttons.add');
    } else {
      return intl.t('buttons.update');
    }
  }.property('model.isNew'),

  actions: {
    cancel() {
      this.send('closeModal');
    },

    update() {
      if (!Ember.isEmpty(this.get('model.value'))) {
        this.get('editController').send('updateValue', this.get('model'));
        this.send('closeModal');
      }
    }
  }
});
