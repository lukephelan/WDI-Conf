class CreateTimetables < ActiveRecord::Migration
  def change
    create_table :timetables do |t|
      t.references :speaker, index: true, foreign_key: true
      t.time :start_time
      t.time :end_time
      t.string :topic
      t.timestamps null: false
    end
  end
end
