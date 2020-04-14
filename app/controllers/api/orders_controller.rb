class Api::OrdersController < ApplicationController
  before_action :set_order, only: [:show]


  # GET /orders/1
  def show
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
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def order_params
      params.require(:order).permit(
        :firstName, :lastName, :email, :address, :city, :state, :zip,
        :newsLetter
      )
    end
end
