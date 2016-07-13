class RemovePriceFromSeating < ActiveRecord::Migration
	def change
		remove_column :seatings, :occupied, :email, :price
	end
end
