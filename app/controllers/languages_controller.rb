class LanguagesController < ApplicationController

  def index
    render json: {
      languages: [
        { id: 1, locale: 'he', technologies: ['hls', 'flash'] },
        { id: 3, locale: 'ru', technologies: ['hls', 'icecast'] }
      ],
      technologies: [
        { id: 'hls', technology_type: 'hls', media_type: 'video' },
        { id: 'flash', technology_type: 'flash', media_type: 'video' },
        { id: 'icecast', technology_type: 'icecast', media_type: 'audio' }
      ]
    }
  end

end
