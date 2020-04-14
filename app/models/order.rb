# frozen_string_literal: true

class Order < ApplicationRecord
	validates :firstName, :lastName, :email, :address, :city, :state, :zip,
	 :newsLetter, presence: true

	 has_many :products
	
end
