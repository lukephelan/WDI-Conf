class RemoveEmailFromSeating < ActiveRecord::Migration
  def change
    remove_column :seatings, :price
    remove_column :seatings, :email
  end
end
