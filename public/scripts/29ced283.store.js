// Requires Ember-Data
BbPlayer.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create({
    url: 'http://10.66.9.75:3001',
    namespace: 'api'
  })
});
