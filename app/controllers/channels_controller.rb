class ChannelsController < ApplicationController

  def show
    #render nothing: true
    render json: {
      channel: {
        id: 'tv66',
        version: rand(4),#Time.now.to_i,
        status: 'open',
        interval: 15,
      }
    }
  end

end
