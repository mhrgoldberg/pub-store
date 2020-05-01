# frozen_string_literal: true

class Order < ApplicationRecord
	validates :firstName, :lastName, :email, :address, :city, :state, :zip, presence: true
	validates :newsLetter, inclusion: { in: [ true, false ] }

	has_many :order_products
	has_many :products, through: :order_products

	def add_order_products(order_id, product_ids)
		entries_to_create = []
		product_ids.each do |product_id|
			entries_to_create << { product_id: product_id, order_id: order_id }
			update_stock_for_order(product_id)
		end
		OrderProduct.create(entries_to_create)
	end
	

	def update_stock_for_order(product_id)
		debugger
		product = Product.find(product_id)
		product.update(quantity: product[:quantity]-1)		
	end
end
