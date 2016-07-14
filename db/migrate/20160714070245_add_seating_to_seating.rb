class AddSeatingToSeating < ActiveRecord::Migration
  def change
  	add_column :seatings, :seating, :text, array: true, default: [] 
  end
end
