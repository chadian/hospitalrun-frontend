import { translationMacro as t } from 'ember-intl';
import AbstractDeleteController from 'hospitalrun/controllers/abstract-delete-controller';
export default AbstractDeleteController.extend({
  title: t('inventory.labels.deleteItem')
});
