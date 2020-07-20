import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISlopaAnimalLForm from './forms/i-i-s-lopa-animal-l';
import IISlopaCatLForm from './forms/i-i-s-lopa-cat-l';
import IISlopaDogLForm from './forms/i-i-s-lopa-dog-l';
import IISlopaAnimalEForm from './forms/i-i-s-lopa-animal-e';
import IISlopaCatEForm from './forms/i-i-s-lopa-cat-e';
import IISlopaDogEForm from './forms/i-i-s-lopa-dog-e';
import IISlopaAnimalModel from './models/i-i-s-lopa-animal';
import IISlopaCatModel from './models/i-i-s-lopa-cat';
import IISlopaDogModel from './models/i-i-s-lopa-dog';
import IISlopaPawsModel from './models/i-i-s-lopa-paws';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-lopa-animal': IISlopaAnimalModel,
    'i-i-s-lopa-cat': IISlopaCatModel,
    'i-i-s-lopa-dog': IISlopaDogModel,
    'i-i-s-lopa-paws': IISlopaPawsModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'a-for-test': {
          caption: 'a-for-test',
          title: 'a-for-test',
          'i-i-s-lopa-cat-l': {
            caption: 'i-i-s-lopa-cat-l',
            title: 'i-i-s-lopa-cat-l'
          },
          'i-i-s-lopa-dog-l': {
            caption: 'i-i-s-lopa-dog-l',
            title: 'i-i-s-lopa-dog-l'
          },
          'i-i-s-lopa-animal-l': {
            caption: 'i-i-s-lopa-animal-l',
            title: 'i-i-s-lopa-animal-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-lopa-animal-l': IISlopaAnimalLForm,
    'i-i-s-lopa-cat-l': IISlopaCatLForm,
    'i-i-s-lopa-dog-l': IISlopaDogLForm,
    'i-i-s-lopa-animal-e': IISlopaAnimalEForm,
    'i-i-s-lopa-cat-e': IISlopaCatEForm,
    'i-i-s-lopa-dog-e': IISlopaDogEForm
  },

});

export default translations;
