class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products
  end

  def new
    # @product = product.create({})
  end

  def create

  end

  def edit

  end

  def update

  end

  def show

  end

  def destroy

  end
end
