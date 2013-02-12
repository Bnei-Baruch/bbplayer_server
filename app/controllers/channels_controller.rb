class ChannelsController < ApplicationController

  def show
    render json: {
      channel: {
        id: 'tv66',
        version: Time.now.to_i,
        status: 'open'
      }
    }
  end

end
