import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-lopa-paws', 'Unit | Serializer | i-i-s-lopa-paws', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-lopa-paws',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
