class SeatingsController < ApplicationController

	# def index
	# # 	render json: @seats.to_json
	# 	redirect_to root
	# end

	# Find the right controller (which points to indx page), grab all seats columns from seating tabel, join all into big array, iterate through to grab each seat id, parse that into jQuery for what those are.
# @user = User.alll
	def create
		seat = Seating.new
		seat.seating = params[:post][:seats].split(',')
		seat.save
		redirect_to '/'
	end

	# def update
	# 	seat = Seating.find(params[:id].to_i)
	# 	seat.status = params[:occupied]
	# 	seat.save
	# 	render json: seat.to_json
	# end

	# def reserve_seats
	# 	seat_numbers = params[:seating]
	# 	reserved_seats = []
	# 	seat_numbers.each do |seat_num|
	# 		seat = Seating.find_by(seating: seat_num)
	# 		seat.occupied = true
	# 		seat.save
	# 		reserved_seats << seat
	# 	end
	# 	render json: reserve_seats.to_json
	# end

	# def unreserve_seats
	# 	seat_numbers = params[:seating]
	# 	reserved_seats = []
	# 	seat_numbers.each do |seat_num|
	# 		seat = Seating.find_by(seating: seat_num)
	# 		seat.occupied = false
	# 		seat.save
	# 		unreserve_seats << seat
	# 	end
	# 	render json: unreserve_seats.to_json
	# end

	def show
		#insert logic to rule out seats taken
		render :index
	end
end
