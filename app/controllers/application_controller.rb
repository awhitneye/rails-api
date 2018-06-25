class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  #We are requesting json data and not default html

  helper_method :current_user, :current_video

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def current_video
    @current_video ||= Video.find_by(video_id: flash[:video_id])
  end
end
