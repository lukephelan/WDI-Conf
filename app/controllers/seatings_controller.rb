class SeatingsController < ApplicationController

	def index
		@seats = Seating.all
		render json: @seats.to_json
	end

	def create
		params[:seating].each do |s|
			seat = Seating.new
			seat.seating = s
			seat.occupied = true
			seat.save
			# seat === seatnumber e.g. A1, B2 etc.
		end
		render json: params
	end

	def update
		seat = Seating.find(params[:id].to_i)
		seat.status = params[:occupied]
		seat.save
		render json: seat.to_json
	end

	def reserve_seats
		seat_numbers = params[:seating]
		reserved_seats = []
		seat_numbers.each do |seat_num|
			seat = Seating.find_by(seating: seat_num)
			seat.occupied = true
			seat.save
			reserved_seats << seat
		end
		render json: reserve_seats.to_json
	end

	def unreserve_seats
		seat_numbers = params[:seating]
		reserved_seats = []
		seat_numbers.each do |seat_num|
			seat = Seating.find_by(seating: seat_num)
			seat.occupied = false
			seat.save
			unreserve_seats << seat
		end
		render json: unreserve_seats.to_json
	end	

	def show
		#insert logic to rule out seats taken
		render :index
	end
end
