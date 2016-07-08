class CreateSpeakers < ActiveRecord::Migration
  def change
    create_table :speakers do |t|
      t.string :first_name
      t.string :last_name
      t.string :role
      t.string :bio
      t.timestamps null: false
    end
  end
end
