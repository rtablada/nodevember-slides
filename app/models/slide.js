import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  order: DS.attr('number'),
  reason: DS.belongsTo('reason')
});
