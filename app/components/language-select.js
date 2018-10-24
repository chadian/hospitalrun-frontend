import Ember from 'ember';

export default Ember.Component.extend({
  config: Ember.inject.service(),
  intl: Ember.inject.service(),

  languageOptions: function() {
    let intl = this.get('intl');
    // Hacking around the fact that intl
    // has no support for t(key, locale).
    let currentLocale = intl.get('locale');
    let options = intl.get('locales').map((item) => {
      intl.set('locale', item);
      return {
        id: item,
        name: intl.t('languageName')
      };
    });
    intl.set('locale', currentLocale);
    return options;
  }.property('currentLanguage'),

  onFinish: null,

  _setUserLanguage(language) {
    let configDB = this.get('config.configDB');
    configDB.get('current_user').then((user) => {
      user.intl = language;
      configDB.put(user);
    });
  },

  actions: {
    selectLanguage(selection) {
      this._setUserLanguage(selection);
      this.set('intl.locale', selection);
      this.get('onFinish')();
    }
  }

});
