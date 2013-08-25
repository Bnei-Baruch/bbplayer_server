class StreamsController < ApplicationController
  def index
    #result = [
       #{
        #channel_id: "tv66",
        #language_id: 1,
        #technology_id: 'hls',
        #location: "israel",
        #system_name: "il_01",
        #quality: "high",
        #resolution: "640x480",
        #url: "http://edge1.il.kab.tv/rtplive/tv66-heb-high.streassm/playlist.m3u8"
      #},
       #{
        #channel_id: "tv66",
        #language_id: 1,
        #technology_id: 'hls',
        #location: "israel",
        #system_name: "il_01",
        #quality: "medium",
        #resolution: "640x480",
        #url: "http://edge1.il.kab.tv/rtplive/tv66-heb-medium.stream/playlist.m3u8"
      #},
      #{
        #channel_id: "tv66",
        #language_id: 1,
        #technology_id: 'hls',
        #location: "israel",
        #system_name: "il_02",
        #quality: "low",
        #resolution: "360x270",
        #url: "http://edge1.il.kab.tv/rtplive/tv66-heb-low.stream/playlist.m3u8"
      #},
      #{
        #channel_id: "tv66",
        #language_id: 1,
        #technology_id: 'hls',
        #location: "israel",
        #system_name: "il_03",
        #quality: "mobile",
        #resolution: "320x240",
        #url: "http://edge1.il.kab.tv/rtplive/tv66-heb-mobile.stream/playlist.m3u8"
      #},
       #{
        #channel_id: "tv66",
        #language_id: 3,
        #technology_id: 'hls',
        #location: "israel",
        #system_name: "il_01",
        #quality: "medium",
        #resolution: "640x480",
        #url: "http://wowza1.il.kab.tv/rtplive/tv66-rus-medium.stream/playlist.m3u8"
      #},
      #{
        #channel_id: "tv66",
        #language_id: 3,
        #technology_id: 'hls',
        #location: "israel",
        #system_name: "il_02",
        #quality: "low",
        #resolution: "360x270",
        #url: "http://wowza1.il.kab.tv/rtplive/tv66-rus-low.stream/playlist.m3u8"
      #},
      #{
        #channel_id: "tv66",
        #language_id: 3,
        #technology_id: 'hls',
        #location: "israel",
        #system_name: "il_03",
        #quality: "mobile",
        #resolution: "320x240",
        #url: "http://wowza1.il.kab.tv/rtplive/tv66-rus-mobile.stream/playlist.m3u8"
      #},
      #{
        #channel_id: "tv66",
        #language_id: 1,
        #technology_id: 'flash',
        #location: "israel",
        #system_name: "il_02",
        #quality: "low",
        #resolution: "360x270",
        #url: 'rtmp://edge1.il.kab.tv/rtplive/tv66-heb-low.stream'
      #},
      #{
        #channel_id: "tv66",
        #language_id: 1,
        #technology_id: 'flash',
        #location: "israel",
        #system_name: "il_02",
        #quality: "medium",
        #resolution: "640x480",
        #url: 'rtmp://edge1.il.kab.tv/rtplive/tv66-heb-medium.stream'
      #},
      #{
        #channel_id: "tv66",
        #language_id: 1,
        #technology_id: 'flash',
        #location: "europe",
        #system_name: "eu_01",
        #quality: "medium",
        #resolution: "640x480",
        #url: 'rtmp://edge1.nl.kab.tv/rtplive/tv66-heb-medium.stream'
      #},
      #{
        #channel_id: "tv66",
        #language_id: 1,
        #technology_id: 'icecast',
        #location: "israel",
        #system_name: "il_02",
        #quality: "medium",
        #url: 'http://icecast.kab.tv/heb.mp3'
      #},
      #{
        #channel_id: "tv66",
        #language_id: 2,
        #technology_id: 'icecast',
        #location: "israel",
        #system_name: "il_02",
        #quality: "medium",
        #url: 'http://icecast.kab.tv/eng.mp3'
      #},
      #{
        #channel_id: "tv66",
        #language_id: 3,
        #technology_id: 'icecast',
        #location: "israel",
        #system_name: "il_02",
        #quality: "medium",
        #url: 'http://icecast.kab.tv/rus.mp3'
      #},
    #]
    result = StreamGenerator.generate_all
    result.each_with_index {|e, i| e.merge!(id: i + 1)}
    result.select!{|e| e[:channel_id] == params[:channel_id]}
    result.select!{|e| e[:technology_id] == params[:technology_id]} if params[:technology_id]
    result.select!{|e| e[:language_id] == params[:language_id].to_i} if params[:language_id]
    render json: { streams: result }
  end

end
