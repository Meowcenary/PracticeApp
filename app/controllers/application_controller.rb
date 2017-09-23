class ApplicationController < ActionController::Base
  #returning null session b/c requesting json not html
  protect_from_forgery with: :null_session, prepend: true
end
