import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-lopa-animal', 'Unit | Model | i-i-s-lopa-animal', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-lopa-animal',
    'model:i-i-s-lopa-cat',
    'model:i-i-s-lopa-dog',
    'model:i-i-s-lopa-paws',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
