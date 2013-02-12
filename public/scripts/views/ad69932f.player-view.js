BbPlayer.PlayerView = Ember.View.extend({
  playerError: function() {
    this.get('controller').send('playNextStream');
  }
});

BbPlayer.GenericPlayerView = Ember.View.extend({
  isMobile: function(){
    return (MobileEsp.IsTierIphone || MobileEsp.IsTierTablet);
  }.property(),
  controller: function(){
    return this.get('parentView.context');
  }.property(),
  template: Ember.Handlebars.compile('mobile?:{{view.isMobile}} <div id="player" data-ratio="0.75"></div>'),
  jwPlayer: function(primary){
    var self = this;

    jwplayer("player").setup({
      file: this.get('controller.url'),
      height: 480,
      width: 640,
      autostart: true,
      primary: primary
    });
    jwplayer("player").onError( function(event){
      // self.$() - my current view element
      self.$().trigger('playererror');
    });

  }
});

BbPlayer.HlsView = BbPlayer.GenericPlayerView.extend({
  didInsertElement: function() {
    if (this.isMobile){
      flowplayer.conf.ratio = 3/4;
      flowplayer(function(api, root) {
        api.bind("error", function(e, api, error) {
          alert(error.code + ": " + error.message);
        })
      });

      $("#player").html('<video autoplay><source type="application/x-mpegurl" src="' + this.get('controller.url') + '"/></video>');
      $("#player").flowplayer();

    } else {
      this.jwPlayer('html5');
    }
  }
});

BbPlayer.FlashView = BbPlayer.GenericPlayerView.extend({
  didInsertElement: function() {
    this.jwPlayer('flash');
  }
});

BbPlayer.PlayerWrapperView = Ember.ContainerView.extend({
  childViews:['playerView'],
  playerView: function(){
    var tech = this.get('controller.streamTechnologyType');
    if (tech === 'hls'){
      return BbPlayer.HlsView;
    }else if (tech === 'flash'){
      return BbPlayer.FlashView;
    }
  }.property('controller.streamTechnologyType')
});
