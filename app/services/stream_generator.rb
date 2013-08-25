class StreamGenerator
  HOSTS = {
    'hls' => {
      'israel' => 'edge1.il.kab.tv/rtplive',
      'holand' => 'edge1.nl.kab.tv/rtplive'
    },
    'flash' => {
      'israel' => 'edge1.il.kab.tv/rtplive',
      'holand' => 'edge1.nl.kab.tv/rtplive'
    },
    'icecast' => {
      'israel' => 'icecast.kab.tv'
    }
  }
  
  RESOLUTIONS = {
    'mobile' => '320X240',
    'low' => '360x270',
    'medium' => '640x480',
    'high' => '720x540'
  }

  LANGUAGES = {
    'heb' => 1,
    'eng' => 2,
    'rus' => 3
  }

  PROTOCOLS = {
    'hls' => 'http',
    'flash' => 'rtmp',
    'icecast' => 'http'
  }
  EXTENTION = {
    'hls' => '.stream/playlist.m3u8',
    'flash' => '.stream',
    'icecast' => '.mp3'
  }

  def initialize(channel, language, technology, location, quality)
    @channel = channel
    @language = language
    @technology = technology
    @location = location
    @quality = quality
  end

  def self.generate_all
    result = []
    ['tv66', 'live1'].each do |channel|
      ['heb', 'eng', 'rus'].each do |language|
        ['hls', 'flash', 'icecast'].each do |technology|
          ['israel', 'holand'].each do |location|
            ['mobile', 'low', 'medium', 'high'].each do |quality|
              result << StreamGenerator.new(channel, language, technology, location, quality).generate_stream
            end
          end
        end
      end
    end
    result.compact
  end

  def generate_stream
    { 
      channel_id: @channel,
      language_id: LANGUAGES[@language],
      technology_id: @technology,
      location: @location,
      quality: @quality,
      resolution: RESOLUTIONS[@quality],
      url: url_builder
    }

  end


  private

  def url_builder
    if @technology == 'icecast'
      "#{PROTOCOLS[@technology]}://#{HOSTS[@technology][@location]}/#{@language}#{EXTENTION[@technology]}"
    else
      "#{PROTOCOLS[@technology]}://#{HOSTS[@technology][@location]}/#{@channel}-#{@language}-#{@quality}#{EXTENTION[@technology]}"
    end
  end

end
