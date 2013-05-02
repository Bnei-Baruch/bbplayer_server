class StreamsController < ApplicationController
  def index
    result = [
       {
        id: 1,
        channel_id: "tv66",
        language_id: 1,
        technology_id: 'hls',
        location: "israel",
        system_name: "il_01",
        quality: "medium",
        resolution: "640x480",
        url: "http://wowza1.il.kab.tv/rtplive/tv66-heb-medium.stream/playlist.m3u8"
      },
      {
        id: 2,
        channel_id: "tv66",
        language_id: 1,
        technology_id: 'hls',
        location: "israel",
        system_name: "il_02",
        quality: "low",
        resolution: "360x270",
        url: "http://wowza1.il.kab.tv/rtplive/tv66-heb-low.stream/playlist.m3u8"
      },
      {
        id: 3,
        channel_id: "tv66",
        language_id: 1,
        technology_id: 'hls',
        location: "israel",
        system_name: "il_03",
        quality: "mobile",
        resolution: "320x240",
        url: "http://wowza1.il.kab.tv/rtplive/tv66-heb-mobile.stream/playlist.m3u8"
      },
       {
        id: 4,
        channel_id: "tv66",
        language_id: 3,
        technology_id: 'hls',
        location: "israel",
        system_name: "il_01",
        quality: "medium",
        resolution: "640x480",
        url: "http://wowza1.il.kab.tv/rtplive/tv66-rus-medium.stream/playlist.m3u8"
      },
      {
        id: 5,
        channel_id: "tv66",
        language_id: 3,
        technology_id: 'hls',
        location: "israel",
        system_name: "il_02",
        quality: "low",
        resolution: "360x270",
        url: "http://wowza1.il.kab.tv/rtplive/tv66-rus-low.stream/playlist.m3u8"
      },
      {
        id: 6,
        channel_id: "tv66",
        language_id: 3,
        technology_id: 'hls',
        location: "israel",
        system_name: "il_03",
        quality: "mobile",
        resolution: "320x240",
        url: "http://wowza1.il.kab.tv/rtplive/tv66-rus-mobile.stream/playlist.m3u8"
      },
      {
        id: 7,
        channel_id: "tv66",
        language_id: 1,
        technology_id: 'flash',
        location: "israel",
        system_name: "il_02",
        quality: "high",
        resolution: "640x480",
        url: 'rtmp://flash3.eu.kab.tv/liveheb/liveheb.flv.flv'
      },
      {
        id: 8,
        channel_id: "tv66",
        language_id: 3,
        technology_id: 'flash',
        location: "israel",
        system_name: "il_02",
        quality: "high",
        resolution: "640x480",
        url: 'rtmp://flash3.eu.kab.tv/liverus/liverus.flv.flv'
      },
      {
        id: 9,
        channel_id: "tv66",
        language_id: 1,
        technology_id: 'icecast',
        location: "israel",
        system_name: "il_02",
        quality: "high",
        url: 'http://icecast.kab.tv/heb.mp3'
      },
      {
        id: 10,
        channel_id: "tv66",
        language_id: 3,
        technology_id: 'icecast',
        location: "israel",
        system_name: "il_02",
        quality: "medium",
        url: 'http://icecast.kab.tv/rus.mp3'
      },
    ]
    result.select!{|e| e[:technology_id] == params[:technology_id]} if params[:technology_id]
    result.select!{|e| e[:language_id] == params[:language_id].to_i} if params[:language_id]
    render json: { streams: result }
  end

end
