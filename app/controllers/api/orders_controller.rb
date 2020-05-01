class Api::OrdersController < ApplicationController 

  # GET /api/orders/1
  def show
    @order = Order.find(params[:id])
    render json: {order: @order, products: @order.products}
  end

  # POST /api/orders
  def create
    @order = Order.new(order_params)

    if @order.save
      @order.add_order_products(@order.id, params[:products])
      render json: @order, status: :created
    else
      render json: @order.errors, status: 422
    end
  end


  private
    def order_params
      params.require(:order).permit(
        :firstName, :lastName, :email, :address, :city, :state, :zip,
        :newsLetter
      )
    end
end
