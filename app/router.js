import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-lopa-animal-l');
  this.route('i-i-s-lopa-animal-e',
  { path: 'i-i-s-lopa-animal-e/:id' });
  this.route('i-i-s-lopa-animal-e.new',
  { path: 'i-i-s-lopa-animal-e/new' });
  this.route('i-i-s-lopa-cat-l');
  this.route('i-i-s-lopa-cat-e',
  { path: 'i-i-s-lopa-cat-e/:id' });
  this.route('i-i-s-lopa-cat-e.new',
  { path: 'i-i-s-lopa-cat-e/new' });
  this.route('i-i-s-lopa-dog-l');
  this.route('i-i-s-lopa-dog-e',
  { path: 'i-i-s-lopa-dog-e/:id' });
  this.route('i-i-s-lopa-dog-e.new',
  { path: 'i-i-s-lopa-dog-e/new' });
});

export default Router;
