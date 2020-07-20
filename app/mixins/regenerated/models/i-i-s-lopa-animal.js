import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  weight: DS.attr('decimal')
});

export let ValidationRules = {
  weight: {
    descriptionKey: 'models.i-i-s-lopa-animal.validations.weight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AnimalE', 'i-i-s-lopa-animal', {
    weight: attr('Weight', { index: 0 })
  });

  modelClass.defineProjection('AnimalL', 'i-i-s-lopa-animal', {
    weight: attr('Weight', { index: 0 })
  });
};
