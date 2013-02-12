BbPlayer.Stream = DS.Model.extend({
  location: attr('string'),
  system_name: attr('string'),
  quality: attr('string'),
  resolution: attr('string'),
  url: attr('string'),

  technology: DS.belongsTo('BbPlayer.Technology'),
  channel: DS.belongsTo('BbPlayer.Channel'),
  language: DS.belongsTo('BbPlayer.Language')
});
