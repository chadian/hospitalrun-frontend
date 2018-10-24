import Ember from 'ember';

export default Ember.Mixin.create({
  adjustmentTypes: function() {
    let intl = this.get('intl');
    return [
      {
        name: intl.t('inventory.labels.addAdjustmentType').toString(),
        type: 'Adjustment (Add)'
      },
      {
        name: intl.t('inventory.labels.removeAdjustmentType').toString(),
        type: 'Adjustment (Remove)'
      },
      {
        name: intl.t('inventory.labels.returnToVendorAdjustmentType').toString(),
        type: 'Return To Vendor'
      },
      {
        name: intl.t('inventory.labels.returnAdjustmentType').toString(),
        type: 'Return'
      },
      {
        name: intl.t('inventory.labels.writeOffAdjustmentType').toString(),
        type: 'Write Off'
      }
    ];
  }.property()
});
