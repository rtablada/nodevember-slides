import DS from 'ember-data';
import config from 'slides/config/environment';
const { DS: { host, namespace } } = config;

export default DS.JSONAPIAdapter.extend({
  host, namespace,
});
