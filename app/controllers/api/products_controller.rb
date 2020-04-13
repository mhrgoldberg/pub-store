class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  private
  def product_params
    params.require(:product).permit( :title, :price, :quantity,:category )
  end

end
