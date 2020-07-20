import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'A for test',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'A for test',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'A for test',
          title: 'A for test'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'a-for-test': {
          caption: 'AForTest',
          title: 'AForTest',
          'i-i-s-lopa-cat-l': {
            caption: 'Cat',
            title: ''
          },
          'i-i-s-lopa-dog-l': {
            caption: 'Dog',
            title: ''
          },
          'i-i-s-lopa-animal-l': {
            caption: 'Animal',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
