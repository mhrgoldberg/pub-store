class Api::OrdersController < ApplicationController
  before_action :set_order, only: [:show]


  # GET /orders/1
  def show
    @order = Order.find(params[:id])
    render json: @order
  end

  # POST /orders
  def create
    @order = Order.new(order_params)

    if @order.save
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: 422
    end
  end


  private
    def order_params
      params.require(:order).permit(
        :firstName, :lastName, :email, :address, :city, :state, :zip,
        :newsLetter, products: []
      )
    end
end
