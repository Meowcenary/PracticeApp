require 'test_helper'

class RegisrationsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get regisrations_new_url
    assert_response :success
  end

end
