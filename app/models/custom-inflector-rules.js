import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('animal', 'Animals');
inflector.irregular('paws', 'Pawss');
inflector.irregular('cat', 'Cats');
inflector.irregular('dog', 'Dogs');

export default {};
