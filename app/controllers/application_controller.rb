class ApplicationController < ActionController::Base
  #returning null session b/c requesting json not html
  protect_from_forgery with: :exception, prepend: true
  before_action :authenticate_user!
end
