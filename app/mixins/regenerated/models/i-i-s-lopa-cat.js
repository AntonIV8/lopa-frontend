import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  catName: DS.attr('string'),
  paws: DS.hasMany('i-i-s-lopa-paws', { inverse: 'cat', async: false })
});

export let ValidationRules = {
  catName: {
    descriptionKey: 'models.i-i-s-lopa-cat.validations.catName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  paws: {
    descriptionKey: 'models.i-i-s-lopa-cat.validations.paws.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-lopa-animal'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CatE', 'i-i-s-lopa-cat', {
    catName: attr('Cat name', { index: 0 }),
    weight: attr('Weight', { index: 1 }),
    paws: hasMany('i-i-s-lopa-paws', 'Paws', {
      direction: attr('Direction', { index: 0 })
    })
  });

  modelClass.defineProjection('CatL', 'i-i-s-lopa-cat', {
    catName: attr('Cat name', { index: 0 }),
    weight: attr('Weight', { index: 1 })
  });
};
