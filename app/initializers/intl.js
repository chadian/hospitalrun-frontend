export default {
  name: 'intl',

  after: 'ember-intl',

  initialize(app) {
    app.inject('route', 'intl', 'service:intl');
    app.inject('controller', 'intl', 'service:intl');
    app.inject('mixin', 'intl', 'service:intl');
    app.inject('model', 'intl', 'service:intl');
  }
};
