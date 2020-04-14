# frozen_string_literal: true

class Product < ApplicationRecord
  validates :title, :price, :quantity,:category, presence: true
  validates :category, inclusion: { in: %w(Clothing Souvenir Events),
     message: '%{value} is not a valid category' }

  belongs_to :order
  
  
end
