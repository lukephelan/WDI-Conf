class RemoveSeatingFromSeating < ActiveRecord::Migration
  def change
  	remove_column :seatings, :seating
  end
end
