class CreateSeatings < ActiveRecord::Migration
  def change
    create_table :seatings do |t|
      t.string :seating
      t.boolean :occupied
      t.string :email
      t.float :price
      t.timestamps null: false
    end
  end
end
