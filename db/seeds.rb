# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

speakers = Speaker.create([
  { first_name: "Thomas",
    last_name: "Kanze",
    role: "Web Developer",
    bio: "World traveller looking for his next home"},
  { first_name: "Luke",
    last_name: "Phelan",
    role: "Web Developer",
    bio: "Engineer turned web developer"},
  { first_name: "Yogi",
    last_name: "",
    role: "Web Developer",
    bio: "Multi-lingual web developer experienced with creating responsive websites"},
  { first_name: "Stephen",
    last_name: "Koo",
    role: "Web Developer",
    bio: "I bring an excellent technical understanding to a product management position"},
  { first_name: "Ephrem",
    last_name: "Akele",
    role: "Web Developer",
    bio: "Engineer turned web developer"},
  { first_name: "Brad",
    last_name: "Wynter",
    role: "Start-Up Entrepreneur",
    bio: "Multi-award winning innovation manager"},
  { first_name: "Yang",
    last_name: "Li",
    role: "Instructor",
    bio: "In-house developer and teaching assistant"},
  { first_name: "Chris",
    last_name: "McCorry",
    role: "Web Developer",
    bio: "Digital experience specialist"},
  { first_name: "Jason",
    last_name: "Low",
    role: "Web Developer",
    bio: "Engineer turned developer"},
  { first_name: "Niall",
    last_name: "O'Callaghan",
    role: "Web Developer",
    bio: "Software entrepreneur"},
  { first_name: "Joel",
    last_name: "Brewster",
    role: "Web Developer",
    bio: "Full stack developer"},
  { first_name: "Peter",
    last_name: "Daniel",
    role: "Web Developer",
    bio: "Web developer and graphic designer"},
  { first_name: "Will",
    last_name: "Guan",
    role: "Web Developer",
    bio: "Accountant turned web developer"},
  ])

def generate_seats(num_of_seats, seats_per_row)
  seats_array = []
  row_array = ('A'..'Z').to_a
  num_of_rows = num_of_seats / seats_per_row

  num_of_rows.times do |row|
    seats_per_row.times do |seating|
      seating = seating + 1
      seats_array<<row_array[row]+seating.to_s
    end
  end

  num_of_seats.times do |seating|
    seat = Seating.new
    seat.seating = seats_array[seating]
    seat.occupied = false
    if seats_array[seating][0] == "A"
      seat.price = '70'
    else
      seat.price = '50'
    end
    seat.save
  end

  return seats_array
end
generate_seats(60, 10)

