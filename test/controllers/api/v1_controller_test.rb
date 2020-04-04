require 'test_helper'

class Api::V1ControllerTest < ActionDispatch::IntegrationTest
  test "should get products" do
    get api_v1_products_url
    assert_response :success
  end

end
