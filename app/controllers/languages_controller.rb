#encoding: utf-8
class LanguagesController < ApplicationController

  def index
    #render nothing: true
    render json: {
      languages: [
        { id: 1, locale: 'he', technology_ids: ['hls', 'flash'], description: 'זהו התאור של הסטרים' },
        { id: 2, locale: 'en', technology_ids: ['hls', 'flash', 'icecast'], description: 'This is the description' },
        { id: 3, locale: 'ru', technology_ids: ['hls', 'icecast'], description: 'Это - описание' }
      ],
      technologies: [
        { id: 'hls', technology_type: 'hls', media_type: 'video' },
        { id: 'flash', technology_type: 'flash', media_type: 'video' },
        { id: 'icecast', technology_type: 'icecast', media_type: 'audio' }
      ]
    }
  end

end
