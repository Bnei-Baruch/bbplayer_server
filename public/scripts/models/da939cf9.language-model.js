var attr = DS.attr;
BbPlayer.Language = DS.Model.extend({
  locale: attr('string'),
  technologies: DS.hasMany('BbPlayer.Technology'),
  streams: DS.hasMany('BbPlayer.Stream')
});

BbPlayer.Technology = DS.Model.extend({
  technologyType: attr('string'),
  mediaType: attr('string'),
  languages: DS.hasMany('BbPlayer.Language'), // Not implemented on the server
  streams: DS.hasMany('BbPlayer.Stream')
});

