import { moduleForModel, test } from 'ember-qunit';

moduleForModel('slide', 'Unit | Model | slide', {
  // Specify the other units that are required for this test.
  needs: ['model:reason']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
