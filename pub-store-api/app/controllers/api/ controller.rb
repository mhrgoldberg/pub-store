class Api::Controller < ApplicationController
  def products
    def index
      @products = Product.all
      render json: @products
    end

    def new
      
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
end
