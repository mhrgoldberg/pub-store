# frozen_string_literal: true

class Product < ApplicationRecord
  validates :title, :price, :quantity,:category, presence: true
  validates :category, inclusion: { in: %w(Clothing Souvenir Events),
     message: '%{value} is not a valid category' }
  
  has_many :order_products
  has_many :orders, through: :order_products  
  
end
