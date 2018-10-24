import Ember from 'ember';

const { computed } = Ember;

export default Ember.Mixin.create({

  fieldTypeValues: [
    'checkbox',
    'radio',
    'select',
    'text',
    'textarea'
  ],

  fieldTypes: computed(function() {
    let intl = this.get('intl');
    let fieldTypeValues = this.get('fieldTypeValues');
    return fieldTypeValues.map((fieldTypeId) => {
      return {
        id: fieldTypeId,
        value: intl.t(`admin.customForms.labels.${fieldTypeId}`)
      };
    }).sort(function(a, b) {
      return Ember.compare(a.value.toString(), b.value.toString());
    });
  })
});
