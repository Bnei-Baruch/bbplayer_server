class ChannelsController < ApplicationController

  def show
    render json: {
      channel: {
        id: 'tv66',
        version: Time.now.to_i,
        status: 'open'
        #TODO: add a special status - 'refresh' - this status forces the client to reconnect to the streams.
      }
    }
  end

end
