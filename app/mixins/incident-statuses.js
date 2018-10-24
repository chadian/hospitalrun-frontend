import Ember from 'ember';

const { get } = Ember;

export const ACTIVE =  'Active';
export const CLOSED = 'Closed';
export const FOLLOW_UP = 'Followup';
export const REPORTED = 'Reported';

export default Ember.Mixin.create({
  statusList: [ACTIVE, CLOSED, FOLLOW_UP, REPORTED],
  getLocalizedStatus(status) {
    let intl = get(this, 'intl');
    return intl.t(`incident.labels.status${status}`);
  }
});
