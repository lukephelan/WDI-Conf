class HomeController < ApplicationController

	def index
		@seatsarray = []
		seats = Seating.all
		seats.each do |s|
			@seatsarray << s.seating
		end
	end
end